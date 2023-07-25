import axios from "axios";

export const getProducts = async () => {
  try {
    console.log("url consultada");
    console.log(process.env.NEXT_PUBLIC_APIGATEWAY_URL);
    const response = await axios.get(process.env.NEXT_PUBLIC_APIGATEWAY_URL);     
    return response.data;
  } catch (error) {
    console.log("la solicitud getProducts ha fallado");
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
    const url = `${process.env.NEXT_PUBLIC_APIGATEWAY_URL}?category=${category}&limit=20  `;
    console.log(url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("la solicitud ha fallado");
    console.log(error);
  }
};