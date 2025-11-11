"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Fourth() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen3)]">
          <div className="container mx-auto px-5 py-12">
            <div>
              <h2 className="text-[40px] font-semibold text-[var(--dgreen)] text-center">The Minds Behind the Vision</h2>
            </div>
            <div>
              <p className="text-center max-w-6xl mx-auto text-[22px]">
                Jatin Panchal and Vinod Rao bring over five decades of combined leadership across diverse business environments. They blend strategic clarity with practical, on-ground execution, helping organizations strengthen their commercial engines, build capable teams, and unlock scalable growth.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="bg-[var(--lgreen)] rounded-2xl p-8">
                <div className="grid sm:grid-cols-[25%_75%]">
                  <div>
                    <Image src="/assests/header/images/Jatin-Panchal.jpg" className="w-full h-auto" width={1000} height={1000} alt="" />
                  </div>
                  <div></div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}
