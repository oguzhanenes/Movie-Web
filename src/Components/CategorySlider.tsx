import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';


const Slide = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Resmi kutuya uyacak şekilde kesmeye yarar*/
    transition-timing-function: ease-in-out;
      }

  /* Slider container için minimum boyut ayarı */
  height: 400px;
`;

const CustomDots = styled.ul`
  position: absolute;
  bottom: 20px; /* Noktaların yerleşimini ayarlar */
  left: 50%;
  transform: translateX(-50%);
  display: flex !important;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 5px;

    button {
      font-size: 0;
      background: #ddd;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      border: none;

      &:before {
        content: "";
      }
    }

    &.slick-active button {
      background: #fff;
    }
  }
`;

const sliderData = [
  {
    src: image1,
    alt: 'Image 1'
  },
  {
    src: image2,
    alt: 'Image 2'
  },
  {
    src: image3,
    alt: 'Image 3'
  },
  {
    src: image4,
    alt: 'Image 4'
  }
];

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,//noktalar var veya yok
    infinite: true,//sonsuz döngü
    speed: 400,
    slidesToShow: 1,//her sslaytta tek resim gösterilir
    slidesToScroll: 1,//her slayt geçişidne tek tek geçer
    autoplay: true, // Otomatik geçişi aktif eder
    autoplaySpeed: 3000, // Her slaytın ne kadar süreyle görüntüleneceğini belirler (ms cinsinden)
    arrows: false, // Okları gizler
    appendDots: (dots: React.ReactNode) => <CustomDots>{dots}</CustomDots>, // Noktaları özelleştirir

  };


  return (//slider olultururken settins elemanlarını alıp datadaki elemanlar için birer slider oluşturulur.Slide değişkeni dizideki gerçek elemanları temsil eder. index de map fonksiyonun her bir döngüdeki sırasını belirtir.Reactta döngüler ve listelerle oluşturulan bileşenlerin bir keyi olması gerektiği için key değerine indexi verdim
    <Slider {...settings}>
      {sliderData.map((slide, index) => (
        <Slide key={index}>
          <img src={slide.src} alt={slide.alt} />
        </Slide>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
