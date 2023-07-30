import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const router = useRouter();

  const isActiveLink = pathname => {
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
                context.closeAccount();
                context.closeProductDetail();
                context.closeCheckOut();
                context.ToggleCategories();
              }}
            />
          </li>
        </ul>
      </div>
      <ul className="flex items-end gap-3">
        <li className="font-semibold text-lg">
          <Link href="/">
            <Image
              src="/Logos/logogema.svg"
              alt="1"
              width={80}
              height={80}
              onClick={() => {
                context.closeAccount();
                context.closeCheckOut();
                context.closeProductDetail();
                context.closeCategories();
              }}
            />
          </Link>
        </li>
        <div className="hidden sm:block">
          <li>
            <Link
              href="/Todos"
              passHref
              scroll={false}
              scrollOptions={{ top: 0 }}
              legacyBehavior
            >
              <a
                className={isActiveLink("/Todos")}
                onClick={() => {
                  context.closeAccount();
                  context.closeCheckOut();
                  context.closeProductDetail();
                  context.closeCategories();
                }}
              >
                Todos
              </a>
            </Link>
          </li>
        </div>
        <div className="hidden sm:block">
          <li>
            <a
              className="cursor-pointer"
              onClick={() => {
                context.closeAccount();
                context.closeCheckOut();
                context.closeProductDetail();
                context.ToggleCategories();
              }}
            >
              Categorias
            </a>
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
              <a
                className={isActiveLink("/MyOrder")}
                onClick={() => {
                  context.closeAccount();
                  context.closeCheckOut();
                  context.closeProductDetail();
                  context.closeCategories();
                  context.setCartProducts(context.cartProducts.map(product => (product.quantity ? {...product,} : { ...product, quantity: 1 })));
                }}
              >
                Mi Pedido
              </a>
            </Link>
          </li>
        </div>
        <li className="flex ">
            <CiUser
              className="h-6 w-6"
              onClick={() => {
                context.ToggleAccount();
                context.closeCheckOut();
                context.closeProductDetail();
                context.closeCategories();
              }}
            />
        </li>
        <li className="flex ">
          {context.count === 0 ? (
            <LuShoppingBag
              className="h-6 w-6"
              onClick={() => {
                context.closeAccount();
                context.ToggleCheckOut();
                context.closeProductDetail();
                context.closeCategories();
              }}
            />
          ) : (
            <HiOutlineShoppingBag
              className="h-6 w-6"
              onClick={() => {
                context.closeAccount();
                context.ToggleCheckOut();
                context.closeProductDetail();
                context.closeCategories();
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
