import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_APIGATEWAY_URL);
    return response.data;
  } catch (error) {
    console.log("la solicitud ha fallado");
    console.log(error);
  }
};

export const getProductByID = async (productId) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_APIGATEWAY_URL}?productId=${productId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("la solicitud ha fallado");
    console.log(error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_APIGATEWAY_URL}?category=${category}`;
    console.log(url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("la solicitud ha fallado");
    console.log(error);
  }
};