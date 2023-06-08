import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductList from "../../Components/ProductList";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        MyOrder
        <div className="flex flex-col w-80">
          {context.order?.slice(-1)[0].products.map(product => (
            <ProductList
              key={product.id}
              id={product.id}
              price={product.price}
              name={product.name}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
