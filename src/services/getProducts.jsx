import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_APIGATEWAY_URL);     
    return response.data;
  } catch (error) {
  }
};

export const getProductByID = async (productId) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_APIGATEWAY_URL_PRODUCTS}?productId=${productId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
  }
};

export const getProductByCategory = async (category) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_APIGATEWAY_URL_PRODUCTS}?category=${category}&limit=40`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
  }
};

