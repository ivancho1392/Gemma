import Layout from "../../Components/Layout";
import ProductListResume from "../../Components/ProductListResume";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import styles from "./styles.module.css";

export default function ConfirmacionPedido() {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <Layout>
        {/* Título */}
        <h1 className="text-3xl mt-8">Confirmación de pedido</h1>

        {/* Sección 1: Agradecimiento */}
        <div className={styles.seccion1}>
          <p>
            Muchas gracias por realizar tu pedido. Un asesor se comunicará
            contigo en los próximos minutos para confirmar disponibilidad de
            tallas, colores, forma de pago y forma de envío de los productos que
            solicitaste y proceder con el despacho de tu orden.
          </p>
        </div>

        {/* Sección 2: Resumen de pedido */}
        <div className={styles.seccion2}>
          {/* Número de pedido */}
          <p className="ml-4 font-semibold text-lg mb-2">
            Número de pedido: Bgt236-12
          </p>

          {/* Lista de productos */}
          <div className="mb-4">
            <h2 className="ml-4 font-semibold text-lg">Lista de productos:</h2>
            <ul className="flex flex-row gap-2 p-4">
              <li style={{ width: "100px" }}>Nombre</li>
              <li style={{ width: "80px" }}>Foto</li>
              <li style={{ width: "200px" }}>Descripción</li>
              <li style={{ width: "120px" }}>Precio Unitario</li>
              <li style={{ width: "100px" }}>Cantidad</li>
              <li style={{ width: "100px" }}>Precio Total</li>
            </ul>
            <div className="flex flex-col w-100">
              {context.finalProducts.map(product => (
                <ProductListResume
                  key={product.productId}
                  price={product.price}
                  name={product.name}
                  description={product.description}
                  imageSrc={product.imageURL[2]}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Datos del cliente */}
        <div className={styles.datos}>
          <h2 className="ml-4 font-semibold text-lg">Datos del cliente:</h2>
          <p>{context.finalUserData.username}</p>
          <p>{context.finalUserData.celphone}</p>
          <p>{context.finalUserData.email}</p>
          <p>{context.finalUserData.country}</p>
          <p>{context.finalUserData.department}</p>
          <p>{context.finalUserData.city}</p>
          <p>{context.finalUserData.addres}</p>
        </div>

        {/* Sección 3: Formas de pago */}
        <div className="mt-6">
          <p className="font-semibold text-lg">
            Te recordamos que manejamos las siguientes formas de pago:
          </p>
          <ul className="pl-6">
            <li>Nequi</li>
            <li>Daviplata</li>
            <li>Consignación o transferencia a cuenta Bancolombia.</li>
            <li>Consignación o transferencia a cuenta Banco Caja Social.</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
