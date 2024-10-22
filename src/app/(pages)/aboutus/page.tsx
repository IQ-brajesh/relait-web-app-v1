"use client";
import React from "react";
import Image from "next/image";
import aboutUs from "../../assets/img/about-us.svg";
import planit from "../../assets/img/planit.png";
import vision from "../../assets/img/vision.png";
import mission from "../../assets/img/mission.png";
import Testimonials from "@/app/components/testimonials";
import { Input, Textarea, Button, Checkbox } from "@material-tailwind/react";
export default function AboutUs() {
  return (
    <>
      <section className="bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="lg:flex py-6 lg:py-8 xl:py-12 items-center gap-4 md:gap-6 xl:gap-8">
            <div className="flex-1">
              <div>
                <strong className="block text-lg uppercase text-amber-500 font-semibold mb-2">
                Unveiling the Passion, Vision, &amp; Expertise Behind Our Designs
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
              Our Artistic Journey
              </h1>
              <p className="mt-8 text-sm lg:me-8">
              At Architronix, design is our canvas, and spaces are our masterpieces. With a vision for elegance, functionality, and innovation, our creative team curates environments that reflect dreams. From chic urban apartments to countryside estates, we're committed to sustainable design practices that enrich lives and the planet.
              </p>
              <p className="mt-8 text-sm lg:me-8">Join us on a journey where every room is a canvas for creativity, and design transcends the ordinary. Together, let's craft your vision, one design at a time.</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Image
                src={aboutUs}
                alt={"About Us"}
                className={"object-cover h-full"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-no-repeat bg-top bg-[url('../../assets/img/bg-architecture.png')] border-t border-b">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="py-8 md:py-12 lg:py-16 xl:py-20">
            <div className="text-center">
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
                Our Story
              </h1>
              <p className="mt-8 text-base">
                With multiple decades of experience in commercial design and
                construction, we are on a mission to revolutionize the retail,
                small commercial office design and construction industry for
                customers whose needs are unmet. The journey today involved a
                lot of adhoc . We've crafted Relait to be the ultimate
                collaborative space where creativity meets functionality. Here,
                you will find everything you need to bring your vision to life,
                from top-notch products to invaluable insights from industry
                experts.{" "}
              </p>
            </div>
            <div className="grid grid-cols-12 gap-8 md:gap-14 lg:gap-20">
              <div className="col-span-12 md:col-span-6">
                <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 text-center border border-white bg-white/50 shadow-center rounded-lg p-8">
                  <h1 className="inline-block text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
                    Our Vision
                  </h1>
                  <div className="mt-8 bg-green-50 rounded">
                    <Image
                      src={vision}
                      alt="Relait"
                      className="max-w-[25rem] w-full m-auto object-cover scale-95 transition-all hover:scale-100"
                    />
                  </div>
                  <p className="mt-4 text-base">
                    To empower both first time and seasoned small business
                    owners, by providing a comprehensive, user-friendly platform
                    that simplifies the design and construction process and
                    fosters creativity
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 text-center border border-white bg-white/50 shadow-center rounded-lg p-8">
                  <h1 className="inline-block text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[30%] before:bottom-[-1rem] before:bg-primary-500 before:right-[30%]">
                  Our Mission
                  </h1>
                  <div className="mt-8 bg-green-50 rounded">
                    <Image
                      src={mission}
                      alt="Relait"
                      className="max-w-[25rem] w-full m-auto object-cover scale-95 transition-all hover:scale-100"
                    />
                  </div>
                  <p className="mt-4 text-base">
                  To create a seamless, inspiring experience for our users by offering a curated selection of products, streamlining purchasing processes, and showcasing exceptional design talent.
                  </p>
                  
                </div>
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
                  Get in touch
                </strong>
              </div>
              <h1 className="inline-block text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-[66%]">
                Feel Free to Write us.
              </h1>
            </div>
            <div className="pt-8 md:pt-10 xl:pt-12">
              <div className="bg-white/50 rounded-lg p-8 border shadow-sm">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4">
                    <div>
                      <Input label="Your Name" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div>
                      <Input label="Email Address" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div>
                      <Input label="Your Phone" />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <Textarea
                      label="Type your Message"
                      rows={4}
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
                          to message us.
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
      <Testimonials />
    </>
  );
}
