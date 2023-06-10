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
        <h1 className="text-3xl p-4 mt-4">Categorias</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 ">
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
        <div className='md:flex justify-between w-full p-8'>
          <ul className='ml-40 mr-40 md:mr-0'>
            <li>¿Cómo comprar?</li>
            <li>Cambios y Devoluciones</li>
            <li>Politica de Tratamiento de Datos</li>
            <li>Envios</li>
          </ul>
          <ul className='mr-40 ml-40 md:ml-0'>
            <li>Preguntas Frecuentes</li>
            <li>Ayuda</li>
            <li>Contacto</li>
            <li>Sugerencias, Quejas y Reclamos</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
