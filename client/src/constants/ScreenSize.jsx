import { useState, useEffect } from 'react';

function ScreenSize() {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const [screenHeight, setscreenHeight] = useState(window.innerHeight);

  // Funcion para actualizar el estado del tamaño de la pantalla
  const actualizarTamañoPantalla = () => {
    setscreenWidth(window.innerWidth);
    setscreenHeight(window.innerHeight);
  };

  // Agregar un listener para actualizar el tamaño de la pantalla cuando cambie
  useEffect(() => {
    window.addEventListener('resize', actualizarTamañoPantalla);
    return () => window.removeEventListener('resize', actualizarTamañoPantalla);
  }, []); // Esto asegura que el efecto se ejecute solo una vez después del montaje del componente

  // Devuelve el tamaño de la pantalla en un objeto
  return {
    screenWidth,
    screenHeight
  };
}

export default ScreenSize;
