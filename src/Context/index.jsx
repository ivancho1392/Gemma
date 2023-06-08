import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart Count
  const [count, setCount] = useState(0);
 
  //Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  //Checkout Side Menu . Open/Close/Toggle
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckOut = () => {
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckOut = () => {
    setIsCheckoutSideMenuOpen(false);
  };
  const ToggleCheckOut = () => {
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);
  };

  //Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});

  //ShoppingCart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //ShoppingCart . Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckOut,
        closeCheckOut,
        isCheckoutSideMenuOpen,
        ToggleCheckOut,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
