import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import ThreeBars from "../ThreeBars";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const router = useRouter();

  const isActiveLink = (pathname) => {
    return router.pathname === pathname ? "border-b-2 border-gray-500" : "";
  };

  return (
    <nav className="flex justify-between z-50 items-end fixed top-0 left-0 right-0 w-full h-15 py-5 px-8 text-sm font-light bg-white shadow-lg">
      <div className="sm:hidden">
        <ul className="flex items-end gap-3 ">
          <li>
            <IoReorderThreeOutline
              className="h-6 w-6"
              onClick={() => {
                context.closeProductDetail();
                context.closeCheckOut();
                context.ToggleThreebars();
              }}
            />
          </li>
        </ul>
      </div>
      <ul className="flex items-end gap-3">
        <li className="font-semibold text-lg">
          <Link href="/">
            <Image src="/LogoGEMMA.jpeg" alt="1" width={80} height={80} />
          </Link>
        </li>
        <div className="hidden sm:block">
          <li>
            <Link
              href="/"
              passHref
              scroll={false}
              scrollOptions={{ top: 0 }}
              legacyBehavior
            >
              <a className={isActiveLink("/")}>Todos</a>
            </Link>
          </li>
        </div>
        <div className="hidden sm:block">
          <li>
            <Link
              href="/Categorias"
              passHref
              scroll={false}
              scrollOptions={{ top: 0 }}
              legacyBehavior
            >
              <a className={isActiveLink("/Categorias")}>Categorias</a>
            </Link>
          </li>
        </div>
      </ul>
      <ul className="flex items-end gap-3">
        <div className="hidden sm:block">
          <li>
            <Link
              href="/MyOrder"
              passHref
              scroll={false}
              scrollOptions={{ top: 0 }}
              legacyBehavior
            >
              <a className={isActiveLink("/MyOrder")}>Mi Pedido</a>
            </Link>
          </li>
        </div>
        <li className="flex ">
          <CiUser className="h-6 w-6" />
        </li>
        <li className="flex ">
          {context.count === 0 ? (
            <LuShoppingBag
              className="h-6 w-6"
              onClick={() => {
                context.ToggleCheckOut();
                context.closeProductDetail();
                context.closeThreebars();
              }}
            />
          ) : (
            <HiOutlineShoppingBag
              className="h-6 w-6"
              onClick={() => {
                context.ToggleCheckOut();
                context.closeProductDetail();
                context.closeThreebars();
              }}
            />
          )}
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
