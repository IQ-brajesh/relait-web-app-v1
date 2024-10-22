"use client";
import { Button, Input, Textarea } from "@material-tailwind/react";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-1 sm:gap-3 lg:gap-4 items-center text-center lg:text-start py-4 lg:py-5 xl:py-6">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-lg md:text-xl xl:text-2xl font-raleway font-semibold">
                Contact Relait
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
              <ol className="flex flex-wrap items-center">
                <li className="flex items-center">
                  <Link
                    href="/planit"
                    className={`text-slate-800 hover:text-primary-500 transition-all`}
                  >
                    Home
                    <span className="text-slate-800 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none opacity-50">
                      /
                    </span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500">Contact</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <main className="bg-gradient-to-r from-white to-gray-100 min-h-[50vh] relative">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 sm:col-span-6">
              <div className="py-6 lg:py-8 bg-white h-full overflow-y-auto shadow-r relative z-[1]">
                <div className="pe-6">
                  <div>
                    <h1 className="inline-block text-lg md:text-xl xl:text-2xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-10px] before:bg-primary-500 before:right-0 mb-5">
                      <span className="text-primary-500">Get in</span>, Touch!
                    </h1>
                    <p className="text-base">
                      Our experts are available to answer any questions you
                      might have. We’ve got the answers.
                    </p>
                  </div>
                  <div className="my-6">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-6">
                        <div>
                          <Input label="Your Email Address" />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <div>
                          <Input label="Your Full Name" />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <div>
                          <Input label="Your Phone Number" />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <div>
                          <Input label="Enter Subject Here" />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <Textarea label="Write your Message" rows={8} />
                        <div className="mt-3 md:mt-4">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 py-6 xl:py-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.803604386418!2d36.79379497404567!3d-1.2922380356307221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f116894ece30d%3A0xfc4ef44d08495960!2sPCEA%20Flats%2C%20Jabavu%20road!5e0!3m2!1sen!2sin!4v1724198101723!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-[50%] absolute top-0 left-[50%] right-0 border-[32px] border-white"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
