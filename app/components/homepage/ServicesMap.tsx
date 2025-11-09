import React from "react";
// import Image from "next/image";
import { zodiak } from "@/app/fonts";
import Image from "next/image";

const ServicesMap = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#daebe3] bg-[url('/assests/header/images/dotted_bg.png')] bg-no-repeat bg-[position:50%_-150px] bg-[length:67%]">
      <div className="relative z-10 max-w-4xl pb-[100px] pt-[150px] md:px-[100px] px-[36px] text-center ">
      {/* E:\my-app-old\public\assests\header\images\dotted_bg.png */}
        <h2 className="text-4xl font-semibold mb-1 text-[var(--dgreen)]">
          What do we do ?
        </h2>
        <p className="text-xl font-medium mb-2 text-black">
          Driving Growth Through Transformation.
        </p>
        <p className="text-lg font-normal leading-[130%] text-[#1B3233] mx-auto">
          LeapBridge Consulting helps consumer-facing businesses scale through
          Route-to-Market redesign, sales excellence, and execution-led
          transformation. With 55+ years of combined leadership experience and
          AI-driven sales insights, they bridge strategy and execution to
          deliver measurable, lasting growth.
        </p>
      </div>

      <div className="pb-[50px] w-full container">
        <h2 className="text-4xl font-semibold text-[var(--dgreen)] text-center mb-[30px]">
          Exposure Across Iconic Brands
        </h2>
        <div className="flex flex-wrap  justify-between w-full  *:lg:px-12 *:md:px-10 *:sm:px-8 *:px-6 *:py-5 *:w-1/2 *:lg:w-1/6 *:md:w-1/4">
          <Image
            src="/assests/header/logoimage/abbot.png"
            alt="Logo 1"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/Cipla_logo.png"
            alt="Logo 2"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/DANONE_LOGO_HORIZONTAL.png"
            alt="Logo 3"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/emami.png"
            alt="Logo 4"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/godrej.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/hershey_company-logo_brandlogos.net_pcliv.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />

          <Image
            src="/assests/header/logoimage/mondelez-international-logo.png"
            alt="Logo 1"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/Marico_Logo.png"
            alt="Logo 2"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/nobel-hygine.png"
            alt="Logo 3"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/P&G-Logo.png"
            alt="Logo 4"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/parle-Agro.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/Reckitt-Benckiser-logo.png"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesMap;
