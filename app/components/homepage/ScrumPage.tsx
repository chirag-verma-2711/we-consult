"use client";

import useInView from "@/app/hooks/useInView";

export default function ScrumPage() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section className="w-full bg-[var(--lgreen2)] py-16">
      <div className="container mx-auto px-6 text-[#1B3233]">
        <h2
          ref={ref}
          className={`fade-up ${
            isVisible ? "show" : ""
          } text-7xl font-normal text-center mb-8`}
        >
          Let's Talk
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              ref={ref}
              className={`fade-up ${
                isVisible ? "show" : ""
              } bg-[var(--lgreen3)] p-16 rounded-xl`}
            >
              <div className="flex gap-2 mb-12">
                <span className="w-[30px] h-[30px] bg-[var(--dgreen)] rounded-full block"></span>
                <span className="w-[50px] h-[30px] bg-[#455959] rounded-full block"></span>
              </div>

              <h3 className="text-4xl font-medium mb-5">
                Schedule a call with us to see if we can help
              </h3>
              <p>
                Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet
                elit ac nisl. Sed aliquam ultrices.
              </p>

              <div className="h-[1px]  bg-[#1b32334d] my-10"></div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+91-91670 63112"
                  className="flex items-center gap-3 text-lg"
                >
                  <img
                    src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                    loading="lazy"
                    alt=""
                    className=""
                  />
                  <div>+91-91670 63112</div>
                </a>
                <a
                  href="tel:+91 97691 00915"
                  className="flex items-center gap-3 text-lg"
                >
                  <img
                    src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13312_phone.svg"
                    loading="lazy"
                    alt=""
                    className=""
                  />
                  <div>+91 97691 00915</div>
                </a>
                <a
                  href="mailto:connect@leapbridgeconsulting.com"
                  className="flex items-center gap-3 text-lg"
                >
                  <img
                    src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13313_send-mail.svg"
                    loading="lazy"
                    alt=""
                    className=""
                  />
                  <div>connect@leapbridgeconsulting.com</div>
                </a>
                {/* <a href="#" className="flex items-center gap-3">
                  <img
                    src="https://cdn.prod.website-files.com/665d580d007277205ba1329a/665d580d007277205ba13311_pin-alt.svg"
                    loading="lazy"
                    alt=""
                    className="icon-contact-list"
                  />
                  <div>Califronia, Santa Monica</div>
                </a> */}
              </div>
            </div>
            <div className="p-4">
              <div className="p-5">
                <h3
                  ref={ref}
                  className={`fade-up ${
                    isVisible ? "show" : ""
                  } text-[23px] font-medium max-w-[370px] mx-auto text-center px-3`}
                >
                  Fill in the form and we will get back to you within 24h
                </h3>
                <form
                  ref={ref}
                  className={`fade-up ${
                    isVisible ? "show" : ""
                  } space-y-2 max-w-sm p-7 mx-auto`}
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

                  {/* ✅ Checkbox Area */}
                  <label className="flex items-center  gap-3 text-[#1B3233] text-sm ms-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#1B3233]"
                      required
                    />
                    <span>I agree to the Terms & Privacy Policy</span>
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

        {/* <div className="border-t border-[#1B3233] py-6 flex gap-4">
          <div className="w-full max-w-[100px] flex">
            <Image
              src="/assests/header/scrumpage-logos/1c_group.svg"
              alt="Management Icon"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-lg text-[26px] font-normal leading-[120%] mb-2">
              Management
            </h3>
            <p className="text-sm text-[20px] leading-relaxed">
              Praesent venenatis metus at tortor pulvinar varius. Pellentesque
              posuere. Mauris turpis nunc, blandit et, volutpat molestie.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1B3233] py-6 flex gap-4">
          <div className="w-full max-w-[100px] flex">
            <Image
              src="/assests/header/scrumpage-logos/2132ea_energy-usage-window.svg"
              alt="Digital Icon"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-lg text-[26px] font-normal leading-[120%] mb-2">
              Digital
            </h3>
            <p className="text-sm text-[20px]  leading-relaxed">
              Praesent venenatis metus at tortor pulvinar varius. Pellentesque
              posuere. Mauris turpis nunc, blandit et, volutpat molestie.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1B3233] py-6 flex gap-4">
          <div className="w-full max-w-[100px] flex">
            <Image
              src="/assests/header/scrumpage-logos/13305_design-nib.svg"
              alt="Design Icon"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-lg text-[26px] font-normal leading-[120%] mb-2">
              Design
            </h3>
            <p className="text-sm text-[20px] leading-relaxed">
              Praesent venenatis metus at tortor pulvinar varius. Pellentesque
              posuere. Mauris turpis nunc, blandit et, volutpat molestie.
            </p>
          </div>
        </div>

        <div className="border-t  py-6 flex gap-4">
          <div className="w-full max-w-[100px] flex">
            <Image
              src="/assests/header/scrumpage-logos/4agile.svg"
              alt="SCRUM Icon"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-lg text-[26px] font-normal leading-[120%] mb-2">
              SCRUM
            </h3>
            <p className="text-sm text-[20px]  leading-relaxed">
              Praesent venenatis metus at tortor pulvinar varius. Pellentesque
              posuere. Mauris turpis nunc, blandit et, volutpat molestie.
            </p>
          </div>
        </div> */}

        {/* <div className="text-center h-13 px-8 mt-10">
          <button className="bg-[#1B3233] text-[#ECF6F2] text-xl px-6 py-2 rounded-full  transition">
            Contact us
          </button>
        </div> */}
      </div>
    </section>
  );
}
