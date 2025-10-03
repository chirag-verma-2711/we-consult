import React from 'react'
import Image from "next/image";

export default function ClientList() {
  return (
    <section className="w-full  py-[120px] bg-[#daebe3]">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-wrap md:justify-between justify-center w-[full] *:max-w-[140px] *:max-h-[36.25px] *:h-auto *:object-contain">
          <Image
            src="/assests/header/logoimage/1_logoipsum-289 2.svg"
            alt="Logo 1"
            width={100}
            height={60}
          />
          <Image
            src="/assests/header/logoimage/2_logoipsum-287 2.svg"
            alt="Logo 2"
            width={100}
            height={60}
          />
          <Image
            src="/assests/header/logoimage/3_logoipsum-317 2.svg"
            alt="Logo 3"
            width={100}
            height={60}
          />
          <Image
            src="/assests/header/logoimage/4_logoipsum-332 2.svg"
            alt="Logo 4"
            width={100}
            height={60}
          />
          <Image
            src="/assests/header/logoimage/5_logoipsum-323 2.svg"
            alt="Logo 5"
            width={100}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}

