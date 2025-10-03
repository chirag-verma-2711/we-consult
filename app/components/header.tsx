
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);

  return (
    // <header
    //   className={`sticky top-0 z-50 bg-[var(--dgreen)] border-b border-gray-700 ${satoshi.className}`}
    // >
    //   <nav aria-label="Global" className="mx-auto flex max-w-[1600px] items-center justify-between md:px-[24px] px-[12px] min-h-[82px]">
    //     <div className="flex lg:flex-1">
    //       <Link href="#">
    //         <span className="sr-only">Your Company</span>
    //         <Image
    //           src="\assests\header\images\665d580d007277205ba132e1_LogoLight.svg"
    //           alt="Logo"
    //           width={250}
    //           height={32}
    //           className="h-[20px] w-auto"
    //         />
    //       </Link>
    //     </div>

    //     {/* Mobile menu button */}
    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         onClick={() => setMobileMenuOpen(true)}
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="1.5"
    //           aria-hidden="true"
    //           className="size-6"
    //         >
    //           <path
    //             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Desktop Menu */}
    //     <div className="hidden lg:flex lg:gap-x-12 text-[20px]  text-[#CEEAD5]">
    //       <Link href="#">Homepages</Link>
    //       <Link href="#">About</Link>
    //       <Link href="#">Other</Link>
    //       <Link href="#">Template</Link>

    //       {/* Case Studies Dropdown */}
    //       <div className="relative">
    //         <button
    //           onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
    //           className="flex items-center gap-x-1"
    //         >
    //           Case Studies
    //           <svg
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //             className="size-5 text-gray-500"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.23 7.21a.75.75 0 0 1 1.06 0L10 
    //               10.92l3.72-3.71a.75.75 0 1 1 
    //               1.06 1.06l-4.25 
    //               4.25a.75.75 0 0 1-1.06 
    //               0L5.23 8.27a.75.75 0 0 1 0-1.06Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         {caseStudiesOpen && (
    //           <div className="absolute left-0 mt-0 w-48 rounded-md bg-lgreen shadow-lg ring-1 ring-white/10">
    //             <Link
    //               href="#"
    //               className="block px-4 py-2 text-sm text-white hover:bg-white/10"
    //             >
    //               Case Study 1
    //             </Link>
    //             <Link
    //               href="#"
    //               className="block px-4 py-2 text-sm text-white hover:bg-white/10"
    //             >
    //               Case Study 2
    //             </Link>
    //             <Link
    //               href="#"
    //               className="block px-4 py-2 text-sm text-white hover:bg-white/10"
    //             >
    //               Case Study 3
    //             </Link>
    //           </div>
    //         )}
    //       </div>

    //       <Link href="#">Contact Us</Link>
    //     </div>
    //   </nav>

    //   {/* Mobile Menu */}
    //   {mobileMenuOpen && (
    //     <div className="lg:hidden fixed inset-0 z-50 bg-lgreen p-6">
    //       <div className="flex items-center justify-between">
    //         <Link href="#" className="-m-1.5 p-1.5">
    //           <Image
    //             src="\assests\header\images\665d580d007277205ba132e1_LogoLight.svg"
    //             alt="Logo"
    //             width={200}
    //             height={100}
    //           />
    //         </Link>
    //         <button
    //           type="button"
    //           onClick={() => setMobileMenuOpen(false)}
    //           className="-m-2.5 rounded-md p-2.5 text-gray-400"
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <svg
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             aria-hidden="true"
    //             className="size-6"
    //           >
    //             <path
    //               d="M6 18 18 6M6 6l12 12"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       <div className="mt-6 space-y-2">
    //         <Link
    //           href="#"
    //           className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           href="#"
    //           className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    //         >
    //           About
    //         </Link>
    //         <Link
    //           href="#"
    //           className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    //         >
    //           Career
    //         </Link>

    //         {/* Mobile Case Studies Dropdown */}
    //         <button
    //           onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
    //           className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    //         >
    //           Case Studies
    //           <svg
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //             className="size-5"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.22 8.22a.75.75 0 0 1 1.06 
    //               0L10 11.94l3.72-3.72a.75.75 
    //               0 1 1 1.06 1.06l-4.25 
    //               4.25a.75.75 0 0 1-1.06 
    //               0L5.22 9.28a.75.75 
    //               0 0 1 0-1.06Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         {caseStudiesOpen && (
    //           <div className="ml-4 space-y-2">
    //             <Link
    //               href="#"
    //               className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
    //             >
    //               Case Study 1
    //             </Link>
    //             <Link
    //               href="#"
    //               className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
    //             >
    //               Case Study 2
    //             </Link>
    //             <Link
    //               href="#"
    //               className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
    //             >
    //               Case Study 3
    //             </Link>
    //           </div>
    //         )}

    //         <Link
    //           href="#"
    //           className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
    //         >
    //           Contact Us
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </header>
    <header className="sticky top-0 z-50 ">
      <nav className="bg-[var(--dgreen)] border-b border-gray-700">
        {/* mx-auto flex max-w-[1600px] items-center justify-between min-h-[82px] */}
        <div className="max-w-[1600px] mx-auto  md:px-[24px] px-[12px]">
          <div className="flex justify-between items-center h-[82px]">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src="\assests\header\images\665d580d007277205ba132e1_LogoLight.svg"
                alt="Logo"
                width={250}
                height={32}
                className="h-[20px] w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              {/* <Link href="/" className="text-[var(--lgreen)] text-lg px-5 py-4">
                Homepages
              </Link>
              <Link href="/about" className="text-[var(--lgreen)] text-lg px-5 py-4">
                About
              </Link> */}

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Homepages
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-40 bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Home A
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Home B
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Home C
                  </Link>
                </div>
              </div>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  About
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-40 bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About A
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About B
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About C
                  </Link>
                </div>
              </div>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Other
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-40 bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Other A
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Other B
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Other C
                  </Link>
                </div>
              </div>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Template
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-40 bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Template A
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Template B
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Template C
                  </Link>
                </div>
              </div>
              

              {/* <Link href="/contact" className="text-[var(--lgreen)] text-lg px-5 py-4">
                Template
              </Link> */}
              <Link href="#" target="_blank" className="flex justify-center items-center h-11 px-5 text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]">Buy Template - $129</Link>
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                className="flex flex-col justify-center items-center gap-[6px] bg-[#ceead51a] h-[47px] w-[47px] rounded-full"
                onClick={(e) => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");

                  // toggle button background
                  e.currentTarget.classList.toggle("bg-[var(--lgreen)]");

                  // get the two inner divs
                  const [line1, line2] = e.currentTarget.children;

                  // toggle first line
                  line1.classList.toggle("bg-[#000]");
                  line1.classList.toggle("bg-[#ceead5]");
                  line1.classList.toggle("w-[20px]");
                  line1.classList.toggle("w-[30px]");

                  // toggle second line
                  line2.classList.toggle("bg-[#000]");
                  line2.classList.toggle("bg-[#ceead5]");
                  line2.classList.toggle("w-[30px]");
                  line2.classList.toggle("w-[20px]");
                }}
              >
                <div className="bg-[#ceead5] w-[30px] h-[2px]"></div>
                <div className="bg-[#ceead5] w-[20px] h-[2px]"></div>
              </button>

            </div>
          </div>
        </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden py-[25px] px-[45px] space-y-2 absolute bg-[var(--dgreen)] w-full">
            {/* Dropdown - Homepages */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Homepages
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">
                  Home A
                </Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">
                  Home B
                </Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">
                  Home C
                </Link>
              </div>
            </details>

            {/* Dropdown - About */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                About
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">About A</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">About B</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">About C</Link>
              </div>
            </details>

            {/* Dropdown - Other */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Other
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">Other A</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">Other B</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Other C</Link>
              </div>
            </details>

            {/* Dropdown - Template */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Template
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">Template A</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">Template B</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Template C</Link>
              </div>
            </details>

            {/* Button at the bottom */}
            <Link
              href="#"
              target="_blank"
              className="mt-[16px] flex justify-center items-center h-11 px-5 text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]"
            >
              Buy Template - $129
            </Link>
          </div>


      </nav>
    </header>
    
  );
}
