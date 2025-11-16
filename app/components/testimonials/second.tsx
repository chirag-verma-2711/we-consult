"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  const subheading = useInView({ threshold: 0.2 });
  const testimonial1 = useInView({ threshold: 0.2 });
  const testimonial2 = useInView({ threshold: 0.2 });
  const testimonial3 = useInView({ threshold: 0.2 });
  const testimonial4 = useInView({ threshold: 0.2 });
  const testimonial5 = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-5 py-10">
            <div>
              <h1 ref={heading.ref}
              className={`fade-up ${heading.isVisible ? "show" : ""} text-3xl font-bold text-[var(--dgreen)] text-center mb-5`}>
                Real Experiences. Real Results.
              </h1>
              <p ref={subheading.ref}
              className={`fade-up ${subheading.isVisible ? "show" : ""} text-xl text-center max-w-[900px] mx-auto`}>
                Each testimonial is a glimpse into the positive impact we
                create. From service quality to timely support, our clients
                share how we’ve helped them achieve real success.
              </p>
            </div>

            <div className="*:mt-10  *:px-14 *:py-10 *:border *:border-[#C8C8C8] *:shadow-[2px_4px_25px_0px_rgba(0,0,0,0.25)]">
              <div ref={testimonial1.ref}
              className={`fade-up ${testimonial1.isVisible ? "show" : ""} bg-[var(--lgreen2)]`}>
                <h3 className=" text-[var(--dgreen)] text-2xl font-medium mb-5">
                  Vinod brings a good mix of strategic thinking and execution
                  focus, and has been a steady contributor to overall
                  performance.
                </h3>
                <p className="text-black mb-8">
                  Thinking and execution focus, and has been a steady
                  contributor to overall performance. I worked with Vinod during
                  his tenure as Regional Head, where he contributed to strong
                  business growth and helped improve team culture and operating
                  discipline. His leadership also led to lower attrition and
                  positive gains in a few challenging markets. Vinod brings a
                  good mix of strategic thinking and execution focus, and has
                  been a steady contributor to overall performance.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/sunil-sethi.png"
                    className="w-[90px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dgreen)]">
                      Sunil Sethi
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Executive Chairman Modenik Lifestyle Pvt Ltd
                    </p>
                  </div>
                </div>
              </div>

              <div ref={testimonial2.ref}
              className={`fade-up ${testimonial2.isVisible ? "show" : ""} bg-white`}>
                <h3 className=" text-[var(--dgreen)] text-2xl font-medium mb-5">
                  His ability to leverage data, technology, and analytics has
                  been instrumental in developing models that provide actionable
                  insights
                </h3>
                <p className="text-black mb-8">
                  Vinod has been a key leader in driving our Go-to-Market (GTM)
                  transformation journey. Over the past few years, he has shaped
                  and executed a well-defined roadmap that has successfully
                  aligned our growth ambitions with operational excellence.
                  <br />
                  <br />
                  His ability to leverage data, technology, and analytics has
                  been instrumental in developing models that provide actionable
                  insights—helping us identify upsell and cross-sell
                  opportunities, enhance revenue productivity, and improve trade
                  performance across markets.
                  <br />
                  <br />
                  Vinod has also led important initiatives around trade
                  optimization and cost efficiency, simplifying channel
                  operations and ensuring better utilization of resources to
                  strengthen ROI.
                  <br />
                  <br />
                  Equally noteworthy is his contribution to our rural growth
                  agenda, where he used spatial mapping and potential estimation
                  to identify new opportunities and guide focused market
                  expansion.
                  <br />
                  <br />
                  Through his data-driven thinking, strong execution, and
                  balanced focus on sustainable growth, Vinod has built a solid
                  foundation that will continue to support our business momentum
                  and market leadership.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Mohan-Goenka.png"
                    className="w-[90px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dgreen)]">
                      Mohan Goenka
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Vice Chairman & Whole Time Director  Emami Ltd.
                    </p>
                  </div>
                </div>
              </div>
              
              <div ref={testimonial3.ref}
              className={`fade-up ${testimonial3.isVisible ? "show" : ""} bg-[var(--lgreen2)]`}>
                <h3 className=" text-[var(--dgreen)] text-2xl font-medium mb-5">
                  Vinod is an outstanding sales and business leader. He has led the transformation of the  India sales route to market with excellence.
                </h3>
                <p className="text-black mb-8">
                  Vinod is an outstanding sales and business leader. He has led the transformation of the India sales  route to market with excellence. He transformed a rural focused sales organization into a high  performing best in class urban sales force. He has a strong understanding of business fundamentals  and P&L management. Under his Sales Leadership, India has become the fastest growing market for  Hershey globally. He played a key role in turning around the Hershey India business. He is mature and  driven, yet humble and treats people with respect they deserve. A highly respected leader in the  Hershey India Organization.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Praveen-Jakate.png"
                    className="w-[90px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dgreen)]">
                      Praveen Jakate
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Chairman and Managing Director - South Asia  Hershey India Pvt Ltd
                    </p>
                  </div>
                </div>
              </div>

              <div ref={testimonial4.ref}
              className={`fade-up ${testimonial4.isVisible ? "show" : ""} bg-white`}>
                <h3 className=" text-[var(--dgreen)] text-2xl font-medium mb-5">
                  Vinod knows the diversity of the Indian markets very well and sets plans and resources  accordingly.
                </h3>
                <p className="text-black mb-8">
                  Vinod is a skilled and veteran sales leader. He is very collaborative in his approach. Vinod knows the  diversity of the Indian markets very well and sets plans and resources accordingly. Through his  leadership with Hershey, he and his team has successfully accomplished numerous new item rollouts  and first to market executions. These have resulted in business growth and profitability, as well  establishing Hershey’s presence in India.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Bill-Brothers.png"
                    className="w-[90px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dgreen)]">
                      Bill Brothers
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Director Global Sales Development (Retired)  The Hershey Company
                    </p>
                  </div>
                </div>
              </div>

              <div ref={testimonial5.ref}
              className={`fade-up ${testimonial5.isVisible ? "show" : ""} bg-[var(--lgreen2)]`}>
                <h3 className=" text-[var(--dgreen)] text-2xl font-medium mb-5">
                  Vinod possesses exceptional analytical capabilities, and his insights have played a  pivotal role in shaping overall business strategy
                </h3>
                <p className="text-black mb-8">
                  I have had the privilege of working with Vinod both as a colleague and as a member of the Sales  Leadership team. During this time, I have witnessed his ability to successfully transition across  diverse roles and make a meaningful impact on the organization’s growth. Vinod possesses  exceptional analytical capabilities, and his insights have played a pivotal role in shaping overall  business strategy. He combines strategic thinking with a strong execution mindset, consistently  driving results. In addition, Vinod demonstrates outstanding people leadership skills, fostering high performing teams and creating an environment that encourages collaboration and accountability.
                </p>
                <div className="w-full flex items-center gap-5">
                  <Image
                    src="/assests/testimonials/Praveen-Jakate.png"
                    className="w-[90px] h-auto rounded-full"
                    width={1000}
                    height={1000}
                    alt=""
                  />

                  <div>
                    <h4 className="text-2xl font-semibold text-[var(--dgreen)]">
                      Ashish Pisharodi
                    </h4>
                    <p className=" text-[var(--dgreen)]">
                      Ex Managing Director – Philippines, Vice President   Mondelez International
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
