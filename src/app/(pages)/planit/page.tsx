"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input, Textarea, Button, Checkbox } from "@material-tailwind/react";
import planit from "../../assets/img/planit.png";
import businesOwners from "../../assets/img/busines-owners.png";
import iconUpload from "../../assets/img/icon-upload.png";
import iconRequirementes from "../../assets/img/icon-requirementes.png";
import iconRecieve from "../../assets/img/icon-recieve.png";
import iconAllows from "../../assets/img/icon-allows.png";
import spacePlan01 from "../../assets/img/space-plan-01.png";
import spacePlan02 from "../../assets/img/space-plan-02.png";
import spacePlan03 from "../../assets/img/space-plan-03.png";
import iconTerms from "../../assets/img/icon-terms.png";
import Testimonials from "@/app/components/testimonials";
import { CheckIcon } from "../../components/icons";
import project002 from "../../assets/img/project002.png";
import LatestUpdates from "@/app/components/latestUpdates";
import SlickSlider from "@/app/components/SlickSlider";

export default function Planit() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderImages = [
    {
      alt: "Relait",
      addClass: "",
      content: (
        <Link href={"#"} className={`relative overflow-hidden border rounded-lg p-6 bg-white shadow-sm bg-no-repeat bg-top bg-cover bg-[url("../../assets/img/img-healthcare.jpg")] h-[25rem] flex items-end before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-brown-900/50`}>
          <div className="relative z-[2]">
            <h1 className="inline-block text-sm md:text-base text-white/90 font-bold relative before:absolute before:block before:h-[2px] before:left-0 before:bottom-[-0.375rem] before:bg-primary-500 before:right-0">
              Healthcare
            </h1>
            <p className="text-white/75 text-sm mt-3">
            medical practices, therapy centers, clinics, specialty, sergical centers... <span
             className="text-sm text-primary-500 text-nowrap">Read more <i className="fa-solid fa-chevron-right text-xs"></i></span>
            </p>
          </div>
        </Link>
      ),
    },
    {
      alt: "Relait",
      addClass: "",
      content: (
        <Link href={"#"} className={`relative overflow-hidden border rounded-lg p-6 bg-white shadow-sm bg-no-repeat bg-top bg-cover bg-[url("../../assets/img/img-retail.jpg")] h-[25rem] flex items-end before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-brown-900/50`}>
          <div className="relative z-[2]">
          <h1 className="inline-block text-sm md:text-base text-white/90 font-bold relative before:absolute before:block before:h-[2px] before:left-0 before:bottom-[-0.375rem] before:bg-primary-500 before:right-0">
            Retail
          </h1>
          <p className="text-white/75 text-sm mt-3">
          stores, point of sale spaces, grocery, equipment, health... <span
             className="text-sm text-primary-500 text-nowrap">Read more <i className="fa-solid fa-chevron-right text-xs"></i></span>
          </p>
          </div>
        </Link>
      ),
    },
    {
      alt: "Relait",
      addClass: "",
      content: (
        <Link href={"#"} className={`relative overflow-hidden border rounded-lg p-6 bg-white shadow-sm bg-no-repeat bg-top bg-cover bg-[url("../../assets/img/img-education.jpg")] h-[25rem] flex items-end before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-brown-900/50`}>
          <div className="relative z-[2]">
          <h1 className="inline-block text-sm md:text-base text-white/90 font-bold relative before:absolute before:block before:h-[2px] before:left-0 before:bottom-[-0.375rem] before:bg-primary-500 before:right-0">
            Education
          </h1>
          <p className="text-white/75 text-sm mt-3">
          dycare, tutoring, retail educational spaces... <span
             className="text-sm text-primary-500 text-nowrap">Read more <i className="fa-solid fa-chevron-right text-xs"></i></span>
          </p>
          </div>
        </Link>
      ),
    },
    {
      alt: "Relait",
      addClass: "",
      content: (
        <Link href={"#"} className={`relative overflow-hidden border rounded-lg p-6 bg-white shadow-sm bg-no-repeat bg-top bg-cover bg-[url("../../assets/img/img-office.jpg")] h-[25rem] flex items-end before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-brown-900/50`}>
          <div className="relative z-[2]">
          <h1 className="inline-block text-sm md:text-base text-white/90 font-bold relative before:absolute before:block before:h-[2px] before:left-0 before:bottom-[-0.375rem] before:bg-primary-500 before:right-0">
            Office
          </h1>
          <p className="text-white/75 text-sm mt-3">
          Business office, law office, consulting centeres... <span
             className="text-sm text-primary-500 text-nowrap">Read more <i className="fa-solid fa-chevron-right text-xs"></i></span>
          </p>
          </div>
        </Link>
      ),
    }
  ];
  return (
    <>
      <section className="bg-gradient-to-r from-amber-50 to-[#fffcf3]">
        <div className="container mx-auto max-w-[1200px] px-4 py-6 md:py-8 lg:py-10 xl:py-12">
          <div className="text-center">
            <div>
              <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                Transform your property search experience with our
              </strong>
            </div>
            <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
              “PlanIt” solution
            </h1>
            <p className="mt-8 text-base lg:me-8">
              Our pre-lease service is transforming how businesses secure their
              commercial real estate. Our mission is to deliver an affordable,
              powerful tool that lets you{" "}
              <i className="text-primary-500 font-semibold">
                visualize your space
              </i>{" "}
              before committing to a lease or purchase.
            </p>
          </div>
          <div className="pb-4">
          <SlickSlider
            sliderImages={sliderImages}
            sliderSettings={sliderSettings}
            className="relative mx-[-4px]"
            wrapClass="px-2 pt-4 md:pt-6 lg:pt-8 pb-2"
          />
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
            <div className="text-center">
              <div>
                <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                  Space Plan
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
                Pre-Lease Space Plan
              </h1>
            </div>
            <div className="grid grid-cols-12 gap-0 text-center py-4 md:py-8 lg:py-12 xl:py-16">
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image src={iconUpload} alt={"planit"} className={"m-auto"} />
                  <strong className="block mt-4 mb-2 font-semibold text-primary-500 text-lg">
                    Upload
                  </strong>
                  Upload you real estate listing to initiate
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image
                    src={iconRequirementes}
                    alt={"planit"}
                    className={"m-auto"}
                  />
                  <strong className="block mt-4 mb-2 font-semibold text-primary-500 text-lg">
                    Requirements
                  </strong>
                  Give us your space and functional requirements
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image
                    src={iconRecieve}
                    alt={"planit"}
                    className={"m-auto"}
                  />
                  <strong className="block mt-4 mb-2 font-semibold text-primary-500 text-lg">
                    Recieve
                  </strong>
                  Recieve your test-fit layout with your vision in 2D
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l">
                <div className="lg:mx-4 xl:mx-8 pt-4 lg:pt-6">
                  <Image src={iconAllows} alt={"planit"} className={"m-auto"} />
                  <strong className="block mt-4 mb-2 font-semibold text-primary-500 text-lg">
                    Allows
                  </strong>
                  Allows real estate brokers, architects, landlords, & tenants
                  to quickly & efficiently recieve 2D floor plans
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-0 text-center py-4">
            <div className="col-span-12 md:col-span-4">
              <div className="lg:mx-4 xl:mx-8 py-4 lg:py-6">
                <Image
                  src={spacePlan01}
                  alt="Relait"
                  className="w-full object-cover scale-95 transition-all hover:scale-100"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="lg:mx-4 xl:mx-8 py-4 lg:py-6">
                <Image
                  src={spacePlan02}
                  alt="Relait"
                  className="w-full object-cover scale-95 transition-all hover:scale-100"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="lg:mx-4 xl:mx-8 py-4 lg:py-6">
                <Image
                  src={spacePlan03}
                  alt="Relait"
                  className="w-full object-cover scale-95 transition-all hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-4 md:py-6 lg:py-8 xl:py-10">
            <div className="lg:flex items-center gap-4 md:gap-6 xl:gap-8">
              <div className="flex items-center gap-4 md:gap-6 xl:gap-8">
                <div>
                  <Image src={iconTerms} alt={"planit"} className={"m-auto"} />
                </div>
                <div className="flex-1">
                  <p className="mb-3">
                    This product is crafted to assist with client due diligence.
                    For any revisions, kindly place a separate order, and we'll
                    ensure your needs are met promptly.
                  </p>
                  <p>
                    Most designs are completed within 2-5 days, except for cases
                    where the space has unique shapes or requirements that
                    require additional research.
                  </p>
                </div>
              </div>
              <div className="my-6 lg:mt-0">
                <Link href="/terms-conditions">
                  <Button
                    fullWidth
                    variant="outlined"
                    size="sm"
                    color="brown"
                    className="flex rounded py-4 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-green-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100 text-nowrap justify-center"
                  >
                    Terms and Conditions Apply
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 bg-top bg-repeat-x bg-top bg-[url('../../assets/img/bg-geometric.png')]">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12">
            <div>
              <div>
                <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                  Get Started
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-[66%]">
                Submit your space to get started.
              </h1>
            </div>
            <div className="pt-8 md:pt-10 xl:pt-12">
              <div className="bg-white/50 rounded-lg p-8 border shadow-sm">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <div>
                      <Input label="First Name" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div>
                      <Input label="Last Name" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div>
                      <Input label="Email Address" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div>
                      <Input label="Listing Link" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="-ml-2.5">
                      <Checkbox
                        label="Sign up for news and updates"
                        color="green"
                        className="my-0"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="text-xs mx-3 text-gray-500 mt-[-8px]">
                      Provide us with your most likely real estate listings
                    </div>
                  </div>
                  <div className="col-span-12">
                    <Textarea
                      label="Provide us with your type of space and space requirements"
                      rows={8}
                    />
                    <div className="mt-3 md:mt-4">
                      <div className="flex items-center">
                        <div>
                          <Button
                            fullWidth
                            variant="outlined"
                            size="lg"
                            color="brown"
                            className="flex w-auto rounded py-3 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-green-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100"
                          >
                            Send Message
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                          </Button>
                        </div>
                        <div className="flex-1 ms-8">
                          or email us at{" "}
                          <a
                            href="mailto:service@relait-it.com"
                            className="inline-block relative before:absolute before:block before:h-[1px] before:left-0 before:bottom-[0] before:bg-primary-400 before:transition-all hover:before:right-[100%] transition-all text-base-800 hover:text-primary-500 font-medium text-primary-500 before:right-[0]"
                          >
                            service@relait-it.com
                          </a>{" "}
                          to gets started
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-no-repeat bg-top bg-[url('../../assets/img/bg-architecture.png')] border-t border-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-8 md:py-12 lg:py-16 xl:py-20">
            <div className="text-center">
              <div>
                <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                  Business Owners
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
                Starting a new business?
              </h1>
              <p className="mt-8 text-base">
                Starting a new business is an exciting venture, but finding the
                perfect space to launch your vision can be challenging. As a
                first-time business owner, you need a space that meets your
                functional requirements and reflects your brand's identity.{" "}
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4 md:gap-6 xl:gap-8 pt-4 md:pt-8 lg:pt-12 xl:pt-16">
              <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
                <Image
                  src={businesOwners}
                  alt={"planit"}
                  className={"max-w-full h-full"}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <ul className="mt-4 ml-0 xl:mr-32 p-0">
                  <li className="flex mb-4 lg:mb-8">
                    <span>
                      <CheckIcon className="fill-primary-500 me-4 h-[2.5rem] md:h-[2.5rem]" />
                    </span>
                    <span>
                      Consulting an architect before signing a lease or
                      committing to a property purchase may seem premature, but
                      Relait is available to bridge that gap.
                    </span>
                  </li>
                  <li className="flex mb-4 lg:mb-8">
                    <span>
                      <CheckIcon className="fill-primary-500 me-4 h-[2.5rem] md:h-[2.5rem]" />
                    </span>
                    <span>
                      Understanding if the space is adequate to accommodate
                      current and future business operations
                    </span>
                  </li>
                  <li className="flex mb-4 lg:mb-8">
                    <span>
                      <CheckIcon className="fill-primary-500 me-4 h-[2.5rem] md:h-[2.5rem]" />
                    </span>
                    <span>
                      LayoutFit offers tools and resources to help users
                      visualize and plan their interior layouts effectively,
                      bridging the gap even before signing a lease or committing
                      to a property
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex items-center pt-8 md:pt-12 lg:pt-16 xl:pt-20 items-center gap-4 md:gap-6 xl:gap-8">
              <div className="flex-1">
                <div>
                  <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                    Our Service
                  </strong>
                </div>
                <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-[50%]">
                  Lease or purchase process
                </h1>
                <p className="mt-8 text-base lg:me-8">
                  Our service{" "}
                  <strong className="font-semibold text-primary-500">
                    enhances
                  </strong>{" "}
                  the lease or purchase process for various commercial
                  environments, such as retail, medical, and office spaces, by
                  providing solutions that meet specific spatial requirements.
                </p>
                <p className="mt-4 text-base lg:me-8">
                  The PlanIT solution by Relait offers tools to customize and
                  visualize interior layouts for commercial spaces, streamlining
                  the lease or purchase process while minimizing the risks of
                  setting up a business.
                </p>
                <p className="mt-4 text-base lg:me-8">
                  This service is aimed at reducing risks and challenges
                  associated with setting up a business from scratch, ensuring
                  functional and efficient use of space.
                </p>
              </div>
              <div>
                <div className="border border-white border-[16px] bg-green-50 shadow-center rounded-lg p-4 mt-6 md:mt-0">
                  <Image
                    src={project002}
                    alt="Relait"
                    className="max-w-[25rem] w-full m-auto object-cover scale-95 transition-all hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestUpdates />
      <Testimonials />
    </>
  );
}
