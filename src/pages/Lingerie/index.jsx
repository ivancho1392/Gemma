import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"; 
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { getProductByCategory } from "../../services/getProducts";

export default function Lingerie() {
  const context = useContext(ShoppingCartContext);
  var productsData = [];

  const fetchProducts = async () => {
    productsData = await getProductByCategory("Lenceria");
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
      <h1 className='text-3xl mt-8'>Lingerie</h1>
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
