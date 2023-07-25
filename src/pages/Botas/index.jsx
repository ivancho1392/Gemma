import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { productsArray } from "../../utils/productsArray";
import VideoComponent from "../../Components/VideoComponent";

export default function Botas() {
  return (
    <>
      <Layout>
        <VideoComponent videoSrc={process.env.NEXT_PUBLIC_VIDEO_BOTAS_URL} imageSrc={process.env.NEXT_PUBLIC_BANNER2} />
        <h1 className='text-3xl mt-8'>Botas</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {productsArray
            .filter((product) => product.category === "Botas")
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
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    </>
  );
}
