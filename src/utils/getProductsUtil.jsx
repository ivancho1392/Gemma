import { useEffect, useContext, useCallback } from "react";
import { ShoppingCartContext } from "../Context";
import { getProductByCategory } from "../services/getProducts";

export const useFetchProductsByCategory = (category) => {
  const context = useContext(ShoppingCartContext);

  const fetchProducts = useCallback(async (category) => {
    if (!context.fetchedCategories[category]) {
      const productsData = await getProductByCategory(category);
      context.setProducts([...context.products, ...productsData]);
      context.setFetchedCategories({
        ...context.fetchedCategories,
        [category]: true,
      });
    }
  }, [category, context]);

  useEffect(() => {
    fetchProducts(category);
  }, [category, fetchProducts]);

  return context.products.filter((product) => product.category === category);
};