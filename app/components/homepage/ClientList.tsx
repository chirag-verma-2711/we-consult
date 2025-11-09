import React from 'react'
import Image from "next/image";

export default function ClientList() {
  return (
    <section className="w-full  py-10 bg-[#daebe3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap md:justify-between justify-center *:px-10 *:sm:px-16 *:md:px-10 *:lg:px-16 *:py-5 *:w-1/2 *:md:w-1/5 ">
          <Image
            src="/assests/header/logoimage/1_logoipsum-289 2.svg"
            alt="Logo 1"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/2_logoipsum-287 2.svg"
            alt="Logo 2"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/3_logoipsum-317 2.svg"
            alt="Logo 3"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/4_logoipsum-332 2.svg"
            alt="Logo 4"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
          <Image
            src="/assests/header/logoimage/5_logoipsum-323 2.svg"
            alt="Logo 5"
            width={100}
            height={60}
            className="h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

