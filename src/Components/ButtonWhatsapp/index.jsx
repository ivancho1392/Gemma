import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const ButtonWhatsapp = () => {
  return (
    <div className="fixed bottom-8 left-8 p-3 rounded-lg cursor-pointer">
      <Link href="http://wa.me/50763168396">
        <Image
          className={styles.btnWhatsapp}
          src="/whatsapp48.svg"
          alt="1"
          width={70}
          height={70}
        ></Image>
      </Link>
    </div>
  );
};
