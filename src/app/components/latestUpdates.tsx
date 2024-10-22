"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../assets/css/slick.min.css";
import "../assets/css/slick-theme.css";
import architecture001 from "../assets/img/architecture002.jpg";
import architecture002 from "../assets/img/architecture003.jpg";
import architecture003 from "../assets/img/architecture005.jpg";
import { Button } from "@material-tailwind/react";

export default function LatestUpdates() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderContent = [
    {
      image: architecture001,
      addClass: "mx-auto",
      title: "Transforming spaces for maximum utility",
      content:
        "Ever felt like your living or working space could be more functional and efficient? In this blog series, we...",
      date: "NOVEMBER 14, 2023",
    },
    {
      image: architecture002,
      addClass: "mx-auto",
      title: "Transforming spaces for maximum utility",
      content:
        "Ever felt like your living or working space could be more functional and efficient? In this blog series, we...",
      date: "NOVEMBER 14, 2023",
    },
    {
      image: architecture003,
      addClass: "mx-auto",
      title: "Transforming spaces for maximum utility",
      content:
        "Ever felt like your living or working space could be more functional and efficient? In this blog series, we...",
      date: "NOVEMBER 14, 2023",
    },
  ];
  return (
    <section className="bg-repeat bg-center bg-[url('../../assets/img/bg-stripe.gif')]">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="text-center">
            <div>
              <strong className="block text-lg uppercase text-brown-300 font-semibold mb-2">
                benefits
              </strong>
            </div>
            <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
              How Planit benefits customers
            </h1>
          </div>
          <div className="pt-8 md:pt-10 xl:pt-12">
            <Slider {...sliderSettings} className={"slick-slider-latest mx-[-1rem]"}>
              {sliderContent.map((slide: any, index: any) => {
                return (
                  <div key={index} className={"p-4"}>
                    <div
                      key={index}
                      className={
                        "grid grid-cols-12 gap-0 text-brown-500 bg-white/75 border shadow-center relative group/item"
                      }
                    >
                      <div className="col-span-4 overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          className={"w-full h-full object-cover transition-all group-hover/item:scale-110"}
                        />
                      </div>
                      <div className="col-span-8">
                        <div className="p-6">
                          <div className="text-brown-900 text-lg lg:text-xl font-bold">
                            {slide.title}
                          </div>
                          <div className="text-brown-900/75 text-sm py-2 font-semibold">
                            {slide.date}
                          </div>
                          {slide.content}
                          <div className="pt-4">
                            <Button
                              fullWidth
                              variant="outlined"
                              size="sm"
                              color="brown"
                              className="flex w-auto rounded py-2 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
                            >
                              Read more
                              <i className="fa-solid fa-arrow-right ms-2"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
