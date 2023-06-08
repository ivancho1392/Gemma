import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import { ShoppingCartContext } from "../../Context";

const ProductList = ({ price, name, imageSrc, handleDelete, id }) => {
  const context = useContext(ShoppingCartContext);
  let renderGrClose;
  if (handleDelete) {
    renderGrClose = (
      <GrClose
        onClick={() => {
          context.setCount(context.count - 1);
          handleDelete(id);
        }}
        className="h-4 w-4 text-black cursor-pointer"
      />
    );
  }

  return (
    <div className=" flex justify-between items-center mb-3 pr-4 pl-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <Image
            className="rounded-lg w-full h-full object-cover"
            src={imageSrc}
            alt={name}
            width={200}
            height={300}
          />
        </figure>
        <p className="text-sm font-light">{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderGrClose}
      </div>
    </div>
  );
};

export default ProductList;
