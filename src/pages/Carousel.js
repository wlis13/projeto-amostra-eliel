import React, { useState, useEffect } from 'react';
import Image from './Image';
import primeiraImagen from '../images/primeira-imagen.png';
import segundaImagen from '../images/segunda-imagen.png';
import terceiraImagen from '../images/terceira-imagen.png';
import quartaImagen from '../images/quarta-imagen.png'

function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [
    primeiraImagen,
    segundaImagen,
    terceiraImagen,
    quartaImagen
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, index]);

  return (
    <div>
      <Image src={ images[index] } alt="Imagem do carrossel" />
    </div>
  );
}

export default Carousel;

