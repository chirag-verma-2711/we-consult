"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

const posts = [
  {
    title: "Mohan Goenka",
    short_title: "Vice Chairman & Whole Time Director Emami Ltd",
    description:
      "Through his data-driven thinking, strong execution and balanced focus on sustainable growth, Vinod has built a solid foundation",
    imageSrc: "/assests/header/images/goodinsights/1fist.jpeg",
  },
  {
    title: "Sanjay Purohit",
    short_title: "Whole Time Director and Group CEO Sapphire Foods",
    description:
      "Vinod combines data-driven insight with clear business judgment, translating strategy into results with speed and precision…..",
    imageSrc: "/assests/header/images/goodinsights/2second.jpeg",
  },
  {
    title: "Sunil Kataria",
    short_title: "CEO & MD Godrej Agrovet Limited",
    description:
      "What stands out most about Jatin is his ability to balance strategy with pragmatism — to think long-term while executing with precision.",
    imageSrc: "/assests/header/images/goodinsights/3third.jpeg",
  },
  {
    title: "Praveen Jakate",
    short_title:
      "Ex Chairman and Managing Director – South Asia Hershey India Pvt Ltd",
    description:
      "He played a key role in turning around the Hershey India business.",
    imageSrc: "/assests/header/images/goodinsights/1fist.jpeg",
  },
  {
    title: "Neil George",
    short_title: "Ex MD – Abbott Nutrition India Ltd.",
    description:
      "Jatin is the person you want to have on your team when you want to grow your brand in India.",
    imageSrc: "/assests/header/images/goodinsights/2second.jpeg",
  },
  {
    title: "Bill Brothers",
    short_title:
      "Ex Director Global Sales Development (Retired) The Hershey Company",
    description:
      "Vinod knows the diversity of the Indian markets very well and sets plans and resources accordingly.",
    imageSrc: "/assests/header/images/goodinsights/3third.jpeg",
  },
];

const GoodInsights = () => {
  const { ref: titleRef, isVisible: titleVisible } = useInView({
    threshold: 0.2,
  });
  const { ref: subRef, isVisible: subVisible } = useInView({ threshold: 0.2 });

  return (
    <div className="flex justify-center py-12 md:py-24 bg-[#ECF6F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          ref={titleRef}
          className={`fade-up ${
            titleVisible ? "show" : ""
          } text-5xl font-semibold text-[#1B3233] mb-4 text-center`}
        >
          Voices of Success
        </h2>

        {/* Sub Text */}
        <p
          ref={subRef}
          className={`fade-up ${
            subVisible ? "show" : ""
          } text-[#1B3233] mb-10 text-xl text-center max-w-xl mx-auto`}
        >
          Discover how our collaboration has enabled brands to accelerate
          performance and scale with confidence
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const { ref, isVisible } = useInView({ threshold: 0.2 }); // ✅ individual observer per card

            return (
              <article
                key={index}
                ref={ref}
                className={`fade-up ${isVisible ? "show" : ""}
                hover:bg-[#aac5b4] hover:shadow-2xl 
                rounded-xl shadow-lg 
                transition-all duration-300 ease-in-out
                bg-[#daebe3] mx-auto mt-[150px]`}
              >
                <div className="md:p-4 rounded-2xl">
                  <div className="relative">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-2xl relative -mt-[150px] mb-5 shadow-md 
                      transition duration-300"
                    />

                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                      <a href="#" className="text-[#333]">
                        {post.title}
                      </a>
                    </h3>

                    <p className="text-md font-normal underline text-[#147e5d] mb-[7px]">
                      {post.short_title}
                    </p>

                    <p className="text-gray-600 text-base">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GoodInsights;
