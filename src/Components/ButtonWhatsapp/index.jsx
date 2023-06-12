import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const ButtonWhatsapp = () => {
  return (
    <div className="fixed bottom-12 left-8 p-3 rounded-lg cursor-pointer">
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
  );
};
