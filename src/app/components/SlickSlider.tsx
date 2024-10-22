"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import "../assets/css/slick.min.css";
import "../assets/css/slick-theme.css";
export default function SlickSlider(props: any) {
  return (
    <Slider {...props.sliderSettings} className={props.className? props.className : ''}>
      {props.sliderImages.map((slide: any, index: any) => {
        return(
          <div key={index} className={props.wrapClass ? props.wrapClass : ""}>
            {slide.image ? 
            <Image
                src={slide.image}
                alt={slide.alt}
                className={slide.addClass}
            /> : <></>}
            {slide.content ? slide.content : <></>}
        </div>)})}
    </Slider>
  );
}