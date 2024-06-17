import React from "react";
import ImageSlider from "./ImageSlider";
import "../styles/image-slider.css";

const CAROUSELS_ASSETS = [
  "/Gibson.jpg",
  "/Telecaster.jpg"
];

export default function HeroCarousel() {
  return (
    <div className='img-slider-container' >
      <ImageSlider imagesUrls={CAROUSELS_ASSETS} />
    </div>
  );
}
