import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const isActiveLink = (pathname) => {
    return router.pathname === pathname ? "border-b-2 border-gray-500" : "";
  };

  return (
    <nav className="flex justify-between z-10 items-end w-full h-15 py-5 px-8 text-sm font-light">
      <ul className="flex items-end gap-3">
        <li className="font-semibold text-lg">
          <Link href="/">
          <Image src="/LogoGEMMA.jpeg" alt="1" width={80} height={80}/>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/")}>All</a>
          </Link>
        </li>
        <li>
          <Link
            href="/Lingerie"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/Lingerie")}>Lingerie</a>
          </Link>
        </li>
        <li>
          <Link
            href="/Pyjamas"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/Pyjamas")}>Pyjamas</a>
          </Link>
        </li>
        <li>
          <Link
            href="/PlusSize"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/PlusSize")}>Plus Size</a>
          </Link>
        </li>
        <li>
          <Link
            href="/Accessories"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/Accessories")}>Accessories</a>
          </Link>
        </li>
      </ul>
      <ul className="flex items-end gap-3">
        <li className="text-black/60">correo@mail.com</li>
        <li>
          <Link
            href="/MyOrders"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/MyOrders")}>MyOrders</a>
          </Link>
        </li>
        <li>
          <Link
            href="/MyAccount"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/MyAccount")}>MyAccount</a>
          </Link>
        </li>
        <li>
          <Link
            href="/SignIn"
            passHref
            scroll={false}
            scrollOptions={{ top: 0 }}
            legacyBehavior
          >
            <a className={isActiveLink("/SignIn")}>SignIn</a>
          </Link>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
