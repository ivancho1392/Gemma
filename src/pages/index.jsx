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
          <ul className='md:ml-20'>
            <li className="flex justify-center  cursor-pointer">¿Cómo comprar?</li>
            <li className="flex justify-center  cursor-pointer">Cambios y Devoluciones</li>
            <li className="flex justify-center  cursor-pointer">Politica de Tratamiento de Datos</li>
            <li className="flex justify-center  cursor-pointer">Envios</li>
          </ul>
          <ul className='md:mr-20'>
            <li className="flex justify-center  cursor-pointer">Preguntas Frecuentes</li>
            <li className="flex justify-center  cursor-pointer">Ayuda</li>
            <li className="flex justify-center  cursor-pointer">Contacto</li>
            <li className="flex justify-center  cursor-pointer">Sugerencias, Quejas y Reclamos</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
