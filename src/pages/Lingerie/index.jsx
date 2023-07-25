import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { useFetchProductsByCategory } from "../../utils/getProductsUtil";

export default function Lingerie() {
  const lingerieProducts = useFetchProductsByCategory("Lenceria");

  return (
    <>
      <Layout>
        <h1 className="text-3xl mt-8">Lingerie</h1>
        <div className="max-w-3xl grid grid-cols-2 sm:grid-cols-3">
          {lingerieProducts.map((product) => (
            <Card
              key={product.id}
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
