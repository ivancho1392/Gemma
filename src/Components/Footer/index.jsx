import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between z-50 items-end bottom-0 left-0 right-0 w-full h-16 py-5 px-8 text-sm font-light bg-white shadow-lg">
        <div>&reg;GEMMA 2023</div>
        <div>
          <Image
            className="rounded-lg object-cover w-full h-full"
            src="/Logos/logonequi.PNG"
            alt="1"
            width={80}
            height={80}
          />
        </div>
    </footer>
  );
};

export default Footer;
