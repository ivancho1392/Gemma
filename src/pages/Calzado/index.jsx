import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import VideoComponent from "../../Components/VideoComponent";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { getProductByCategory } from "../../services/getProducts";

export default function Calzado() {
  const context = useContext(ShoppingCartContext);
  var productsData = [];

  const fetchProducts = async () => {
    productsData = await getProductByCategory("Botas");
    console.log("productos recibidos:");
    console.log(productsData);
    context.setProducts(productsData);
}

useEffect(() => {
  productsData = [];
  fetchProducts();
}, []);

  return (
    <>
      <Layout>
      <VideoComponent videoSrc={process.env.NEXT_PUBLIC_VIDEO_HOME_URL} imageSrc={process.env.NEXT_PUBLIC_BANNER3}/>
        <h1 className="text-3xl mt-8">Calzado</h1>
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
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    </>
  );
}
