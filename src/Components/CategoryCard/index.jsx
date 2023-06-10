import Image from "next/image";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import styles from './styles.module.css';

const CategoryCard = ({ imageSrc, category}) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div
      className={`${styles.categoryCard} bg-white categoryCard rounded-lg mb-16 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}
    >
      <figure className="relative mb-2">
        <span className="absolute bottom-0 bg-white/70 rounded-lg text-black text-2xl font-medium m-2">
          {category}
        </span>
        <Image
          className="rounded-lg object-cover w-full h-full "
          src={imageSrc}
          alt="1"
          width={256}
          height={321}
        />
      </figure>
    </div>
  );
};

export default CategoryCard;
