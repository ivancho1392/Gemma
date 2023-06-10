import { useState} from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { productsArray } from "../utils/productsArray";
import VideoComponent from "../Components/VideoComponent";


export default function Home() {

  return (
    <div>
      <Layout >
        <VideoComponent />
        Todos los Productos
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 mr-4 ml-4 '>
          {productsArray.map((product) => (
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
      </Layout>
    </div>
  );
}
