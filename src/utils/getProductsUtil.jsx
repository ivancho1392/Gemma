import { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { getProductByCategory } from "../services/getProducts";

export const useFetchProductsByCategory = (category) => {
  const context = useContext(ShoppingCartContext);

  const fetchProducts = async (category) => {
    if (!context.fetchedCategories[category]) {
      const productsData = await getProductByCategory(category);
      context.setProducts([...context.products, ...productsData]);
      context.setFetchedCategories({
        ...context.fetchedCategories,
        [category]: true,
      });
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return context.products.filter((product) => product.category === category);
};