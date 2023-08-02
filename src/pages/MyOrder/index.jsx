import Layout from "../../Components/Layout";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductList from "../../Components/ProductList";
import { getTotalPrice } from "../../utils";
import Link from "next/link";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const [totalPrice, setTotalPrice] = useState(
    getTotalPrice(context.cartProducts || []),
  );

  const handleProcesarCompra = () => {
    context.setFinalProducts(context.cartProducts);
    context.setCartProducts([]);
    context.setCount(0);
  };

  const handleDelete = id => {
    const filteredProducts = context.cartProducts.filter(
      product => product.productId !== id,
    );
    context.setCartProducts(filteredProducts);
    setTotalPrice(getTotalPrice(filteredProducts));
  };

  const handlerMinus = id => {
    const updatedCartProducts = context.cartProducts.map(product => {
      if (product.productId === id) {
        const updatedQuantity = product.quantity - 1;
        const newQuantity = Math.max(updatedQuantity, 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    context.setCartProducts(updatedCartProducts);
  };

  const handlerPlus = id => {
    const updatedCartProducts = context.cartProducts.map(product => {
      if (product.productId === id) {
        const updatedQuantity = product.quantity + 1;
        const newQuantity = Math.min(updatedQuantity, 10);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    context.setCartProducts(updatedCartProducts);
  }

  if (!context.cartProducts.length) {
    return (
      <>
        <Layout>
          <p>No hay productos en la orden.</p>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <h1 className="text-2xl mt-8">Mi Pedido</h1>
        <div className="flex flex-col w-100 mt-4">
          {context.cartProducts.map(product => (
            <ProductList
              key={product.productId}
              id={product.productId}
              price={product.price}
              name={product.name}
              imageSrc={product.imageURL[0]}
              handleDelete={handleDelete}
              quantity={product.quantity}
              handlerMinus={handlerMinus}
              handlerPlus={handlerPlus}
            />
          ))}
          <p className="flex justify-between items-center mb-2 p-4">
            <span className="font-light">SubTotal:</span>
            <span className="font-medium text-2xl">${totalPrice}</span>
          </p>
          <Link href="/Registro">
            <button
              className="bg-black w-full py-3 text-white rounded-lg m-4"
              onClick={handleProcesarCompra}
            >
              Procesar Compra
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-100 w-full py-3 border border-black text-black rounded-lg m-4">
              Seguir Comprando
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
