import React from 'react'
// import Image from "next/image";
import { zodiak } from "@/app/fonts";

const ServicesMap = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#daebe3]">


      <div className="relative z-10 max-w-4xl md:py-[170px] md:px-[100px] py-[50px] px-[36px] md:my-[90px] my-[50px] text-center px-6 bg-[url('/assests/header/logoimage/map_light_img.svg')] bg-contain bg-center bg-no-repeat">
        <p className={`${zodiak.className} text-[20px] md:text-[33px] font-normal leading-[130%] text-[#1B3233] mx-auto`} >
          Since 1994 WeConsult brings the smartest people together offering
          exceptional consulting services for the biggest players.
        </p>
      </div>

    </section>
  )
}

export default ServicesMap
