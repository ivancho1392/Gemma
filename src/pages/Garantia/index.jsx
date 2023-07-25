import Layout from "../../Components/Layout";
import styles from "./styles.module.css";

export default function Garantia() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Solicitudes de Garantía</h1>
        <p className={styles.justified_text1}>
          Todos nuestros productos cuentan con garantia de 60 días calendario
          desde la fecha de compra. La garantía consta de arreglos en costuras,
          defectos de fábrica u otros.
        </p>
        <ul className={styles.justified_text}>
          <li>
            Para el proceso de garantía el cliente debe comunicarse por medio de
            nuestra línea de WhatsApp +57 3 para que el área encargada pueda
            proceder a analizar la garantía de la prenda.
          </li>
          <li>
            El proceso de garantía se realiza en un tiempo mínimo de 10 días
            hábiles después de recibido el producto.{" "}
          </li>
          <li>
            En caso de no solución, la prenda se cambiará por una nueva o un
            bono por el valor del adquirido que podrá ser redimido durante un
            período de 6 meses.
          </li>
        </ul>
      </Layout>
    </div>
  );
}
