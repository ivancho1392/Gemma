import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { productsArray } from "../../utils/productsArray";
import axios from 'axios';



export default function Pyjamas() {
  const productoaenviar = {
    "productId": 10,
    "category": "Botas",
    "color": "Blanco",
    "imageURL": [
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto1.png",
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto2.png",
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto3.png",
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto4.png",
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto5.png",
        "https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto6.png"
      ],
    "name": "Bota Blanca Tacon Alto",
    "talla": "36"
  }

  const postProducts = async () => {
    try{  
      const response = await axios.post('https://5irkuw7it7.execute-api.us-east-1.amazonaws.com/products', productoaenviar);
    console.log("exitoso")
    console.log(response.data);}
    catch(error){
      console.log("la solicitud ha fallado")
      console.log(error)
    }
  }

  const getProducts = async () => {
    try{  
      const response = await axios.get('https://5irkuw7it7.execute-api.us-east-1.amazonaws.com/products');
    console.log("exitoso")
    console.log(response.data);}
    catch(error){
      console.log("la solicitud ha fallado")
      console.log(error)
    }
  }
  return (
    <>
      <Layout>
        <h1 className="text-3xl mt-8">Croptops</h1>
        <button 
          onClick={getProducts}
        >GetProducts</button>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {productsArray
            .filter((product) => product.category === "Pijamas")
            .map((product) => (
              <Card
                key={product.id}
                imageSrc={product.imageSrc}
                category={product.category}
                price={product.price}
                name={product.name}
                product={product}
              />
            ))}
        </div>
        <button 
          onClick={postProducts}
        >GetProducts</button>
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    </>
  );
}
