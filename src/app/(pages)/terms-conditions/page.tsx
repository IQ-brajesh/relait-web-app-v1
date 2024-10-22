"use client";
import Image from "next/image";
import Link from "next/link";
import TermsConditionsImage from "../../assets/img/terms-conditions.jpg";
export default function termsConditions() {
  return (
    <>
      <section className="bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-1 sm:gap-3 lg:gap-4 items-center text-center lg:text-start py-4 lg:py-5 xl:py-6">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-md md:text-lg xl:text-xl font-raleway font-semibold">
                Terms &amp; Conditions
              </h1>
              <div className="text-sm">(Effective Date: July 1, 2024)</div>
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
                  <span className="text-primary-500">
                    Terms &amp; Conditions
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <main className="bg-white min-h-[50vh] relative bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-8 py-6 lg:py-8 xl:py-10">
            <div className="col-span-12 md:col-span-9 xl:col-span-10">
              <h1 className="inline-block text-xl md:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-10px] before:bg-primary-500 before:right-0 mb-5 font-semibold">
                <span className="text-primary-500">Relait</span>, Introduction
              </h1>
              <p className="mb-3">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
              <p className="mb-3">
                In the 1960s, the text suddenly became known beyond the
                professional circle of typesetters and layout designers when it
                was used for Letraset sheets (adhesive letters on transparent
                film, popular until the 1980s) Versions of the text were
                subsequently included in DTP programmes such as PageMaker etc.
              </p>
              <p>
                There is now an abundance of readable dummy texts. These are
                usually used when a text is required purely to fill a space.
                These alternatives to the classic Lorem Ipsum texts are often
                amusing and tell short, funny or nonsensical stories.
              </p>

              <h2 className="text-base md:text-xl xl:text-2xl text-slate-800 mt-4 mb-2 font-semibold">
                We use your information to
              </h2>
              <p className="mb-3">
                Ut in commodo magna. Donec semper at metus vitae varius. Duis id
                viverra velit, ut efficitur tortor. Nam consequat ipsum arcu,
                eget faucibus odio egestas vehicula. Duis eget lacus ac libero
                auctor molestie id vitae justo. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <ul className="space-y-1 list-inside">
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Donec nec felis eget augue fermentum vulputate.
                  </span>
                </li>
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Praesent et mauris non ante volutpat hendrerit aliquet ut
                    velit.
                  </span>
                </li>
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Nulla non nunc a neque viverra finibus in congue libero.
                  </span>
                </li>
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Nunc suscipit orci non augue efficitur porta.
                  </span>
                </li>
                <li className="flex items-center my-1.5">
                  <i className="fa-solid fa-check me-2 text-primary-500"></i>
                  <span className="flex-auto">
                    Morbi a orci sollicitudin, mattis mi vel, hendrerit metus.
                  </span>
                </li>
              </ul>
              <h2 className="text-base md:text-xl xl:text-2xl text-slate-800 font-semibold mt-4 mb-2">
                Information Provided Voluntarily
              </h2>
              <p className="mb-3">
                In the 1960s, the text suddenly became known beyond the
                professional circle of typesetters and layout designers when it
                was used for Letraset sheets (adhesive letters on transparent
                film, popular until the 1980s) Versions of the text were
                subsequently included in DTP programmes such as PageMaker etc.
              </p>

              <h2 className="text-base md:text-xl xl:text-2xl text-slate-800 font-semibold mt-4 mb-2">
                Security
              </h2>
              <p className="mb-3">
                We seek to use reasonable organizational, technical, and
                administrative measures to protect Personal Information within
                our organization. Unfortunately, no data transmission or storage
                system can be guaranteed to be 100% secure. If you have reason
                to believe that your interaction with us is no longer secure
                (for example, if you feel that the security of your account has
                been compromised), please immediately notify us in accordance
                with the "Contacting Us" section below.
              </p>

              <h2 className="text-base md:text-xl xl:text-2xl text-slate-800 font-semibold mt-4 mb-2">
                Sensitive Information
              </h2>
              <p className="mb-3">
                We ask that you not send us, and you not disclose, any sensitive
                Personal Information (e.g., Social Security numbers, information
                related to racial or ethnic origin, political opinions, religion
                or other beliefs, health, biometrics or genetic characteristics,
                criminal background, or trade union membership) on or through
                the Services or otherwise to us.
              </p>

              <h2 className="text-base md:text-xl xl:text-2xl text-slate-800 font-semibold mt-4 mb-2">
                Contacting Us
              </h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please
                contact us via email at
                <Link
                  href="mailto:info@relait-it.com"
                  className="inline-block font-medium relative before:absolute before:block before:left-0 before:bottom-0 before:h-px before:right-[100%] before:bg-primary-400 before:transition-all text-primary-400 hover:before:right-[0] mx-1"
                >
                  info@relait-it.com
                </Link>
                or write to us at:
              </p>
              <p className="mb-3">
                <strong className="block font-semibold">Relait</strong>
                c/o Relait Inc.
                <br />
                1234 West 50th Street, Suite 500
                <br />
                New York, NY 10020
              </p>
              <p className="mb-3">
                Because email communications are not always secure, please do
                not include credit card or other sensitive information in your
                emails to us.
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 xl:col-span-2 hidden md:flex">
              <Image
                src={TermsConditionsImage}
                alt="Relait"
                className="rounded-lg h-auto max-h-max w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
