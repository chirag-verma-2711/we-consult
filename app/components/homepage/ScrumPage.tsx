"use client";

import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function ScrumPage() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section className="w-full bg-[var(--lgreen2)] py-16">
      <div className="container mx-auto px-6 text-[#1B3233]">
        {/* Title */}
        <h2
          ref={ref}
          className={`fade-up ${isVisible ? "show" : ""} text-7xl font-normal text-center mb-8`}
        >
          Let&apos;s Talk
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div
            className={`fade-up ${isVisible ? "show" : ""} bg-[var(--lgreen3)] p-16 rounded-xl`}
          >
            <div className="flex gap-2 mb-12">
              <span className="w-[30px] h-[30px] bg-[var(--dgreen)] rounded-full block" />
              <span className="w-[50px] h-[30px] bg-[#455959] rounded-full block" />
            </div>

            <h3 className="text-4xl font-medium mb-5">
              Schedule a call with us to see if we can help
            </h3>
            <p>
              Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit
              ac nisl. Sed aliquam ultrices.
            </p>

            <div className="h-[1px] bg-[#1b32334d] my-10" />

            <div className="flex flex-col gap-4">
              {[
                {
                  href: "tel:+91-91670 63112",
                  text: "+91-91670 63112",
                  icon: "665d580d007277205ba13312_phone.svg",
                },
                {
                  href: "tel:+91 97691 00915",
                  text: "+91 97691 00915",
                  icon: "665d580d007277205ba13312_phone.svg",
                },
                {
                  href: "mailto:connect@leapbridgeconsulting.com",
                  text: "connect@leapbridgeconsulting.com",
                  icon: "665d580d007277205ba13313_send-mail.svg",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 text-lg"
                >
                  <Image
                    src={`https://cdn.prod.website-files.com/665d580d007277205ba1329a/${item.icon}`}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <div>{item.text}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="p-4">
            <div className="p-5">
              <h3
                className={`fade-up ${isVisible ? "show" : ""} text-[23px] font-medium max-w-[370px] mx-auto text-center px-3`}
              >
                Fill in the form and we will get back to you within 24h
              </h3>

              <form
                onSubmit={(e) => e.preventDefault()}
                className={`fade-up ${isVisible ? "show" : ""} space-y-2 max-w-sm p-7 mx-auto`}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
                />
                <input
                  type="text"
                  placeholder="Phone (optional)"
                  className="w-full rounded-full border border-[#1B3233]/20 bg-[var(--lgreen3)] mb-2 px-5 py-3 text-[#1B3233] focus:outline-none focus:border-[#1B3233]"
                />

                <label className="flex items-center gap-3 text-[#1B3233] text-sm ms-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#1B3233]"
                    required
                  />
                  <span>I agree to the Terms &amp; Privacy Policy</span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--dgreen)] text-white text-lg py-3 mt-2 hover:opacity-90 transition ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
