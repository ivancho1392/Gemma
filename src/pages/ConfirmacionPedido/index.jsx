import Layout from "../../Components/Layout";
import styles from "./styles.module.css";

export default function ConfirmacionPedido() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Confirmación de pedido</h1>
        <p className={styles.justified_text1}>
          Pedido realizado con exito.
        </p>
      </Layout>
    </div>
  );
}
