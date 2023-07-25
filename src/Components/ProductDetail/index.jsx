import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (context.productToShow && context.productToShow.imageURL) {
      setMainImage(context.productToShow.imageURL[1]);
    }
  }, [context.productToShow]);

  if (!context.productToShow || !context.productToShow.imageURL) {
    return null; 
  }

  const handleImageClick = src => {
    setMainImage(src);
  };

  const renderButton = id => {
    const isInCart =
      context.cartProducts.filter(product => product.productId === id).length >
      0;

    if (isInCart) {
      return (
        <button className="bg-black m-4 py-3 text-white rounded-lg">
          El producto ya está en el carrito.
        </button>
      );
    } else {
      return (
        <button
          className="bg-black m-4 py-3 text-white rounded-lg"
          onClick={() => addProductToCart(context.productToShow)}
        >
          Agregar al Carrito de Compras
        </button>
      );
    }
  };

  const addProductToCart = productData => {
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1);
    context.openCheckOut();
    context.closeProductDetail();
    context.closeAccount();
  };

  return (
    //main aside container
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} ${
        styles.productDetail
      } shadow-2xl bg-white flex flex-col fixed right-0 border border-black rounded-lg overflow-y-auto`}
    >
      {/*Title and close Icon */}
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">{context.productToShow.name}</h2>
        <div
          className="flex justify-center items-center cursor-pointer  bg-white rounded-full w-6 h-6 transform transition-all duration-300 hover:scale-110 hover:bg-black/5"
          onClick={() => context.closeProductDetail()}
        >
          <GrClose />
        </div>
      </div>

      {/*Main Figure and seconds figures */}
      <figure className="flex justify-center">
        <Image
          className="rounded-lg"
          src={mainImage}
          alt="1"
          width={320}
          height={480}
        />
      </figure>
      <figure className="flex justify-between m-4">
        <Image
          className="rounded-lg cursor-pointer"
          src={context.productToShow.imageURL[0]}
          alt="1"
          width={96}
          height={144}
          onClick={() => handleImageClick(context.productToShow.imageURL[0])}
        />
        <Image
          className="rounded-lg cursor-pointer"
          src={context.productToShow.imageURL[1]}
          alt="1"
          width={96}
          height={144}
          onClick={() => handleImageClick(context.productToShow.imageURL[1])}
        />
        <Image
          className="rounded-lg cursor-pointer"
          src={context.productToShow.imageURL[2]}
          alt="1"
          width={96}
          height={144}
          onClick={() => handleImageClick(context.productToShow.imageURL[2])}
        />
      </figure>

      {/*Price and Note */}
      <p className="flex justify-between p-6">
        <span className="text-lg font-medium">
          ${context.productToShow.price}
        </span>
        <span className="text-sm font-medium bg-black/10 rounded-lg">
          {context.productToShow.category}
        </span>
      </p>

      {/*Size */}
      <div>
        <h2 className="font-medium text-md ml-4 mt-4">Tallas disponibles</h2>
        <ul className="flex justify-center p-4 ml-4 mr-4">
          {context.productToShow.size}
        </ul>
      </div>

      {/*Color */}
      <div>
        <h2 className="font-medium text-md ml-4 mt-4 mr-4">
          Colores disponibles
        </h2>
        <ul className="flex justify-center">
          <li className="cursor-pointer border flex justify-center w-full m-4">
            {context.productToShow.color}
          </li>
        </ul>
      </div>

      {/*Button Add to Cart */}
      {renderButton(context.productToShow.productId)}

      <p className="text-sm font-medium p-4">
        {context.productToShow.description}
      </p>
    </aside>
  );
};

export default ProductDetail;
