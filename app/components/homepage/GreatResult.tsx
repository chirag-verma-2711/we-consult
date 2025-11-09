import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";
import Image from "next/image";

export default function GreatResult() {
  return (
    <section className="w-full bg-[#1b3233] text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="p-10">
          <Image
            src="\assests\header\logoimage\results_ComboTwo.svg"
            alt="Consulting Illustration"
            width={100}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:ps-16 md:text-start text-center">
          <h2
            className="text-[35px] font-normal leading-snug mb-4"
          >
            We don’t just advise, we co-create, build
            capability, and stay accountable for outcomes.
          </h2>
          <p
            className="text-[20px] font-medium text-gray-300 mb-8"
          >
            Praesent ac massa at ligula laoreet iaculis. Vivamus <br />
            aliquet elit ac nisl. Sed aliquam ultrices.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:justify-start justify-center">
            <div className="bg-[#ecf6f2] text-[#0b2c2e] min-w-[150px] px-8 py-6 rounded-md text-center shadow-md animate-fadeUp">
              <h3 className="text-2xl font-bold">2019</h3>
              <p className="text-sm">Founding year</p>
            </div>

            <div className="bg-[#ecf6f2] text-[#0b2c2e] min-w-[150px] px-8 py-6 rounded-md text-center shadow-md">
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm">specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
