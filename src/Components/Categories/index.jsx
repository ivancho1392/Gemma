import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import styles from "./styles.module.css";

const Categories = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`flex ${context.isCategoriesOpen ? "grid" : "hidden"} ${
        styles.Categories
      } shadow-2xl bg-white fixed left-0 border border-black rounded-lg flex-col p-6`}
    >
      <ul>

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
                context.closeCategories();
              }}
            >
              Botas
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
                context.closeCategories();
              }}
            >
              Mocasines
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
                context.closeCategories();
              }}
            >
              Lenceria
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/Croptops"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a
              onClick={() => {
                context.closeCategories();
              }}
            >
              Croptops
            </a>
          </Link>
        </li>
        <li className="mb-2 ">
          <Link
            href="/Todos"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className='font-bold text-lg'
              onClick={() => {
                context.closeCategories();
              }}
            >
              Todos los productos
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Categories;
