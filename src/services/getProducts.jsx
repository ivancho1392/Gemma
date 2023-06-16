import axios from 'axios';

export const getProducts = async () => {
    try{  
      const response = await axios.get('https://5irkuw7it7.execute-api.us-east-1.amazonaws.com/products');
      return response.data; 
    } catch(error){
      console.log("la solicitud ha fallado")
      console.log(error)
    }
  }