import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import styles from "./styles.module.css";

const ThreeBars = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`flex ${context.isThreeBarsOpen ? "grid" : "hidden"} ${
        styles.ThreeBars
      } shadow-2xl bg-white fixed left-0 border border-black rounded-lg flex-col p-6`}
    >
      <ul>
        <li className="mb-2 ">
          <Link
            href="/"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className='font-bold text-lg'
              onClick={() => {
                context.closeThreebars();
              }}
            >
              Todos
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/Botas"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a
              onClick={() => {
                context.closeThreebars();
              }}
            >
              Botas
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/Lingerie"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a
              onClick={() => {
                context.closeThreebars();
              }}
            >
              Lingerie
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/Calzado"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a
              onClick={() => {
                context.closeThreebars();
              }}
            >
              Calzado
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/Pyjamas"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a
              onClick={() => {
                context.closeThreebars();
              }}
            >
              Croptop
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default ThreeBars;
