import { Quicksand } from 'next/font/google'
import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import { ShoppingCartProvider } from "../Context";

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={quicksand.className}>
      <ShoppingCartProvider>
        <Navbar className='font-bold'/>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </main>
  );
}
