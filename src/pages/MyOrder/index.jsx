import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductList from "../../Components/ProductList";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const lastOrder = context.order?.slice(-1)[0];

  if (!lastOrder || !lastOrder.products) {
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
        <div className="flex flex-col w-80 mt-4">
          {lastOrder.products.map((product) => (
            <ProductList
              key={product.productId}
              id={product.productId}
              price={product.price}
              name={product.name}
              imageSrc={product.imageURL[0]}
            />
          ))}

          <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
              ${lastOrder.totalPrice}
            </span>
          </p>
        </div>
      </Layout>
    </>
  );
}
