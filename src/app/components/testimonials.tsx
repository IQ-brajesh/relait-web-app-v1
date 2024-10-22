"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import "../assets/css/slick.min.css";
import "../assets/css/slick-theme.css";
import user01 from '../assets/img/user-01.png';
import user02 from '../assets/img/user-02.png';
import user03 from '../assets/img/user-03.png';
import user04 from '../assets/img/user-04.png';
import user05 from '../assets/img/user-05.png';

export default function Testimonials() {
  const sliderSettings = {
    dots: false,
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
  const sliderImages = [
    {
      alt: "Relait",
      addClass: "mx-auto",
      content:
        "Relait’s PlanIT created a custom layout with a quick turnaround that not only helped me visualize how my business would fit into the real estate space but also enabled me to close the deal faster. Great experienced with Relait’s PlanIT.",
        user: "Micheal Buckingham",
        userInfo: "Owner, Cloro Dental Company",
        userImg: user01,
    },
    {
      alt: "Relait",
      addClass: "mx-auto",
      content:
        "Relait’s PlanIT enables our realtors to provide exemplary service, accelerating transaction time. Quick turnaround that not only helped me visualize how my business would fit into the real estate space. Great experienced with Relait’s PlanIT.",
        user: "Kurt Solister",
        userInfo: "Advisor, Kelli Advsiory Realtors",
        userImg: user02,
    },
    {
      alt: "Relait",
      addClass: "mx-auto",
      content:
        "Relait’s PlanIT created a custom layout with a quick turnaround that not only helped me visualize how my business would fit into the real estate space but also enabled me to close the deal faster. Great experienced with Relait’s PlanIT.",
        user: "Micheal Buckingham",
        userInfo: "Owner, Cloro Dental Company",
        userImg: user03,
    },
    {
      alt: "Relait",
      addClass: "mx-auto",
      content:
        "Relait’s PlanIT enables our realtors to provide exemplary service, accelerating transaction time. Quick turnaround that not only helped me visualize how my business would fit into the real estate space. Great experienced with Relait’s PlanIT.",
        user: "Kurt Solister",
        userInfo: "Advisor, Kelli Advsiory Realtors",
        userImg: user04,
    },
    {
      alt: "Relait",
      addClass: "mx-auto",
      content:
        "Relait’s PlanIT created a custom layout with a quick turnaround that not only helped me visualize how my business would fit into the real estate space but also enabled me to close the deal faster. Great experienced with Relait’s PlanIT.",
        user: "Micheal Buckingham",
        userInfo: "Owner, Cloro Dental Company",
        userImg: user05,
    },
  ];
  return (
    <section className="bg-no-repeat bg-top bg-[url('../../assets/img/bg-testimonials.png')] border-t">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="text-center">
            <div>
              <strong className="block text-lg uppercase text-brown-300 font-semibold mb-2">
                Testimonials
              </strong>
            </div>
            <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
              What people says about us
            </h1>
          </div>
          <div className="pt-8 md:pt-10 xl:pt-12">
            <Slider {...sliderSettings} className={"slick-slider-testimonials mx-[-0.5rem]"}>
              {sliderImages.map((slide: any, index: any) => {
                return (
                  <div key={index} className={"px-4 pt-4"}>
                    <div key={index} className={"text-brown-500 bg-white/75 p-6 border shadow-center relative before:w-0 before:h-0 before:border-l-transparent before:border-b-transparent before:border-b-[1.25rem] before:border-r-[1.25rem] before:border-r-primary-500 before:absolute before:top-[100%] before:left-0"}>
                      {slide.content ? slide.content : <></>}
                    </div>
                    {slide.user && 
                        <div className="flex mt-4 ms-4 items-center">
                            <div>
                                <div className="h-[3rem] w-[3rem] rounded-full border border-primary-500 p-1 me-4">
                                    <Image
                                        src={slide.userImg}
                                        alt={slide.user}
                                        className={"w-full h-full rounded-full"}
                                    /> 
                                </div>
                            </div>
                            <div className="flex-1">
                                <strong className="block text-sm text-brown-900 font-semibold">{slide.user}</strong>
                                <div className="text-xs text-brown-300">{slide.userInfo}</div>
                            </div>
                        </div>
                    }
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
