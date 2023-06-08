import Image from "next/image";
import { MdOutlineAdd } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ imageSrc, category, price, name, product }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckOut();
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1);
    context.openCheckOut();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute  top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full transform transition-all duration-300 hover:scale-110 ">
          <BsFillBagCheckFill />
        </div>
      );
    } else {
      return (
        <div
          className="absolute  top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full transform transition-all duration-300 hover:scale-110 "
          onClick={(event) => addProductToCart(event, product)}
        >
          <MdOutlineAdd />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white w-65 h-30 rounded-lg mb-16 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-40 h-60">
        <span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-sm font-medium m-2">
          {category}
        </span>
        {renderIcon(product.id)}
        <Image
          className="rounded-lg object-cover w-full h-full"
          src={imageSrc}
          alt="1"
          width={200}
          height={300}
        />
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{name}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
