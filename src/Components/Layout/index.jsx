import { ButtonWhatsapp } from "../ButtonWhatsapp";
import ThreeBars from "../ThreeBars";
import ProductDetail from "../ProductDetail";
import CheckoutSideMenu from "../CheckoutSideMenu";
import AccountOptions from "../AccountOptions";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
      <ButtonWhatsapp />
      <AccountOptions />
      <ThreeBars />
      <ProductDetail />
      <CheckoutSideMenu />
    </div>
  );
};

export default Layout;
