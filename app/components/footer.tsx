"use client";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Footer() {
    return (
        <footer className={`bg-[#05201d] text-gray-300 ${satoshi.className}`}>
            <div className="max-w-7xl mx-auto px-4 pt-20">

                {/* <div className="box-news flex flex-col md:flex-row justify-between items-center bg-[#253c3d] rounded-[10px] gap-6 p-8 border-b border-gray-700">
                    
                    <div>
                        <Image
                            src="/assests/header/images/665d580d007277205ba132e1_LogoLight.svg"
                            alt="We Consult Logo"
                            width={300}
                            height={50}
                            className="h-8"
                        />
                    </div>

                    <div className=" flex w-full md:w-auto items-center bg-[#1B3233] rounded-full overflow-hidden border border-gray-600">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
                        />
                        <button className="ebutton bg-[#cde8d9] text-[#05201d] font-medium px-6 py-2 hover:bg-[#bde0cc] transition">
                            Subscribe
                        </button>
                    </div>
                </div> */}

                <div className="box-news flex flex-col md:flex-row justify-between items-center bg-[#253c3d] rounded-[10px] gap-6 p-8 border-b border-gray-700">
                    {/* Logo */}
                    <div>
                        {/* <Image src="/assests/header/images/665d580d007277205ba132e1_LogoLight.svg" alt="We Consult Logo" width={300} height={50} className="h-8" />
                         */}
                         <h2 className="text-2xl font-semibold text-[var(--lgreen)]">Subscribe to our newsletter!</h2>
                    </div>
                    {/* Newsletter */}
                    <div className="flex flex-col md:flex-row w-full md:w-auto items-center md:bg-[#1B3233] md:rounded-full md:overflow-hidden md:border md:border-gray-600 gap-4">
                        {/* Input */}
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-4 md:px-4 md:py-2 bg-[#1B3233] text-gray-200 placeholder-gray-400 focus:outline-none rounded-[50px] md:rounded-none text-center md:text-left"
                        />

                        {/* Button */}
                        <button className="ebutton bg-[#cde8d9] text-[#05201d] font-medium px-6 py-4 md:px-6 md:py-2 hover:bg-[#bde0cc] transition rounded-[50px] w-full md:w-auto md:rounded-none">
                            Subscribe
                        </button>
                    </div> </div>

                {/* Middle: Left Text + Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                    {/* Left Content */}
                    <div className="flex flex-col items-start">
                        <p className="text-lg mb-6 leading-relaxed text-[#d3f9d8] max-w-md">
                            With life long relationship and support of science <br />
                            we help companies grow in an unimaginable speed
                        </p>
                        <button className="bg-[#cde8d9] text-[#05201d]  px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300">
                            Buy this template – $129
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-[#CEEAD5] ">

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#CEEAD5]">Homepages</h2>
                            <ul className="space-y-3">
                                <li><Link href="#" className="hover:underline">Home A</Link></li>
                                <li><Link href="#" className="hover:underline">Home B</Link></li>
                                <li><Link href="#" className="hover:underline">Home C</Link></li>
                            </ul>
                        </div>

                        {/* About us */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#CEEAD5]">About us</h2>
                            <ul className="space-y-3">
                                <li><Link href="#" className="hover:underline">About A</Link></li>
                                <li><Link href="#" className="hover:underline">About B</Link></li>
                                <li><Link href="#" className="hover:underline">About C</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#CEEAD5]">Contact</h2>
                            <ul className="space-y-3">
                                <li><Link href="#" className="hover:underline">Contact A</Link></li>
                                <li><Link href="#" className="hover:underline">Contact B</Link></li>
                                <li><Link href="#" className="hover:underline">Contact C</Link></li>
                            </ul>
                        </div>

                        {/* Other Pages */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#CEEAD5]">Other pages</h2>
                            <ul className="space-y-3">
                                <li><Link href="#" className="hover:underline">Careers</Link></li>
                                <li><Link href="#" className="hover:underline">Case studies</Link></li>
                                <li><Link href="#" className="hover:underline">Blog</Link></li>
                                <li><Link href="#" className="hover:underline">Pricing</Link></li>
                                <li><Link href="#" className="hover:underline">Legal</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <div className="border-t border-gray-700 py-6 text-sm flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-[#CEEAD5]">
                       Copyright © 2025 Leap Bridge Consulting. All rights reserved.
                    </p>
                    <Link href="#" className="underline hover:text-white mt-3 sm:mt-0">
                        See all templates
                    </Link>
                </div>
            </div>
        </footer>
    );
}
