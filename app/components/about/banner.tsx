"use client";

import React from "react";
import Image from "next/image";
// import useInView from "@/app/hooks/useInView";

export default function Banner() {
//   const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div>
            <div className="container mx-auto px-5 py-5">
                <div className="max-w-2xl bg-black p-4">
                    <h1>Driving Growth Through Transformation.</h1>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
