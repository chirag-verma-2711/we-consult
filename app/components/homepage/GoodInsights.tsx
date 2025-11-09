import React from "react";
import Image from "next/image";
import { satoshi } from "@/app/fonts";
import { zodiak } from "@/app/fonts";

const posts = [
    {
        title: "Color in Brand Identity",
        description:
            "The role of color in building a cohesive and memorable brand identity.",
        imageSrc: "/assests/header/images/goodinsights/1fist.jpeg",
    },
    {
        title: "Designing for Accessibility",
        description: "Learn how to create designs that are accessible to all users",
        imageSrc: "/assests/header/images/goodinsights/2second.jpeg",
    },
    {
        title: "Cohesive Brand Identity",
        description:
            "Learn how to develop a consistent brand identity for your business.",
        imageSrc: "/assests/header/images/goodinsights/3third.jpeg",
    },
];

const GoodInsights = () => {
    return (
        <div className="flex justify-center py-12 md:py-24 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl font-normal text-[#1B3233] mb-4 text-center ${zodiak.className}`}>
                    Good stories, good insights
                </h2>
                <p className={`text-[#1B3233] mb-10 text-xl text-center ${satoshi.className}`}>
                    Learn how to effectively use color in your brand design.
                </p>

                <div className="space-y-6">
                    {posts.map((post, index) => (
                        //             <article
                        //                 key={index}
                        //                 className="bg-white rounded-xl shadow-lg overflow-hidden
                        //   transition-shadow duration-300"
                        //             >
                        //                 <div className="p-10 bg-green-500 rounded-2xl">
                        //                     <div className="md:flex md:items-stretch">
                        //                         <div className="md:w-1/3 flex-shrink-0 relative">
                        //                             <div className="w-full h-48 md:h-full bg-gray-200">
                        //                                 <Image
                        //                                     src={post.imageSrc}
                        //                                     alt={post.title}
                        //                                     width={400}
                        //                                     height={300}
                        //                                     className="w-full h-full object-cover"
                        //                                 />
                        //                             </div>
                        //                         </div>

                        //                         <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                        //                             {/* <div> */}
                        //                                 <h3
                        //                                     className={`text-3xl font-bold text-gray-900 mt-2 mb-3 font-normal ${zodiak.className}`}
                        //                                 >
                        //                                     <a href="#" className="text-[#333] ">
                        //                                         {post.title}
                        //                                     </a>
                        //                                 </h3>
                        //                                 <p className={`text-gray-600 text-base text-xl ${satoshi.className}`}>
                        //                                     {post.description}
                        //                                 </p>
                        //                             {/* </div> */}
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </article>
                        <article
                            key={index}
                            className="hover:bg-[#aac5b4] rounded-xl shadow-lg overflow-hidden
             transition-colors duration-300 bg-[#daebe3]  md:w-4/5 mx-auto"
                        >
                            <div className="p-5 md:p-8 rounded-2xl">
                                <div className="md:flex md:items-stretch">
                                    <div className="md:w-1/3 flex-shrink-0 relative">
                                        <div className="w-full h-48 md:h-full ">
                                            <Image
                                                src={post.imageSrc}
                                                alt={post.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                                        <h3
                                            className={`text-3xl font-bold text-gray-900 mt-2 mb-3 font-normal ${zodiak.className}`}
                                        >
                                            <a href="#" className="text-[#333]">
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className={`text-gray-600 text-base text-xl ${satoshi.className}`}>
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                    ))}
                </div>

                <div className="mt-12 text-center justify-center">
                    <button
                        type="button"
                        className={`h-[52px] px-[32px] py-3 text-xl border border-transparent font-normal rounded-[50px] text-[#ECF6F2] bg-[#1B3233] ${satoshi.className}`}
                    >
                        See all posts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodInsights;
