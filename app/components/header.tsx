"use client";
import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";
import AppointmentButton from "./AppointmentButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    closeMenu(); // close menu if on mobile
  };
  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close mobile menu on link click
  const closeMenu = () => setMenuOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date().toISOString().split("T")[0]; // disable past dates
  const [minTime, setMinTime] = useState("");
  // useEffect(() => {
  //   const today = new Date();
  //   const formatted = today.toISOString().split("T")[0];
  //   setMinDate(formatted);
  // }, []);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const now = new Date();
    if (selectedDate === now.toISOString().split("T")[0]) {
      setMinTime(now.toTimeString().slice(0, 5));
    } else {
      setMinTime("");
    }
  };

  return (
    <header className={`sticky top-0 z-50 ${satoshi.className}`}>
      <nav className="bg-[var(--dgreen)] border-b border-gray-700 relative">
        {/* <div className="max-w-7xl mx-auto md:px-[24px] px-[12px]"> */}
        <div className="container mx-auto px-4 sm:px-5">
          <div className="flex justify-between items-center h-[82px]">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              <img
                src="/assests/header/images/leapbridgelogo.svg"
                alt="Logo"
                width={500}
                height={100}
                className="h-[50px] w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-end flex-1">
              {/* Home */}
              <div className="relative group">
                <Link href="/" onClick={() => handleLinkClick("/")}>
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "/"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    Home
                  </div>
                </Link>
              </div>

              {/* About Us */}
              <div className="relative group">
                <Link href="/about" onClick={() => handleLinkClick("#about")}>
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "#about"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    About Us
                  </div>
                </Link>
              </div>

              {/* Category Experience */}
              <div className="relative group">
                <Link
                  href="#category"
                  onClick={() => handleLinkClick("#category")}
                >
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "#category"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    Category Experience
                  </div>
                </Link>
              </div>

              {/* Category Experience */}
              <div className="relative group">
                <Link
                  href="#category"
                  onClick={() => handleLinkClick("#category")}
                >
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "#category"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    Industries
                  </div>
                </Link>
              </div>



              {/* Services */}
              <div className="relative group">
                <Link
                  href="#service"
                  onClick={() => handleLinkClick("#casestudies")}
                >
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "#service"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    Case Studies
                  </div>
                </Link>
              </div>

              {/* Contact Us */}
              <div className="relative group">
                <Link
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                >
                  <div
                    className={`text-lg p-3 flex items-center ${activeLink === "#contact"
                      ? "text-[#53FFA9]"
                      : "text-[var(--lgreen)]"
                      }`}
                  >
                    Contact Us
                  </div>
                </Link>
              </div>

              {/* Schedule Appointment Button */}
              <AppointmentButton />
              {/* <div
                className="flex justify-center items-center ml-3"
                onClick={() => setIsOpen(true)}
              >
                <div className="flex items-center justify-center gap-2 bg-[#3BB273] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#34a266] hover:shadow-lg transition-all duration-300">
                  <span className="font-medium text-sm sm:text-base">
                    Schedule Appointment
                  </span>
                </div>
              </div> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div
                onClick={toggleMenu}
                className={`flex flex-col justify-center items-center gap-[6px] h-[47px] w-[47px] rounded-full transition-colors duration-300 ${menuOpen ? "bg-[var(--lgreen)]" : "bg-[#ceead51a]"
                  }`}
              >
                <div
                  className={`h-[2px] transition-all duration-300 ${menuOpen ? "w-[20px] bg-[#000]" : "w-[30px] bg-[#ceead5]"
                    }`}
                ></div>
                <div
                  className={`h-[2px] transition-all duration-300 ${menuOpen ? "w-[30px] bg-[#000]" : "w-[20px] bg-[#ceead5]"
                    }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden py-[25px] px-[45px] space-y-2 absolute bg-[var(--dgreen)] w-full top-[82px] max-h-[calc(100vh-82px)] overflow-y-auto transition-all duration-300 ${menuOpen ? "block" : "hidden"
            }`}
        >
          {/* Home */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="#" onClick={closeMenu}>
                Home
              </Link>
            </summary>
          </details>

          {/* About */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="#about" onClick={closeMenu}>
                About us
              </Link>
            </summary>
          </details>

          {/* Industries */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="#category" onClick={closeMenu}>
                Category Experience
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="#Industries" onClick={closeMenu}>
                Industries
              </Link>
            </summary>
          </details>

          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="#service" onClick={closeMenu}>
                Case Studies
              </Link>
            </summary>
          </details>

          {/* Contact Us */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary
              className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg"
              onClick={closeMenu}
            >
              <Link href="#contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </summary>
          </details>

          {/* Schedule Appointment */}
          <AppointmentButton />
          {/* <div
            className="mt-4 flex justify-center items-center h-11 sm:h-12 px-4 sm:px-5 text-base sm:text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]"
            onClick={() => setIsOpen(true)}
          >
            Schedule Appointment
          </div> */}
        </div>
        {isOpen && (
          <div
            className="
            fixed inset-0
            bg-[#00000040]
            backdrop-blur-md
            flex justify-center items-center
            z-50
          "
          >
            {/* Modal Box */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative border border-white/40">
              {/* Close Button */}
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-[#356E54] mb-4 text-center">
                Contact Us
              </h2>

              {/* Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    mobile: formData.get("mobile"),
                    company: formData.get("company"),
                    date: formData.get("date"),
                    time: formData.get("time"),
                    agree: formData.get("agree"),
                  };

                  if (!data.agree) {
                    alert("You must agree to the Terms and Conditions.");
                    return;
                  }

                  const response = await fetch("/api/sendAppointmentEmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  console.log("test", response);
                  if (response.ok) {
                    alert("Appointment submitted successfully!");
                    setIsOpen(false);
                  } else {
                    alert("Failed to submit. Please try again.");
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Name"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Email"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Mobile"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    placeholder="Your Company"
                  />
                </div>

                {/* Date and Time */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Appointment
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={today}
                      onChange={handleDateChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Time of Appointment
                    </label>
                    <input
                      type="time"
                      name="time"
                      min={minTime}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#356E54]"
                    />
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    required
                    className="h-4 w-4 text-[#356E54] border-gray-300 rounded focus:ring-[#356E54]"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#356E54] underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#356E54] text-white py-2 rounded-md hover:bg-[#2d5946] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
