import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import { ShoppingCartProvider } from "../Context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </>
  );
}
