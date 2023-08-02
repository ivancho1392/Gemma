import Layout from "../../Components/Layout";
import styles from "./styles.module.css";
import ProductListResume from "../../Components/ProductListResume";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function ConfirmacionPedido() {
  const context = useContext(ShoppingCartContext);
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Confirmación de pedido</h1>
        <p className={styles.justified_text1}>
          Muchas gracias por realizar tu pedido. Un asesor se comunicará contigo
          en los próximos minutos para confirmar disponibilidad de tallas,
          colores, forma de pago y forma de envío de los productos que
          solicitaste y proceder con el despacho de tu orden.
        </p>
        <p className={styles.justified_text1}>Número de pedido: : Bgt236-12</p>
        <ul className="flex flex-row gap-2 p-4 ml-12">
          <li style={{ width: "100px" }}>Nombre</li>
          <li style={{ width: "80px" }}>Foto</li>
          <li style={{ width: "200px" }}>Descripción</li>
          <li style={{ width: "120px" }}>Precio Unitario</li>
          <li style={{ width: "100px" }}>Cantidad</li>
          <li style={{ width: "100px" }}>Precio Total</li>
        </ul>
        <div className="flex flex-col w-100 mt-4 ml-12">
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
        <p className={styles.text_right}>SubTotal</p>
        <p className={styles.text_right}>Envio</p>
        <p className={styles.text_right}>Impuestos</p>
        <p className={styles.text_right}>Total</p>
        <p className={styles.text_left}>{context.finalUserData.username}</p>
        <p className={styles.text_left}>{context.finalUserData.celphone}</p>
        <p className={styles.text_left}>{context.finalUserData.email}</p>
        <p className={styles.text_left}>{context.finalUserData.country}</p>
        <p className={styles.text_left}>{context.finalUserData.department}</p>
        <p className={styles.text_left}>{context.finalUserData.city}</p>
        <p className={styles.text_left}>{context.finalUserData.addres}</p>

        <p className={styles.text_left2}>
          Te recordamos que manejamos las siguientes formas de pago:
        </p>
        <p className={styles.text_left2}>Nequi</p>
        <p className={styles.text_left2}>Daviplata</p>
        <p className={styles.text_left2}>Consignación o transferencia a cuenta Bancolombia.</p>
        <p className={styles.text_left2}>Consignación o transferencia a cuenta Banco Caja Social.</p>
      </Layout>
    </div>
  );
}
