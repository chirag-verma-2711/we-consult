"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen3)]">
          <div className="container mx-auto px-5 py-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
              <div
                ref={heading.ref}
                className={`fade-up ${heading.isVisible ? "show" : ""} `}
              >
                <Image
                  src="/assests/header/images/aboutsecond.webp"
                  className="w-full h-auto"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-center">
                <h2
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } text-[60px] font-semibold text-[var(--dgreen)]`}
                >
                  Who we are?
                </h2>
                <p
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } text-lg`}
                >
                  Founded by Jatin Panchal and Vinod Rao, LeapBridge Consulting
                  brings together over five decades of leadership across FMCG
                  healthcare, and consumer retail. <br />
                  <br />
                  Jatin is a commercial transformation expert who has led
                  large-scale growth and channel acceleration, while Vinod is a
                  seasoned P&L leader known for driving sales excellence and
                  executional discipline. <br />
                  <br />
                  Together, they combine strategic depth with field-tested
                  insight to help organisations transform sales performance and
                  unlock scalable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
