
import type { Metadata } from "next";
import SlickSlider from '../components/SlickSlider';
import architecture001 from "../assets/img/architecture001.jpg";
import architecture002 from "../assets/img/architecture002.jpg";
import architecture003 from "../assets/img/architecture003.jpg";

export const metadata: Metadata = {
  title: "Login to RELAIT",
  description: "Build your business from the ground up. Discover endless possibilities for offices, gyms, clinics, salons, stores, restaurants, schools, and more. Find professionals, products, and inspiration",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  };
  const sliderImages = [{
      image: architecture001,
      alt: "Relait",
      addClass: "h-[100vh] w-full object-cover",
      content: <div className="absolute inset-0 grid h-full w-full items-center">
      <div className="w-[50%] pl-12 md:w-2/4 md:pl-20 lg:pl-32">
      <h2 className="text-primary-500 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
          Building amazing
        </h2>
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
        Architecture 
        </h1>
        <p className="text-base-800 text-lg mt-8">
          Through a unique combination of engineering, construction and
          design disciplines and expertise.
        </p>
      </div>
    </div>
  },
  {
      image: architecture002,
      alt: "Relait",
      addClass: "h-[100vh] w-full object-cover",
      content: <div className="absolute inset-0 grid h-full w-full items-center bg-white/85">
      <div className="w-[50%] pl-12 md:w-2/4 md:pl-20 lg:pl-32">
      <h2 className="text-primary-500 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
        Transform your Property
        </h2>
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
        Search Experience  
        </h1>
        <p className="text-base-800 text-lg mt-8">
        Through a unique combination of engineering, construction and
        design disciplines and expertise.
        </p>
      </div>
    </div>
  },
  {
      image: architecture003,
      alt: "Relait",
      addClass: "h-[100vh] w-full object-cover",
      content: <div className="absolute inset-0 grid h-full w-full items-center bg-white/90">
      <div className="w-[50%] pl-12 md:w-2/4 md:pl-20 lg:pl-32">
      <h2 className="text-primary-500 mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
        Business Owners
        </h2>
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-0 before:bottom-[-1rem] before:bg-primary-500 before:right-0">
        Launch your Vision  
        </h1>
        <p className="text-base-800 text-lg mt-8">
        Starting a new business is an exciting venture, but finding the perfect space to launch your vision can be challenging.
        </p>
      </div>
    </div>
  }];
  return( 
    <>
      <div className="absolute top-0 right-[60px] z-10">
        <div className="container max-w-[1200px] m-auto">
          <div className="flex justify-end">
            <div className="h-[100vh] overflow-y-auto bg-white/90 shadow-lg flex items-center px-20 w-[34rem] justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
      <SlickSlider sliderImages={sliderImages} sliderSettings={sliderSettings} className="slick-slider-full relative h-full w-full" wrapClass="relative h-[100vh]" />
    </>
  );
}
