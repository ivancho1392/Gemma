import Image from "next/image";
import { MdOutlineAdd } from 'react-icons/md';

const Card = ({imageSrc, category, price, name}) => {
    return (
        <div className='bg-white cursor-pointer w-65 h-30 rounded-lg mb-16'>
            <figure className='relative mb-2 w-full h-full'>
                <span className='absolute bottom-0 left-0 bg-black/10 rounded-lg text-black text-sm font-medium'>{category}</span>
                <Image className='rounded-lg' src={imageSrc} alt="1" width={200} height={300}/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
                    <MdOutlineAdd />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{name}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    );
}

export default Card;