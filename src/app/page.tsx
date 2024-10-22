"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import architecture001 from "./assets/img/architecture001.jpg";
import architecture002 from "./assets/img/architecture002.jpg";
import architecture003 from "./assets/img/architecture003.jpg";
import gallery001 from "./assets/img/gallery001.png";
import gallery002 from "./assets/img/gallery002.png";
import gallery003 from "./assets/img/gallery003.png";
import gallery004 from "./assets/img/gallery004.png";
import gallery005 from "./assets/img/gallery005.png";
import gallery006 from "./assets/img/gallery006.png";
import iconPlanning from "./assets/img/icon-planning.png";
import iconArchitecture from "./assets/img/icon-architecture.png";
import iconBuilding from "./assets/img/icon-building.png";
import iconCost from "./assets/img/icon-cost.png";
import iconBimit from "./assets/img/icon-bimit.png";
import iconLayer from "./assets/img/icon-layer.png";
import iconScan from "./assets/img/icon-scan.png";
import iconPlateform from "./assets/img/icon-plateform.png";
import iconPro from "./assets/img/icon-pro.png";
import Testimonials from "@/app/components/testimonials";
import LatestUpdates from "@/app/components/latestUpdates";
import Footer from "./components/footer";
import Header from "./components/header";
import SlickSlider from "./components/SlickSlider";

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    pauseOnHover: false,
  };
  const sliderImages = [{
      image: architecture001,
      alt: "Relait",
      addClass: "h-[calc(100vh-74px)] w-full object-cover",
      content: <div className="absolute max-w-[1200px] m-auto inset-0 grid h-full w-full items-center">
      <div className="w-[50%] md:w-2/4 pl-4">
        <h2 className="text-brown-300 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
          Building amazing
        </h2>
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
        Architecture 
        </h1>
        <p className="text-brown-500 text-lg my-8">
          Through a unique combination of engineering, construction and
          design disciplines and expertise.
        </p>
        <Link href="/planit">
        <Button
            fullWidth
            variant="outlined"
            size="lg"
            color="brown"
            className="flex w-auto rounded py-3 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
          >
            View Details
            <i className="fa-solid fa-arrow-right ms-2"></i>
        </Button>
        </Link>
      </div>
    </div>
  },
  {
      image: architecture002,
      alt: "Relait",
      addClass: "h-[calc(100vh-74px)] w-full object-cover",
      content: <div className="absolute max-w-[1200px] m-auto inset-0 grid h-full w-full items-center">
      <div className="w-[50%] md:w-2/4 pl-4">
      <h2 className="text-white/90 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
        Transform your Property
        </h2>
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0 [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.25)]">
        Search Experience  
        </h1>
        <p className="text-white/90 text-lg my-8 [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.25)]">
        Through a unique combination of engineering, construction and
        design disciplines and expertise.
        </p>
        <Link href="/planit">
        <Button
            fullWidth
            variant="outlined"
            size="lg"
            color="brown"
            className="flex bg-white w-auto rounded py-3 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
          >
            View Details
            <i className="fa-solid fa-arrow-right ms-2"></i>
        </Button>
        </Link>
      </div>
    </div>
  },
  {
      image: architecture003,
      alt: "Relait",
      addClass: "h-[calc(100vh-74px)] w-full object-cover",
      content: <div className="absolute inset-0 h-full w-full items-center bg-gradient-to-r via-white/80 from-white to-white/25">
        <div className="max-w-[1200px] m-auto h-full flex items-center">
          <div className="w-[50%] md:w-2/4 pl-4">
          <h2 className="text-brown-300 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
            Business Owners
            </h2>
            <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
            Launch your Vision  
            </h1>
            <p className="text-brown-500 text-lg my-8">
            Starting a new business is an exciting venture, but finding the perfect space to launch your vision can be challenging.
            </p>
            <Link href="/planit">
            <Button
                fullWidth
                variant="outlined"
                size="lg"
                color="brown"
                className="flex w-auto rounded py-3 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
              >
                View Details
                <i className="fa-solid fa-arrow-right ms-2"></i>
            </Button>
            </Link>
          </div>
        </div>
    </div>
  }];
  return (
    <>
      <Header/>
      <SlickSlider sliderImages={sliderImages} sliderSettings={sliderSettings} className="slick-slider-home relative h-full w-full" wrapClass="relative h-[calc(100vh-74px)]" />
      <section className="border-b relative before:bg-gradient-to-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
            <div className="text-center">
              <div>
                <strong className="block text-lg uppercase text-brown-300 font-semibold mb-2">
                ABOUT US 
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
              We create comfort for living.
              </h1>
            </div>
            <div className="grid grid-cols-12 gap-0 py-4 md:py-8 lg:py-12 xl:py-16">
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image src={iconPlanning} alt={"planit"} />
                  <strong className="block mt-4 mb-2 font-semibold text-brown-900 text-lg">
                  Planning Stage
                  </strong>
                  <span className="text-brown-500">Natus error sit voluptatem accus antium doloremque laudan.</span>
                  <div className="mt-4">
                  <i className="fa-solid fa-arrow-right text-base text-brown-500"></i>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image
                    src={iconArchitecture}
                    alt={"planit"}
                  />
                  <strong className="block mt-4 mb-2 font-semibold text-brown-900 text-lg">
                  Architecture Design
                  </strong>
                  <span className="text-brown-500">Natus error sit voluptatem accus antium doloremque laudan.</span>
                  <div className="mt-4">
                  <i className="fa-solid fa-arrow-right text-base text-brown-500"></i>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image
                    src={iconBuilding}
                    alt={"planit"}
                  />
                  <strong className="block mt-4 mb-2 font-semibold text-brown-900 text-lg">
                  Building Stage
                  </strong>
                  <span className="text-brown-500">Natus error sit voluptatem accus antium doloremque laudan.</span>
                  <div className="mt-4">
                  <i className="fa-solid fa-arrow-right text-base text-brown-500"></i>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image src={iconPro} alt={"planit"} />
                  <strong className="block mt-4 mb-2 font-semibold text-brown-900 text-lg">
                  Pro Support
                  </strong>
                  <span className="text-brown-500">Natus error sit voluptatem accus antium doloremque laudan.</span>
                  <div className="mt-4">
                  <i className="fa-solid fa-arrow-right text-base text-brown-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 bg-top bg-repeat-x bg-[url('../../assets/img/bg-geometric.png')]">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12">
            <div>
              <div>
                <strong className="block text-lg uppercase text-brown-300 font-semibold mb-2">
                OUR Products/ Services
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-[66%]">
              Design disciplines and expertise.
              </h1>
            </div>
              <div className="grid grid-cols-12 gap-4 lg:gap-6 pt-8 md:pt-10 xl:pt-12">
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Link href="#" className="block bg-white/50 p-8 pr-20 shadow-sm relative group/item transition-all border border-transparent hover:border-primary-500 hover:shadow-center">
                      <Image src={iconScan} alt={"planit"} />
                      <strong className="block mt-2 mb-1 text-brown-900 text-lg">
                      SCANIT
                      </strong>
                      <span className="text-brown-300">Get scan-to-BIM of your space, within 5 days.</span>
                      <div className="p-4 absolute right-0 bottom-0 text-primary-500 border-r border-b rounded-ss-3xl border-r-primary-500 border-b-primary-500 leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                        <i className="fa-solid fa-arrow-right text-base"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href="#" className="block bg-white/50 p-8 pr-20 shadow-sm relative group/item transition-all border border-transparent hover:border-primary-500 hover:shadow-center">
                      <Image src={iconBimit} alt={"planit"} />
                      <strong className="block mt-2 mb-1 text-brown-900 text-lg">
                      BIMIT
                      </strong>
                      <span className="text-brown-300">Convert your 3D scan into BIM & CAD, within clicks</span>
                      <div className="p-4 absolute right-0 bottom-0 text-primary-500 border-r border-b rounded-ss-3xl border-r-primary-500 border-b-primary-500 leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                        <i className="fa-solid fa-arrow-right text-base"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="block bg-white/50 p-8 pr-20 shadow-sm relative group/item transition-all border border-transparent hover:border-primary-500 hover:shadow-center">
                      <Image src={iconCost} alt={"planit"} />
                      <strong className="block mt-2 mb-1 text-brown-900 text-lg">
                      Cost Seg Survey
                      </strong>
                      <span className="text-brown-300">Get a cost segregation survey of your building</span>
                      <div className="p-4 absolute right-0 bottom-0 text-primary-500 border-r border-b rounded-ss-3xl border-r-primary-500 border-b-primary-500 leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                        <i className="fa-solid fa-arrow-right text-base"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 flex items-stretch justify-center">
                    <div className="flex flex-1 items-center justify-center bg-brown-500 p-8 shadow-sm text-4xl text-white font-semibold opacity-75">
                    Platform
                    <i className="fa-solid fa-chevron-right ms-3"></i>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href="#" className="block bg-white/50 p-8 pr-20 shadow-sm relative group/item transition-all border border-transparent hover:border-primary-500 hover:shadow-center">
                      <Image src={iconPlateform} alt={"planit"} />
                      <strong className="block mt-2 mb-1 text-brown-900 text-lg">
                      relaitit Platform
                      </strong>
                      <span className="text-brown-300">Digitize your spaces, at scale. Launch for free.</span>
                      <div className="p-4 absolute right-0 bottom-0 text-primary-500 border-r border-b rounded-ss-3xl border-r-primary-500 border-b-primary-500 leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                        <i className="fa-solid fa-arrow-right text-base"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href="#" className="block bg-white/50 p-8 pr-20 shadow-sm relative group/item transition-all border border-transparent hover:border-primary-500 hover:shadow-center">
                      <Image src={iconLayer} alt={"planit"} />
                      <strong className="block mt-2 mb-1 text-brown-900 text-lg">
                      Layer One
                      </strong>
                      <span className="text-brown-300">APIs for the next generation of proptech</span>
                      <div className="p-4 absolute right-0 bottom-0 text-primary-500 border-r border-b rounded-ss-3xl border-r-primary-500 border-b-primary-500 leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                        <i className="fa-solid fa-arrow-right text-base"></i>
                      </div>
                    </Link>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section className="bg-no-repeat bg-top bg-[url('../../assets/img/bg-architecture.png')] border-t border-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12">
            <div className="text-center pt-4 md:pt-6 xl:pt-8">
              <div>
                <strong className="block text-lg uppercase text-brown-300 font-semibold mb-2">
                Our Recent Projects 
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-brown-900 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
              Draws many strands of place-making
              </h1>
                <ul className="p-0 mt-8 md:mt-12 text-sm">
                  <li className="inline">
                    <Link href={"#"} className="inline-block mx-4 relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-900 before:transition-all hover:before:right-[0] transition-all text-brown-900 hover:text-brown-900 font-medium before:right-[0]">
                      All
                    </Link>
                  </li>
                  <li className="inline">
                    <Link href={"#"} className="inline-block mx-4 relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-300 before:transition-all hover:before:right-[0] transition-all text-brown-300 hover:text-brown-900 font-medium before:right-[100%]">
                    Architecture
                    </Link>
                  </li>
                  <li className="inline">
                    <Link href={"#"} className="inline-block mx-4 relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-300 before:transition-all hover:before:right-[0] transition-all text-brown-300 hover:text-brown-900 font-medium before:right-[100%]">
                    City Marks
                    </Link>
                  </li>
                  <li className="inline">
                    <Link href={"#"} className="inline-block mx-4 relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-300 before:transition-all hover:before:right-[0] transition-all text-brown-300 hover:text-brown-900 font-medium before:right-[100%]">
                    Interior Design
                    </Link>
                  </li>
                  <li className="inline">
                    <Link href={"#"} className="inline-block mx-4 relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-brown-300 before:transition-all hover:before:right-[0] transition-all text-brown-300 hover:text-brown-900 font-medium before:right-[100%]">
                    Residence
                    </Link>
                  </li>
                </ul>  
                <div className="grid grid-cols-12 gap-4 lg:gap-6 my-6 md:my-8">
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Link href={"#"} className="block group/item relative overflow-hidden">
                      <Image src={gallery001} alt={"planit"} className="object-cover transition-all hover:scale-110" />
                      <span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href={"#"} className="block group/item relative overflow-hidden">
                  <Image src={gallery002} alt={"planit"} className="object-cover transition-all hover:scale-110" />
                  <span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span></Link>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href={"#"} className="block group/item relative overflow-hidden"><Image src={gallery003} alt={"planit"} className="object-cover transition-all hover:scale-110" /><span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span></Link>
                  
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href={"#"} className="block group/item relative overflow-hidden"><Image src={gallery004} alt={"planit"} className="object-cover transition-all hover:scale-110" /><span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span></Link>
                  
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href={"#"} className="block group/item relative overflow-hidden"><Image src={gallery005} alt={"planit"} className="object-cover transition-all hover:scale-110" /><span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span></Link>
                  
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link href={"#"} className="block group/item relative overflow-hidden"><Image src={gallery006} alt={"planit"} className="object-cover transition-all hover:scale-110" /><span className="block bg-brown-500/80 px-4 py-3 absolute left-px right-px bottom-px text-left">
                        <span className="block text-lg text-white/90 font-medium group-hover/item:text-white transition-all transition-all">Xiami Office Building</span>
                        <span className="block text-sm text-white/75">July 2018</span>
                        <span className="p-4 absolute right-0 bottom-0 text-primary-500 rounded-ss-3xl leading-3 transition-all group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <i className="fa-solid fa-arrow-right text-base"></i>
                        </span>
                      </span></Link>
                  
                  </div>
                </div> 
                <div className="text-center">
                  <Button
                    fullWidth
                    variant="outlined"
                    size="lg"
                    color="brown"
                    className="flex w-auto m-auto rounded py-2 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
                  >
                  Load more
                  <i className="fa-solid fa-spinner"></i>
                </Button>
              </div>                 
            </div>
          </div>
        </div>
      </section>
      <LatestUpdates/>
      <Testimonials />
      <Footer/>
    </>
  );
}
