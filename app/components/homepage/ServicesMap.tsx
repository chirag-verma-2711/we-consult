import React from 'react'
// import Image from "next/image";
import { zodiak } from "@/app/fonts";

const ServicesMap = () => {
  return (
    // <section className="relative w-full flex flex-col items-center justify-center bg-[#daebe3]">
    //   <div className="relative z-10 max-w-[808px] md:py-[170px] md:px-[30px] py-[50px] px-[36px] md:my-[90px] my-[50px] text-center bg-[url('/assests/header/logoimage/map_light_img.svg')] bg-contain bg-center bg-no-repeat">
    //     <p className={`${zodiak.className} text-[20px] md:text-[33px] font-normal leading-[130%] text-[var(--dgreen)] mx-auto`} >
    //       Since 1994 WeConsult brings the smartest people together offering
    //       exceptional consulting services for the biggest players.
    //     </p>
    //   </div>
    // </section>

    <section className="relative bg-[#daebe3] pt-[120px] pb-[24px]">
      <div className="text-center bg-[url('/assests/header/logoimage/map_light_img.svg')] bg-top bg-[length:100%_auto] bg-no-repeat w-full mx-auto max-w-[1058px] min-h-[545px] flex flex-col items-center justify-center">
        <div className="max-w-[808px] mx-auto">
          <p className={`${zodiak.className} text-[20px] md:text-[36px] font-normal leading-[130%] text-[var(--dgreen)]`} >
          Since 1994 WeConsult brings the smartest people together offering
          exceptional consulting services for the biggest players.
        </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesMap
