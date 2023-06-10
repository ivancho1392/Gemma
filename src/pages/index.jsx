import Layout from "../Components/Layout";
import CategoryCard from "../Components/CategoryCard";
import Card from "../Components/Card";
import VideoComponent from "../Components/VideoComponent";
import Link from "next/link";
import { productsArrayTrends } from "../utils/productsArrayTrends";

export default function Home() {
  return (
    <div>
      <Layout>
        <VideoComponent videoSrc={"/Videos/videoHome.mp4"} />
        <h1 className="text-3xl p-8">Categorias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mr-4 ml-4 ">
          <Link href="/Botas">
            <CategoryCard
              imageSrc="/FotosDefinitivas/25.png"
              category="Botas"
            />
          </Link>
          <Link href="/Calzado">
            <CategoryCard
              imageSrc="/FotosDefinitivas/9.png"
              category="Calzado"
            />
          </Link>
          <Link href="/Lingerie">
            <CategoryCard
              imageSrc="/FotosDefinitivas/26.png"
              category="Lingerie"
            />
          </Link>
          <Link href="/Croptops">
            <CategoryCard
              imageSrc="/FotosDefinitivas/14.png"
              category="Croptops"
            />
          </Link>
        </div>
        <h1 className="text-3xl p-8">Tendencias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mr-4 ml-4 ">
          {productsArrayTrends.map((product) => (
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
        <Link href="/Todos">
          <button
            className={`button border p-3 text-black rounded-lg`}
          >
            Ver Todos
          </button>
        </Link>
      </Layout>
    </div>
  );
}
