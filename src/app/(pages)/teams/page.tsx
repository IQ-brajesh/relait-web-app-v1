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
import team01 from "../../assets/img/team01.jpg";
import team02 from "../../assets/img/team02.jpg";
import team03 from "../../assets/img/team03.jpg";
import team04 from "../../assets/img/team04.jpg";
import team05 from "../../assets/img/team05.jpg";
import team06 from "../../assets/img/team06.jpg";
import team07 from "../../assets/img/team07.jpg";
export default function Teams() {
  return (
    <>
      <section className="bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-6 lg:py-8 xl:py-12 items-center">
            <div className="text-center">
              <div>
                <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                Where Imagination Takes Flight, and Excellence Blossoms
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
              Architects of Relait
              </h1>
              <p className="mt-8 text-base lg:me-8">
                Our pre-lease service is transforming how businesses secure
                their commercial real estate. Our mission is to deliver an
                affordable, powerful tool that lets you{" "}
                <i className="text-primary-500 font-semibold">
                  visualize your space
                </i>{" "}
                before committing to a lease or purchase.
              </p>
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="">
                  <div className="grid grid-cols-1 gap-4">
                    <Image src={team01} className="shadow rounded-lg" alt=""/>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-1 gap-4">
                    <Image src={team02} className="shadow rounded-lg" alt=""/>
                    <Image src={team03} className="shadow rounded-lg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <Image src={team04} className="shadow rounded-lg" alt=""/>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="">
                  <div className="grid grid-cols-1 gap-4">
                    <Image src={team05} className="shadow rounded-lg" alt=""/>
                    <Image src={team06} className="shadow rounded-lg" alt=""/>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-1 gap-4">
                    <Image src={team07} className="shadow rounded-lg" alt=""/>
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
      <LatestUpdates/>
      <Testimonials />
    </>
  );
}
