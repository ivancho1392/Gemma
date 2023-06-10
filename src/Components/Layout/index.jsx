import { ButtonWhatsapp } from "../ButtonWhatsapp";
import ThreeBars from "../ThreeBars";
import ProductDetail from "../ProductDetail";
import CheckoutSideMenu from "../CheckoutSideMenu";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
      <ButtonWhatsapp />
      <ThreeBars />
      <ProductDetail />
      <CheckoutSideMenu />
    </div>
  );
};

export default Layout;
