import { useContext } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { ShoppingCartContext } from "../../Context";

const AccountOptions = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
    className={`flex ${context.isAccountOpen ? "grid" : "hidden"} ${
      styles.ThreeBars
    } shadow-2xl bg-white fixed right-0 border border-black rounded-lg flex-col p-6`}
  >
    <ul>
      <li className="mb-2 ">
        <Link
          href="/SignIn"
          passHref
          scroll={false}
          scrollOptions={{ top: 0 }}
          legacyBehavior
        >
          <a className='mb-2'
            onClick={() => {
              context.closeAccount();
            }}
          >
            Sign In
          </a>
        </Link>
      </li>
      <li className="mb-2">
        <Link
          href="/SignOut"
          passHref
          scroll={false}
          scrollOptions={{ top: 0 }}
          legacyBehavior
        >
          <a
            onClick={() => {
              context.closeAccount();
            }}
          >
            Log Out
          </a>
        </Link>
      </li>
      <li className="mb-2">
        <Link
          href="/AdminControlPanel"
          passHref
          scroll={false}
          scrollOptions={{ top: 0 }}
          legacyBehavior
        >
          <a
            onClick={() => {
              context.closeAccount();
            }}
          >
            Panel de control Admin
          </a>
        </Link>
      </li>

    </ul>
  </aside>
  );
};

export default AccountOptions;
