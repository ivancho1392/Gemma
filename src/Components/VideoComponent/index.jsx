import React, { useEffect, useState } from "react";
import Image from "next/image";

const VideoComponent = ({videoSrc}) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowVideo(window.innerWidth < 800);
    };

    handleResize(); // Comprobar inicialmente el tamaño de la pantalla

    window.addEventListener("resize", handleResize); // Agregar el listener para el evento de cambio de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar el listener cuando el componente se desmonte
    };
  }, []);

  if (!showVideo) {
    return (
      <Image
      className="rounded-lg object-cover w-full h-full"
      src="/Banners/banner1.png"
      alt="1"
      width={801}
      height={100}
    />
    )
  }

  return (
    <video autoPlay muted loop>
      <source src={videoSrc} type="video/mp4" />
      {/* Agrega aquí otros formatos de video si es necesario */}
      Tu navegador no admite el elemento de video.
    </video>
  );
};

export default VideoComponent;
