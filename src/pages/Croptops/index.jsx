import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { useFetchProductsByCategory } from "../../utils/getProductsUtil";
import VideoComponent from "../../Components/VideoComponent";

export default function Pyjamas() {
  const croptopsProducts = useFetchProductsByCategory("Croptops");

  return (
    <>
      <Layout>
      <VideoComponent videoSrc={process.env.NEXT_PUBLIC_VIDEO_CROPTOPS_URL} imageSrc={process.env.NEXT_PUBLIC_BANNER_CROPTOPS}/>
        <h1 className="text-3xl mt-8">Croptops</h1>
        <div className="max-w-3xl grid grid-cols-2 sm:grid-cols-3">
          {croptopsProducts.map(product => (
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
