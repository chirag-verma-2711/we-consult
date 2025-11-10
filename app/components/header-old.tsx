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
    <header
      className={`sticky top-0 z-50 bg-lgreen border-b border-gray-700 ${satoshi.className}`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1600px] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="\assests\header\images\665d580d007277205ba132e1_LogoLight.svg"
              alt="Logo"
              width={250}
              height={32}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12 text-[20px]  text-[#CEEAD5]">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Career</Link>

          {/* Case Studies Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
              className="flex items-center gap-x-1"
            >
              Case Studies
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="size-5 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06 0L10 
                  10.92l3.72-3.71a.75.75 0 1 1 
                  1.06 1.06l-4.25 
                  4.25a.75.75 0 0 1-1.06 
                  0L5.23 8.27a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {caseStudiesOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-lgreen shadow-lg ring-1 ring-white/10">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Case Study 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Case Study 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Case Study 3
                </Link>
              </div>
            )}
          </div>

          <Link href="#">Contact Us</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-lgreen p-6">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                src="\assests\header\images\665d580d007277205ba132e1_LogoLight.svg"
                alt="Logo"
                width={200}
                height={100}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <Link
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              About
            </Link>
            <Link
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              Career
            </Link>

            {/* Mobile Case Studies Dropdown */}
            <button
              onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              Case Studies
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 
                  0L10 11.94l3.72-3.72a.75.75 
                  0 1 1 1.06 1.06l-4.25 
                  4.25a.75.75 0 0 1-1.06 
                  0L5.22 9.28a.75.75 
                  0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {caseStudiesOpen && (
              <div className="ml-4 space-y-2">
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
                >
                  Case Study 1
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
                >
                  Case Study 2
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5"
                >
                  Case Study 3
                </Link>
              </div>
            )}

            <Link
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
