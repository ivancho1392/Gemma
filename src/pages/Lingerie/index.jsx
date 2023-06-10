import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { productsArray } from "../../utils/productsArray";

export default function Lingerie() {
  return (
    <>
      <Layout>
      <h1 className='text-3xl mt-8'>Lingerie</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {productsArray
            .filter((product) => product.category === "Sets de Lenceria")
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
