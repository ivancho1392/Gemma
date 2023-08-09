import axios from "axios";

export const postUser = async (userData) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APIGATEWAY_URL_USERS, userData);     
        return response.data;
      } catch (error) {
        console.log("la solicitud getProducts ha fallado");
        console.log(error);
      }
    };