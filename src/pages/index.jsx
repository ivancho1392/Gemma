import Layout from "../Components/Layout";
import CategoryCard from "../Components/CategoryCard";
import Card from "../Components/Card";
import VideoComponent from "../Components/VideoComponent";
import Link from "next/link";
import { getProductByCategory } from "../services/getProducts";
import ListFooter from "../Components/ListFooter"
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../Context";


export default function Home() {
  const context = useContext(ShoppingCartContext);
  
  const fetchProducts = async () => {
    try {
      const productsData = await getProductByCategory("Botas");
      context.setProducts(productsData);
      context.setLoading(false);
    } catch (error) {
      console.log("La solicitud ha fallado");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Layout>
        <VideoComponent videoSrc={process.env.NEXT_PUBLIC_VIDEO_HOME_URL} imageSrc={process.env.NEXT_PUBLIC_BANNER1}/>
        <h1 className="text-3xl p-4 mt-4">Categorias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 ">
          <Link href="/Calzado">
            <CategoryCard
              imageSrc={process.env.NEXT_PUBLIC_CALZADO}
              category="Calzado"
            />
          </Link>
          <Link href="/Lingerie">
            <CategoryCard
              imageSrc={process.env.NEXT_PUBLIC_LENCERIA}
              category="Lingerie"
            />
          </Link>
          <Link href="/Croptops">
            <CategoryCard
              imageSrc={process.env.NEXT_PUBLIC_CROPTOPS}
              category="Croptops"
            />
          </Link>
        </div>
        <h1 className="text-3xl mt-8">Tendencias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {context.products && context.products.map((product) => (
            <Card
              key={product.id}
              imageSrc={product.imageURL[0]}
              category={product.category}
              price={product.price}
              name={product.name}
              product={product}
            />
          ))}
        </div>
        <Link href="/Todos">
          <button
            className={`button border p-3 m-4 text-white bg-black rounded-lg`}
          >
            Ver Todos
          </button>
        </Link>
        <ListFooter />
      </Layout>
    </div>
  );
}
