"use client";
import { Button, IconButton, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClientImage001 from "../assets/img/client-001.png";
import ClientImage002 from "../assets/img/client-002.png";
import ClientImage003 from "../assets/img/client-003.png";
import ClientImage004 from "../assets/img/client-004.png";
import ClientImage005 from "../assets/img/client-005.png";
import Logo from "../assets/img/relait-dark.png";
import { CallIcon, EmailIcon, PlaceholderIcon } from "./icons";
import SlickSlider from "./SlickSlider";

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const onChange = (e: any) => setEmail(e.target.value);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const sliderImages = [
    {
      image: ClientImage001,
      alt: "Relait",
      addClass: "mx-auto",
    },
    {
      image: ClientImage002,
      alt: "Relait",
      addClass: "mx-auto",
    },
    {
      image: ClientImage003,
      alt: "Relait",
      addClass: "mx-auto",
    },
    {
      image: ClientImage004,
      alt: "Relait",
      addClass: "mx-auto",
    },
    {
      image: ClientImage005,
      alt: "Relait",
      addClass: "mx-auto",
    },
  ];
  return (
    <>
      <div className="border">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-8">
            <SlickSlider
              sliderImages={sliderImages}
              sliderSettings={sliderSettings}
            />
          </div>
        </div>
      </div>
      <footer className="pb-5 md:pb-6 lg:pb-8 bg-brown-500 text-white/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-12 gap-0 text-white">
            <div className="hidden lg:flex col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="flex items-center p-4 lg:py-6">
                <div>
                  <PlaceholderIcon className="fill-primary-500 me-3 h-[2.5rem] md:h-[3.5rem]" />
                </div>
                <div className="flex-1 text-md md:text-lg">
                  54B, Talstoi Town 5238 MT, La City, IA 522564
                </div>
              </div>
            </div>
            <div className="flex col-span-12 sm:col-span-6 lg:col-span-4 border-l border-r border-l-white/25 border-r-white/25 border-b border-b-white/25 sm:border-b-0">
              <div className="flex items-center p-4 lg:py-6 sm:ms-4">
                <div>
                  <EmailIcon className="fill-primary-500 me-3 h-[2.5rem] md:h-[3.5rem]" />
                </div>
                <div className="flex-1 text-lg">
                  <div className="text-xs md:text-sm mb-1">Email us:</div>
                  <a
                    className="text-nowrap text-md md:text-xl inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-white before:transition-all text-white hover:before:right-[0]"
                    href="mailto:info@relait-it.com"
                  >
                    info@relait-it.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="flex items-center p-4 lg:py-6 sm:ms-4">
                <div>
                  <CallIcon className="fill-primary-500 me-3 h-[2.5rem] md:h-[3.5rem]" />
                </div>
                <div className="flex-1 text-lg">
                  <div className="text-xs md:text-sm mb-1">Call us on:</div>
                  <a
                    className="text-nowrap text-md md:text-xl inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-white before:transition-all text-white hover:before:right-[0]"
                    href="tel:18000001234"
                  >
                    +1800-000-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-white/25 mb-5 md:mb-6 lg:mb-8" />
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 py-4">
            <div className="col-span-12 lg:col-span-4 xl:pe-16">
              <Link href="/planit">
                <Image src={Logo} alt="Relait" />
              </Link>
              <p className="mt-4">
                Commercial real estate resources for your office, retail store,
                business, wellness space, studio, spa, gym, food-and-beverage /
                hospitality establishment, and many many more...
                <a
                  className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]"
                  href="#"
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-3">
              <h5 className="my-1 text-xl text-white font-medium">
                Useful Links
              </h5>
              <ul className="m-0 p-0">
                <li className="my-2">
                  <Link
                    href="/planit"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Career
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Advertising
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Our Blog
                  </a>
                </li>
                <li className="my-2">
                  <Link
                    href="/contact"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h5 className="my-1 text-xl text-white font-medium">
                Our services
              </h5>
              <ul className="text-md">
                <li className="my-2">
                  <Link
                    href="/planit"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    PlanIt
                  </Link>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Board
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Proffessionals
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Products
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="inline-block transition-all relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]"
                  >
                    Disscussion
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="my-1 text-xl text-white font-medium">
                Newsletter
              </h5>
              <p>Get Latest updates and offers.</p>
              <div className="relative flex w-full mt-4">
                <Input
                  type="email"
                  color="white"
                  label="Email Address"
                  value={email}
                  onChange={(e) => onChange(e)}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  size="sm"
                  color="amber"
                  disabled={!email}
                  className="!absolute right-1 top-1 rounded text-white"
                >
                  <i className="fa-regular fa-paper-plane"></i>
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <IconButton
                  variant="outlined"
                  color="white"
                  className="rounded-full hover:bg-primary-500 hover:border-primary-500 hover:opacity-100 focus:ring-white/0 active:opacity-[1.0]"
                  onClick={() =>
                    window.open("https://www.facebook.com/", "_blank")
                  }
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="white"
                  className="rounded-full hover:bg-primary-500 hover:border-primary-500 hover:opacity-100 focus:ring-white/0 active:opacity-[1.0]"
                  onClick={() =>
                    window.open("https://www.linkedin.com/", "_blank")
                  }
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="white"
                  className="rounded-full hover:bg-primary-500 hover:border-primary-500 hover:opacity-100 focus:ring-white/0 active:opacity-[1.0]"
                  onClick={() => window.open("https://x.com/", "_blank")}
                >
                  <i className="fa-brands fa-twitter"></i>
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="white"
                  className="rounded-full hover:bg-primary-500 hover:border-primary-500 hover:opacity-100 focus:ring-white/0 active:opacity-[1.0]"
                  onClick={() =>
                    window.open("https://www.instagram.com/", "_blank")
                  }
                >
                  <i className="fa-brands fa-instagram"></i>
                </IconButton>
              </div>
            </div>
          </div>
          <div className="md:flex text-center md:text-start pt-4 md:pt-5 xl:pt-7  mt-3 md:mt-4 xl:mt-5 border-t border-t-white/25">
            <div className="flex-1">
              &copy; 2024{" "}
              <Link
                href="/planit"
                className={`inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0]`}
              >
                www.relait-it.com
              </Link>
              . All rights reserved.
            </div>
            <div className="mt-1 md:mt-0">
              <Link
                href="/terms-conditions"
                className={`inline-block relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]`}
              >
                Terms & Conditions
              </Link>
              <span className="text-white/50 mx-3">|</span>
              <Link
                href="/privacy-policy"
                className={`inline-block relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all hover:text-primary-400 hover:before:right-[0]`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
