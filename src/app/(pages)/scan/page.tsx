"use client";
import React from "react";
import {
  Select,
  Option,
  Checkbox,
  Button,
  Switch,
  Tooltip,
  Slider,
  Input,
} from "@material-tailwind/react";
import { InfoIcon, UploadIcon } from "../../components/icons";
import Link from 'next/link'
import SlickSlider from '../../components/SlickSlider';
import project001 from "../../assets/img/project001.png";
import project002 from "../../assets/img/project002.png";
import project003 from "../../assets/img/project003.png";
import project004 from "../../assets/img/project004.png";
import project005 from "../../assets/img/project005.png";
export default function Scan() {
  const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
  };
  const sliderImages = [{
      image: project001,
      alt: "Relait",
      addClass: "w-full h-full"
  },
  {
      image: project002,
      alt: "Relait",
      addClass: "w-full h-full"
  },
  {
      image: project003,
      alt: "Relait",
      addClass: "w-full h-full"
  },
  {
      image: project004,
      alt: "Relait",
      addClass: "w-full h-full"
  },
  {
      image: project005,
      alt: "Relait",
      addClass: "w-full h-full"
  }];
  return (
    <>
      <section className="bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-1 sm:gap-3 lg:gap-4 items-center text-center lg:text-start py-4 lg:py-5 xl:py-6">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-md md:text-lg xl:text-xl font-raleway font-semibold">
                Scan Bimit
              </h1>
              <div className="text-sm">Manage and Track your designs</div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
              <div className="sm:flex mx-[-4px] sm:w-[inherit] w-full">
                <Button
                  variant="outlined"
                  size="sm"
                  className="rounded hover:text-primary-500 hover:border-primary-500 mx-[4px] font-medium inline-block sm:flex items-center mt-2 sm:mt-0"
                  ripple={true}
                >
                  <i className="fa-regular fa-circle-play me-2"></i>
                  Book a demo
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  className="rounded hover:text-primary-500 hover:border-primary-500 mx-[4px] font-medium inline-block sm:flex items-center mt-2 sm:mt-0"
                  ripple={true}
                >
                  <i className="fa-brands fa-wpexplorer me-2"></i>
                  Explore BIMIT
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  className="rounded hover:text-primary-500 hover:border-primary-500 mx-[4px] font-medium inline-block sm:flex items-center mt-2 sm:mt-0"
                  ripple={true}
                >
                  <i className="fa-regular fa-circle-question me-2"></i>
                  Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="bg-gradient-to-r from-white to-gray-100 min-h-[50vh]">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="py-6 lg:py-8 bg-white h-full overflow-y-auto shadow-r">
                <div className="pe-6">
                    <div className="border border-blue-gray-100 rounded-md px-4 py-3 shadow-sm">
                        <div className="flex">
                            <div>
                                <UploadIcon className="h-11 w-11 cursor-pointer text-base-200 transition-all hover:text-base-800 me-1" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center font-semibold text-base-800">
                                    Upload your scan
                                    <Tooltip
                                        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-base-800 text-xs"
                                        content="Upload your scan"
                                    >
                                    <span><InfoIcon className="h-4 w-4 cursor-pointer text-base-200 transition-all ms-1 hover:text-base-800" /></span>
                                    </Tooltip>
                                </div>
                                <div className="text-xs text-base-300">Max file size: 5GB</div>
                                <Link href="#" className="flex items-center text-xs text-primary-500 mt-1">
                                    <i className="fa-solid fa-link me-1"></i>
                                    Or add via URL
                                </Link>
                            </div>
                            <div>
                                <Button fullWidth variant="outlined" size="sm" color="brown" className="flex rounded py-2 px-3 items-center shadow-btn-sm mt-2 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-amber-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100">
                                Browse
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Select label="Space Type">
                        <Option>Residential</Option>
                        <Option>Residential</Option>
                        <Option>Residential</Option>
                        <Option>Residential</Option>
                        <Option>Residential</Option>
                        </Select>
                    </div>
                    <div className="border border-blue-gray-200 rounded-md px-4 py-3 mt-4">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <div className="text-xs text-primary-500">Scan Size</div>
                                <div className="font-semibold text-base-800">
                                    1500 Sq.ft
                                </div>
                            </div>
                            <div className="flex items-center text-xs">
                                <div>Imperial</div>
                                <div className="px-2">
                                    <Switch color="amber" />
                                </div>
                                <div>Metric</div>
                            </div>
                        </div>
                        <Slider color="amber" defaultValue={50} className="mt-3" />
                    </div>
                    <div className="mt-4">
                        <Select label="Category">
                        <Option>Healthcare</Option>
                        <Option>Healthcare</Option>
                        <Option>Healthcare</Option>
                        <Option>Healthcare</Option>
                        <Option>Healthcare</Option>
                        </Select>
                    </div>
                    <div className="mt-4">
                        <Select label="Subcategory">
                        <Option>Dental Care</Option>
                        <Option>Dental Care</Option>
                        <Option>Dental Care</Option>
                        <Option>Dental Care</Option>
                        <Option>Dental Care</Option>
                        </Select>
                    </div>
                    <strong className="block text-base mt-4 mb-2 font-semibold">
                        Select Space Name
                    </strong>
                    <div>
                        <Checkbox
                        color="amber"
                        ripple={true}
                        className="w-4 h-4 rounded hover:before:opacity-0"
                        containerProps={{
                            className: "px-2 py-1 ms-[-8px]",
                        }}
                        label="Reception Area"
                        />
                    </div>
                    <div>
                        <Checkbox
                        color="amber"
                        ripple={true}
                        className="w-4 h-4 rounded hover:before:opacity-0"
                        containerProps={{
                            className: "px-2 py-1 ms-[-8px]",
                        }}
                        label="Consultation Room"
                        />
                    </div>
                    <div>
                        <Checkbox
                        color="amber"
                        ripple={true}
                        className="w-4 h-4 rounded hover:before:opacity-0"
                        containerProps={{
                            className: "px-2 py-1 ms-[-8px]",
                        }}
                        label="TreatMent Room"
                        />
                    </div>
                    <div>
                        <Checkbox
                        color="amber"
                        ripple={true}
                        className="w-4 h-4 rounded hover:before:opacity-0"
                        containerProps={{
                            className: "px-2 py-1 ms-[-8px]",
                        }}
                        label="X-Ray Room"
                        />
                    </div>
                    <div>
                        <Checkbox
                        color="amber"
                        ripple={true}
                        className="w-4 h-4 rounded hover:before:opacity-0"
                        containerProps={{
                            className: "px-2 py-1 ms-[-8px]",
                        }}
                        label="Office Administrative Area"
                        />
                    </div>
                    <div className="mt-6">
                        <Select label="Floor Plan Options">
                        <Option>2 Option</Option>
                        <Option>2 Option</Option>
                        <Option>2 Option</Option>
                        <Option>2 Option</Option>
                        <Option>2 Option</Option>
                        </Select>
                    </div>
                    <div className="flex mt-6">
                        <div className="flex-1">
                        <div className="flex items-center font-medium">
                        Is it a complex MEPF?
                            <Tooltip
                                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-base-800 text-xs"
                                content="Is it a complex MEPF?"
                            >
                            <span><InfoIcon className="h-5 w-5 cursor-pointer text-base-200 transition-all ms-1 hover:text-base-800" /></span>
                            </Tooltip>
                        </div>
                        </div>
                        <div className="px-1">
                        <Switch color="amber" />
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex mt-3">
                        <div className="flex-1">
                        <div className="flex items-center font-medium">
                            Is exterior modeling required?
                            <Tooltip
                                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-base-800 text-xs"
                                content="Is exterior modeling required?"
                            >
                            <span><InfoIcon className="h-5 w-5 cursor-pointer text-base-200 transition-all ms-1 hover:text-base-800" /></span>
                            </Tooltip>
                        </div>
                        </div>
                        <div className="px-1">
                        <Switch color="amber" />
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div>
                        <Input label="Email or Mobile Number" size="lg"/>
                    </div>
                    <div className="border border-blue-gray-100 rounded-md p-4 mt-4 shadow-sm">
                        <div className="flex">
                            <div className="flex-1">
                                <div className="flex items-center font-semibold text-base text-primary-500">
                                    $817.30
                                    <Tooltip
                                        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-base-800 text-xs"
                                        content="Price Information"
                                    >
                                    <span><InfoIcon className="h-4 w-4 cursor-pointer text-base-200 transition-all ms-1 hover:text-base-800" /></span>
                                    </Tooltip>
                                </div>
                                <div className="font-medium text-sm">Compared to $2,000.00</div>
                            </div>
                            <div>
                                <Button fullWidth variant="gradient" size="sm" color="amber" className="rounded py-2 px-4 text-white">Create
                                </Button>
                            </div>
                        </div>
                        <div className="text-xs text-base-300">Mon, Sep 16 - Wed, Sep 18 (3-5 Business Days)</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-8 py-6 xl:py-8">
              <div className="text-center mx-4">
                <h1 className="inline-block text-lg md:text-xl xl:text-2xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[10%] before:bottom-[-10px] before:bg-primary-500 before:right-[10%] mb-5">
                  <span className="text-primary-500">Due dilligence</span>, made
                  simple
                </h1>
                <p className="px-28">
                  Spaceplanning empowers business owners to visualize their
                  business before making critical decisions
                </p>
              </div>
              <div className="mx-4 pt-4 pb-12">
                <SlickSlider sliderImages={sliderImages} sliderSettings={sliderSettings} />
              </div>
              <div className="border border rounded-md p-4 mt-4 bg-white mx-4">
                    <div className="flex">
                        <div className="flex-1">
                            <span className="text-base-800 font-medium">Dental Clinic</span> 
                            <span className="text-base-300">(3128 SF)</span>
                        </div>
                        <div>
                            <span className="text-primary-500">Scale :</span> 1/8" = 1'- 0"
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
