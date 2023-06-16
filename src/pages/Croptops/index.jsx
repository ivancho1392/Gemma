import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { getProducts } from "../../services/getProducts";
import { useState, useEffect } from "react";

export default function Pyjamas() {
  const [productsFromApi, setProductsFromApi] = useState([]);

  const renderProductsApi = () => {
    return productsFromApi.map(product => (
      <Card
        key={product.productId}
        category={product.category}
        price={product.price}
        name={product.name}
        product={product}
        imageSrc={product.imageURL[0]}
      />
    ));
  };

  const updateProductsFromApi = async () => {
    setProductsFromApi(await getProducts());
  };

  useEffect(() => {
    updateProductsFromApi();
  }, []);

  return (
    <>
      <Layout>
        <h1 className="text-3xl mt-8">Croptops</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {productsFromApi ? renderProductsApi() : null}
        </div>
        <ProductDetail />
        <CheckoutSideMenu />
      </Layout>
    </>
  );
}
