import React from 'react';
import primeiraImagen from '../images/primeira-imagen.png';
import segundaImagen from '../images/segunda-imagen.png';
import terceiraImagen from '../images/terceira-imagen.png';
import quartaImagen from '../images/quarta-imagen.png';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

function CarouselPage() {

  return (
    <div>
      <Carousel show={ 3.5 } slide={ 2 } transition={ 0.5 }>
        <ScrollingCarousel>{ primeiraImagen }</ScrollingCarousel>
        <ScrollingCarousel>{ segundaImagen }</ScrollingCarousel>
        <ScrollingCarousel>{ terceiraImagen }</ScrollingCarousel>
        <ScrollingCarousel>{ quartaImagen }</ScrollingCarousel>
      </Carousel>
    </div>
  );
}

export default CarouselPage;

