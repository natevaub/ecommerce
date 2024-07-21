import React from "react";
import ImageSlider from "./FrontPageImageSlider";
import "../styles/image-slider.css";

const CAROUSELS_ASSETS = [
  "/assets/Gear/Fender-Amps.jpg",
  "/assets/Gear/Hammertone-Pedals.jpg",
];

export default function HeroCarousel() {
  return (
    <div className='img-slider-container' >
      <ImageSlider imagesUrls={CAROUSELS_ASSETS} />
    </div>
  );
}
