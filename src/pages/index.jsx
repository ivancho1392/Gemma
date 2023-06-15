import Layout from "../Components/Layout";
import CategoryCard from "../Components/CategoryCard";
import Card from "../Components/Card";
import VideoComponent from "../Components/VideoComponent";
import Link from "next/link";
import { productsArrayTrends } from "../utils/productsArrayTrends";
import ListFooter from "../Components/ListFooter";

export default function Home() {
  return (
    <div>
      <Layout>
        <VideoComponent videoSrc={"https://gemmastore.s3.amazonaws.com/videos/videoHome.mp4"} />
        <h1 className="text-3xl p-4 mt-4">Categorias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 ">
          <Link href="/Botas">
            <CategoryCard
              imageSrc={"https://gemmastore.s3.amazonaws.com/fotos/BotinBlancoSinCordon2.png"}
              category="Botas"
            />
          </Link>
          <Link href="/Calzado">
            <CategoryCard
              imageSrc={"https://gemmastore.s3.amazonaws.com/fotos/BotasEstrellasBlancas4.png"}
              category="Calzado"
            />
          </Link>
          <Link href="/Lingerie">
            <CategoryCard
              imageSrc={"https://gemmastore.s3.amazonaws.com/fotos/BotasNegrasAltas2.png"}
              category="Lingerie"
            />
          </Link>
          <Link href="/Croptops">
            <CategoryCard
              imageSrc={"https://gemmastore.s3.amazonaws.com/fotos/BotaBlancaTaconAlto6.png"}
              category="Croptops"
            />
          </Link>
        </div>
        <h1 className="text-3xl mt-8">Tendencias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
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
