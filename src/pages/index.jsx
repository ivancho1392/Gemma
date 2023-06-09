import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import ProductDetail from "../Components/ProductDetail";
import CheckoutSideMenu from "../Components/CheckoutSideMenu";
import { productsArray } from "../utils/productsArray";

export default function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <Layout >
        Todos los Productos
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mr-4 ml-4 '>
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
        {/* <div className="grid grid-cols-3 gap-8">
          {items?.map((datas) => (
            <Card
              key={datas.id}
              imageSrc={datas.images[0]}
              category={datas.category.name}
              price={datas.price}
              name={datas.title}
            />
          ))}
        </div> */}
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    </div>
  );
}
