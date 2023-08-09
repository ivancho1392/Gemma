import Image from "next/image";

const ProductListResume = ({
  price,
  name,
  imageSrc,
  quantity,
  description,
}) => {
  const precioTotal = price * quantity ;

  return (
    <div className=" flex justify-between items-center mb-3 pr-4 pl-4">
      <div className="flex items-center gap-2">
      <p className="text-sm font-light" style={{ width: "100px"}}>{name}</p>
        <figure className="w-20 h-20">
          <Image
            className="rounded-lg w-full h-full object-cover"
            src={imageSrc}
            alt={name}
            width={200}
            height={300}
          />
        </figure>
        <p className="text-sm font-light" style={{ width: "200px"}} >{description}</p>
      </div>
      <div className="flex items-center gap-2 p-4">
        <p className="flex text-lg font-medium justify-center items-center" style={{ width: "120px"}}>${price}</p>
        <p className="flex text-lg font-medium justify-center items-center" style={{ width: "100px"}}>{quantity}</p>
        <p className="flex text-lg font-medium justify-center items-center" style={{ width: "100px"}}>${precioTotal}</p>
      </div>
    </div>
  );
};

export default ProductListResume;
