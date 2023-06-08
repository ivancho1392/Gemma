import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import ProductDetail from "../Components/ProductDetail";
import CheckoutSideMenu from "../Components/CheckoutSideMenu";

export default function Home() {
  const [items, setItems] = useState();
  const products = [
    {
      id: 1,
      imageSrc: "/1.PNG",
      category: "Sets de Lenceria",
      price: 55000,
      name: "Set Negro",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 2,
      imageSrc: "/VarillaBlanco.PNG",
      category: "Sets de Lenceria",
      price: 58000,
      name: "Set Varilla Blanco",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 3,
      imageSrc: "/VarillaNegro.PNG",
      category: "Sets de Lenceria",
      price: 5500,
      name: "Set Varilla Negro",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 4,
      imageSrc: "/NeoRojo.PNG",
      category: "Sets de Lenceria",
      price: 66000,
      name: "Set Neo Rojo",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 5,
      imageSrc: "/OliviaBicolor.jpeg",
      category: "Sets de Lenceria",
      price: 48000,
      name: "Set Olivia Bicolor",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 6,
      imageSrc: "/Anastasia.PNG",
      category: "Sets de Lenceria",
      price: 60000,
      name: "Set Anastasia",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 7,
      imageSrc: "/VarillaLigero.PNG",
      category: "Sets de Lenceria",
      price: 52000,
      name: "Set Varilla Liguero",
      description: "Juego de lenceria de tres piezas con finos materiales y detalles.",
    },
    {
      id: 8,
      imageSrc: "/Vaqueras1.PNG",
      category: "Botas para dama",
      price: 230000,
      name: "Botas Vaqueras 1",
      description: "Hermosas botas en tendencia.",
    },
  ];

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <Layout >
        Home
        <div className='grid grid-cols-3 gap-8 '>
          {products.map((product) => (
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
