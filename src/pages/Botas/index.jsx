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
        <VideoComponent videoSrc={"/Videos/video1mp4.mp4"} />
        Botas
        <div className="grid grid-cols-4 gap-8 ">
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
