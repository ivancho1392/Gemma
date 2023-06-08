import { useContext } from "react";
import styles from "./styles.module.css";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} ${
        styles.productDetail
      } shadow-2xl bg-white flex flex-col fixed right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">Detail</h2>
        <div
          className="flex justify-center items-center cursor-pointer  bg-white rounded-full w-6 h-6 transform transition-all duration-300 hover:scale-110 hover:bg-black/5"
          onClick={() => context.closeProductDetail()}
        >
          <GrClose />
        </div>
      </div>
      <div className="w-65 h-30 rounded-lg mb-16 items-center justify-center">
        <figure className="relative mb-2 w-full h-full p-6">
          <span className="bottom-0 rounded-lg text-black text-sm font-medium m-2 p-6">
            {context.productToShow.name}
          </span>
          <div className="flex justify-center mt-4">
            <Image
              className="rounded-lg"
              src={context.productToShow.imageSrc}
              alt="1"
              width={200}
              height={300}
            />
          </div>
          <p className="flex justify-between p-6">
            <span className="text-lg font-medium">
              ${context.productToShow.price}
            </span>
            <span className="text-sm font-medium bg-black/10 rounded-lg">
              {context.productToShow.category}
            </span>
          </p>
          <p className='text-sm font-medium p-4'>{context.productToShow.description}</p>
        </figure>
      </div>
    </aside>
  );
};

export default ProductDetail;
