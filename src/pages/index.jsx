import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { data } from "autoprefixer";

export default function Home() {
  const [items, setItems] = useState();
  const products = [
    {
      id: 1,
      imageSrc: "/1.PNG",
      category: "Set Lenceria",
      price: 55000,
      name: "Set Negro",
    },
    {
      id: 2,
      imageSrc: "/VarillaBlanco.PNG",
      category: "Set Lenceria",
      price: 58000,
      name: "Set Varilla Blanco",
    },
    {
      id: 3,
      imageSrc: "/VarillaNegro.PNG",
      category: "Set Lenceria",
      price: 5500,
      name: "Set Varilla Negro",
    },
    {
      id: 4,
      imageSrc: "/NeoRojo.PNG",
      category: "Set Lenceria",
      price: 66000,
      name: "Set Neo Rojo",
    },
    {
      id: 5,
      imageSrc: "/OliviaBicolor.jpeg",
      category: "Set Lenceria",
      price: 48000,
      name: "Set Olivia Bicolor",
    },
    {
      id: 6,
      imageSrc: "/Anastasia.PNG",
      category: "Set Lenceria",
      price: 60000,
      name: "Set Anastasia",
    },
    {
      id: 7,
      imageSrc: "/VarillaLigero.PNG",
      category: "Set Lenceria",
      price: 52000,
      name: "Set Varilla Liguero",
    },
    {
      id: 8,
      imageSrc: "/Vaqueras1.PNG",
      category: "Botas",
      price: 230000,
      name: "Botas Vaqueras 1",
    },
  ];

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Layout>
        Home
        <div className='grid grid-cols-3 gap-8'>
          {products.map((product) => (
            <Card
              key={product.id}
              imageSrc={product.imageSrc}
              category={product.category}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8">
          {items?.map((datas) => (
            <Card
              key={datas.id}
              imageSrc={datas.images[0]}
              category={datas.category.name}
              price={datas.price}
              name={datas.title}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
