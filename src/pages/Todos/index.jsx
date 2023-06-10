import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { productsArray } from "../../utils/productsArray";

export default function Todos() {
  return (
    <div>
      <Layout >
        <h1 className='text-3xl mt-8'>Todos los productos</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3'>
          {productsArray.map((product) => (
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
      </Layout>
    </div>
  );
}
