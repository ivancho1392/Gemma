import styles from "./styles.module.css";
import Link from "next/link";

const ListFooter = () => {
  return (
    <div className="md:flex justify-between w-full p-8">
      <ul className={styles.listFooterL}>
        <li>¿Cómo comprar?</li>
        <li>
          <Link
            href="/CambiosyDevoluciones"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a>Cambios y Devoluciones</a>
          </Link>
        </li>
        <li>
          <Link
            href="/Garantia"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a>Solicitudes de Garantía</a>
          </Link>
        </li>
        <li>
          <Link
            href="/Envios"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a>Envios</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.listFooterR}>
        <li>Preguntas Frecuentes</li>
        <li>Ayuda</li>
        <li>Contacto</li>
        <li>Sugerencias, Quejas y Reclamos</li>
      </ul>
    </div>
  );
};

export default ListFooter;
