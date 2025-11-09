"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carousel() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-full border-[35px] border-[var(--lgreen)]" >

      {/* Slider Track */}
      <div
        className="flex transition-transform duration-700 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {/* Slide 1 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide1.jpg"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3 className="text-2xl font-medium">Network Optimisation</h3>
            <p className="text-sm px-12">
              We partner with organizations to drive efficiencies across sales & distribution verticals
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide2.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3 className="text-2xl font-medium">Capabilities</h3>
            <p className="text-sm px-12">
              Building the right people and process capabilities to sustain transformation and accelerate performance.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full relative">
          <img
            src="/assests/header/images/herobanner/slide3.png"
            alt="Slide One"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[50%] pb-10 left-0 w-full h-full flex flex-col items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(255,255,255,0)_50%)] text-center text-white">
            <h3 className="text-2xl font-medium">Technology & Data Analytics</h3>
            <p className="text-sm px-12">
              Embedding technology and analytics to make decisions faster, smarter, and more predictive.
            </p>
          </div>
        </div>

      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ▶
      </button> */}

      {/* Dots */}
      <div className="absolute top-[45%] w-full flex justify-center gap-2  translate-y-[50%]">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>

    </div>
  );
}
