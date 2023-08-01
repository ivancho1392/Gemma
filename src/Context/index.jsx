import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/getProducts";

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
  const [mainImage, setMainImage] = useState({});

  //ShoppingCart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //ShoppingCart . Order
  const [order, setOrder] = useState([]);

  //Categories . Open/close/toggle
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const openCategories = () => {
    setIsCategoriesOpen(true);
  };
  const closeCategories = () => {
    setIsCategoriesOpen(false);
  };
  const ToggleCategories= () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  //Account Options . Open/close/toggle
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const openAccount = () => {
    setIsAccountOpen(true);
  };
  const closeAccount = () => {
    setIsAccountOpen(false);
  };
  const ToggleAccount= () => {
    setIsAccountOpen(!isAccountOpen);
  };

  //Product Array from DynamoDB. 
  const [products, setProducts] = useState([]);
  const [fetchedCategories, setFetchedCategories] = useState({});

  //Final Product to order
  const [finalProducts, setFinalProducts] = useState([]);

  //Final UserData to order
  const [finalUserData, setFinalUserData] = useState([]);

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
        setOrder,
        isCategoriesOpen,
        openCategories,
        closeCategories,
        ToggleCategories,
        isAccountOpen,
        openAccount,
        closeAccount,
        ToggleAccount,
        products,
        setProducts,
        fetchedCategories,
        setFetchedCategories,
        mainImage,
        setMainImage,
        finalProducts,
        setFinalProducts,
        finalUserData,
        setFinalUserData
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
