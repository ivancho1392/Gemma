import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const ButtonWhatsapp = () => {
  return (
    <div className="fixed bottom-12 left-4 p-3 rounded-lg cursor-pointer">
      <div className='mb-4'>
        <Link className={styles.btnWhatsapp} href="http://wa.me/50763168396">
          <Image
            className={styles.btnWhatsappImage}
            src="/whatsapp48.svg"
            alt="Contact with Whatsapp"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <Link className={styles.btnInstagram} href="http://ig.me/m/ras_ivan1406">
          <Image
            className={styles.btnInstagramImage}
            src="/Logos/Instagram.png"
            alt="Contact with Instagram"
            width={45}
            height={45}
          />
        </Link>
      </div>
    </div>
  );
};
