import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { GrClose } from "react-icons/gr";
import { ShoppingCartContext } from "../../Context";
import ProductList from "../ProductList";
import { getTotalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: getTotalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckOut();
  };


  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} ${
        styles.CheckOutSideMenu
      } shadow-2xl bg-white flex flex-col fixed right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">My Order</h2>
        <div
          className="flex justify-center items-center cursor-pointer  bg-white rounded-full w-6 h-6 transform transition-all duration-300 hover:scale-110 hover:bg-black/5"
          onClick={() => context.closeCheckOut()}
        >
          <GrClose />
        </div>
      </div>

      <div className="w-65 h-30 rounded-lg mb-16 items-center justify-center flex-1">
        {context.cartProducts.map((cartProduct) => (
          <ProductList
            key={cartProduct.productId}
            id={cartProduct.productId}
            price={cartProduct.price}
            name={cartProduct.name}
            imageSrc={cartProduct.imageURL[0]}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${getTotalPrice(context.cartProducts)}
          </span>
        </p>
        <Link href="/MyOrder">
          <button
            className="bg-black w-full py-3 text-white rounded-lg"
            onClick={handleCheckout}
          > 
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
