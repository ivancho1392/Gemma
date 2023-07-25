import Layout from "../../Components/Layout";
import styles from "./styles.module.css";

export default function Envios() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Envios Nacionales</h1>
        <p className={styles.justified_text}>
          Nuestros envíos y domicilios tienen cobertura a nivel Nacional. El
          valor del Envío generalmente es cancelado AL FINALIZAR LA COMPRA; en
          casos excepcionales por la ubicación del comprador (trayectos
          especiales), se contactará al cliente para cancelar el valor adicional
          del envío, nuestros asesores se contactarán por medio del número y
          correo que se adjunte en la información de compra.
        </p>
        <h1 className="text-3xl mt-8">Envios Internacionales</h1>
        <p className={styles.justified_text}>
          Nuestros envíos internacionales tienen cobertura a nivel mundial. El
          costo del envío es variable según sus dimensiones, peso y el valor
          asegurado. El precio del envío dado al final de la compra será un
          aproximado ya que puede variar según el numero de prendas; para la
          realización de un despacho internacional la compra debe ser hecha en
          DOLAR como moneda global , los envíos pueden durar un poco más de lo
          normal en alistamiento por minuciosas revisiones , si se presenta
          alguna novedad ya sea por inventario o costos nuestros asesores se
          contactarán por medio del número y correo que se adjunte en la
          información de compra. Recuerda que todas las compras internacionales
          (fuera de Colombia) pueden generar impuestos por parte del país
          receptor y no corresponden a valores de la prenda o envío.
        </p>
        <h1 className="text-3xl mt-8">Precios de Envios</h1>
        <p className={styles.justified_text}>
          Todos los envíos a nivel nacional (Colombia) tienen un costo de
          $13.500. El envío especial para Ciudades intermedias o trayectos de
          dificil acceso tiene un valor de $17.900 Si estás ubicado en Bogotá
          D.C. y sus alrededores, podrás recibir tus pedidos a domicilio, por un
          valor de $ 8.000 este precio es sujeto a una ruta que puede ser
          entregada en el transcurso dia o al siguiente. Los envíos
          internacionales tienen un precio variable en DOLARES respecto al lugar
          de destino /seguro / peso y tamaño del paquete - LOS ENVIOS
          INTERNACIONALES SOLO SE REALIZAN SI LA COMPRA SE REALIZA CON EL PRECIO
          EN DOLARES.
        </p>
      </Layout>
    </div>
  );
}
