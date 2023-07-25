import Layout from "../../Components/Layout";
import styles from "./styles.module.css";

export default function CambiosyDevoluciones() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Cambios y Devoluciones</h1>
        <ul className={styles.justified_text}>
          <li>
            Las políticas de cambio solo permiten realizar el cambio de la
            compra UNA SOLA VEZ.
          </li>
          <li>
            Los gastos de envío para el retorno del producto deben ser asumidos
            por el cliente.
          </li>
        </ul>
        <p className={styles.justified_text1}>
          Para realizar cambios por mercancía defectuosa, daños de costura o
          cierres; debes comunicarte por medio de nuestra línea de WhatsApp +57
          3 para coordinar la devolución y cambio del producto .
        </p>
        <h1 className="text-3xl mt-8">Cambios por Mercancia Defectuosa</h1>
        <p className={styles.justified_text1}>
          Derecho al Retracto: Pueden retractarse de su compra hasta cinco (5)
          días hábiles después, contados a partir de la entrega de producto. Al
          hacer uso de este derecho el consumidor deberá devolver el producto al
          productor por los mismos medios y condiciones en los que lo recibió,
          NO SE HACE DEVOLUCIÓN DE DINERO, se puede cambiar por otra referencia
          que este dentro del mismo precio.
        </p>
        <ul className={styles.justified_text}>
          <li>
            Las prendas deben ser enviadas sin alteraciones, sin uso y con sus
            respectivas etiquetas; de esta manera no se verá afectado el proceso
            de cambio.
          </li>
          <li>
            Por favor, tenga en cuenta que si usted decide devolvernos los
            artículos a través de otros medios no autorizados, estaremos
            autorizados a cargarle los gastos en que podamos incurrir.
          </li>
        </ul>
      </Layout>
    </div>
  );
}
