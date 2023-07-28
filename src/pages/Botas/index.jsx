import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import VideoComponent from "../../Components/VideoComponent";
import { useFetchProductsByCategory } from "../../utils/getProductsUtil";

export default function Botas() {
  const botasProducts = useFetchProductsByCategory("Botas");

  return (
    <>
      <Layout>
        <VideoComponent
          videoSrc={process.env.NEXT_PUBLIC_VIDEO_BOTAS_URL}
          imageSrc={process.env.NEXT_PUBLIC_BANNER_BOTAS}
        />
        <h1 className="text-3xl mt-8">Botas</h1>
        <div className="max-w-3xl grid grid-cols-2 sm:grid-cols-3">
          {botasProducts.map(product => (
            <Card
              key={product.productId}
              imageURL={product.imageURL}
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
