import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { productsArray } from "../../utils/productsArray";

export default function Pyjamas() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl mt-8">Croptops</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {productsArray
            .filter((product) => product.category === "Pijamas")
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
