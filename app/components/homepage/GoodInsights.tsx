"use client";

import React from "react";
import Image from "next/image";

const GoodInsights = () => {
  return (
    <div className="flex justify-center py-12 md:py-24 bg-[#ECF6F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="fade-up show text-5xl font-semibold text-[#1B3233] mb-4 text-center">
          Voices of Success
        </h2>

        {/* Sub Text */}
        <p className="fade-up show text-[#1B3233] mb-10 text-xl text-center max-w-xl mx-auto">
          Discover how our collaboration has enabled brands to accelerate
          performance and scale with confidence
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/1fist.jpeg"
                  alt="Mohan Goenka"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Mohan Goenka
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  Vice Chairman & Whole Time Director Emami Ltd
                </p>
                <p className="text-gray-600 text-base">
                  Through his data-driven thinking, strong execution and balanced
                  focus on sustainable growth, Vinod has built a solid foundation
                </p>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/2second.jpeg"
                  alt="Sanjay Purohit"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Sanjay Purohit
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  Whole Time Director and Group CEO Sapphire Foods
                </p>
                <p className="text-gray-600 text-base">
                  Vinod combines data-driven insight with clear business judgment,
                  translating strategy into results with speed and precision…..
                </p>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/3third.jpeg"
                  alt="Sunil Kataria"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Sunil Kataria
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  CEO & MD Godrej Agrovet Limited
                </p>
                <p className="text-gray-600 text-base">
                  What stands out most about Jatin is his ability to balance
                  strategy with pragmatism — to think long-term while executing
                  with precision.
                </p>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/1fist.jpeg"
                  alt="Praveen Jakate"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Praveen Jakate
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  Ex Chairman and Managing Director – South Asia Hershey India Pvt Ltd
                </p>
                <p className="text-gray-600 text-base">
                  He played a key role in turning around the Hershey India business.
                </p>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/2second.jpeg"
                  alt="Neil George"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Neil George
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  Ex MD – Abbott Nutrition India Ltd.
                </p>
                <p className="text-gray-600 text-base">
                  Jatin is the person you want to have on your team when you want to
                  grow your brand in India.
                </p>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article className="fade-up show hover:bg-[#aac5b4] hover:shadow-2xl rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-[#daebe3] mx-auto mt-[150px]">
            <div className="md:p-4 rounded-2xl">
              <div className="relative">
                <Image
                  src="/assests/header/images/goodinsights/3third.jpeg"
                  alt="Bill Brothers"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md transition duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                  Bill Brothers
                </h3>
                <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                  Ex Director Global Sales Development (Retired) The Hershey Company
                </p>
                <p className="text-gray-600 text-base">
                  Vinod knows the diversity of the Indian markets very well and sets
                  plans and resources accordingly.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GoodInsights;
