"use client";

import React from "react";
import Image from "next/image";
// import useInView from "@/app/hooks/useInView";

export default function Second() {
  return (
    <>
      <section>
        <div className="px-5  py-10 bg-white">
          <div className="max-w-[1250px] mx-auto">
            <div className="mb-7">
              <div className="md:flex w-full items-stretch gap-7">
                <div className="md:w-fit w-full lg:order-2">
                  <Image
                    src="/assests/header/images/Jatin-Panchal.jpg"
                    className="lg:h-full md:max-w-full max-w-[400px]"
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </div>
                <div className="bg-[var(--dgreen)] p-5 *:text-white rounded-xl">
                  <h3 className="font-semibold text-3xl">Jatin Panchal</h3>
                  <p className="text-lg font-medium">Founder & Partner</p>
                  <p className="text-lg mb-3">
                    MBA: SIMSR Exec MBA: INSEAD, France
                  </p>
                  <p className="text-lg">
                    A commercial transformation leader with over 25 years of
                    experience in FMCG & consumer healthcare, driving growth,
                    reach, & sales excellence across channels. Jatin has
                    successfully led the transition of healthcare & pharma
                    portfolios into consumer-facing FMCG businesses. Expertise
                    in building new businesses, including ecom for FMCG firms,
                    he blends analytical precision with people-centric...
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="md:flex w-full items-stretch gap-7">
                <div className="md:w-fit w-full">
                  <Image
                    src="/assests/header/images/Vinod-Rao.jpg"
                    className="lg:h-full md:max-w-full max-w-[400px]"
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </div>
                <div className="bg-[var(--dgreen2)] p-5 *:text-white rounded-xl">
                  <h3 className="font-semibold text-3xl">Vinod Rao</h3>
                  <p className="text-lg font-medium">Founder & Partner</p>
                  <p className="text-lg mb-3">MBA: JBIMS</p>
                  <p className="text-lg">
                    A seasoned P&L leader with over 30 years of experience
                    across FMCG, healthcare, and retail banking. Vinod has led
                    business turnarounds and large scale distribution
                    expansions, earning a reputation for translating strategy
                    into seamless execution. He brings deep expertise in sales
                    transformation, category growth, channel management, and
                    trade excellence, along with hands-on experience in cold ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
