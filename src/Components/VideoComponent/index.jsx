import React, { useEffect, useState } from "react";

const VideoComponent = () => {
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
    return null; // No renderizar nada si el tamaño de la pantalla no es menor a 800px
  }

  return (
    <video autoPlay muted loop>
      <source src="/Videos/video1mp4.mp4" type="video/mp4" />
      {/* Agrega aquí otros formatos de video si es necesario */}
      Tu navegador no admite el elemento de video.
    </video>
  );
};

export default VideoComponent;
