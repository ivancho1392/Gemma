import { Quicksand } from 'next/font/google'
import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import { ShoppingCartProvider } from "../Context";
import Footer from '../Components/Footer';
import ListFooter from '../Components/ListFooter';

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={quicksand.className}>
      <ShoppingCartProvider>
        <Navbar />
        <Component {...pageProps} />
        <ListFooter />
        <Footer />
      </ShoppingCartProvider>
    </main>
  );
}
