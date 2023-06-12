import styles from "./styles.module.css";

const ListFooter = () => {
    return (
        <div className='md:flex justify-between w-full p-8'>
          <ul className={styles.listFooterL}>
            <li>¿Cómo comprar?</li>
            <li>Cambios y Devoluciones</li>
            <li>Politica de Tratamiento de Datos</li>
            <li>Envios</li>
          </ul>
          <ul className={styles.listFooterR}>
            <li >Preguntas Frecuentes</li>
            <li >Ayuda</li>
            <li >Contacto</li>
            <li >Sugerencias, Quejas y Reclamos</li>
          </ul>
        </div>
    )
}

export default ListFooter;