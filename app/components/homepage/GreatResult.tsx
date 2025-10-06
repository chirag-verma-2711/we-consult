import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";
import Image from "next/image";

export default function GreatResult() {
    return (
        <section className="w-full bg-[#1b3233] text-white py-16">
            <div className="max-w-[1400px] mx-auto md:px-[24px] px-[16px] grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">

                <div className="">
                    <Image
                        src="\assests\header\logoimage\results_ComboTwo.svg"
                        alt="Consulting Illustration"
                        width={100}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="md:pl-[70px] md:text-start text-center max-w-[520px]">
                    <h2 className={`md:text-[40px] text-[32px] font-thin leading-snug mb-4 ${zodiak.className}`}>
                        Not only consulting, not only great results
                    </h2>
                    <p className={`text-[20px] font-medium text-gray-300 mb-8 ${satoshi.className}`}>
                        Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Sed aliquam ultrices.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-6 md:justify-start justify-center">
                        {/* <div className="bg-[#ecf6f2] text-[#0b2c2e] min-w-[150px] px-8 py-6 rounded-md text-center shadow-md animate-fadeUp">
                            <h3 className={`text-2xl font-bold ${zodiak.className}`}>
                                2019
                            </h3>
                            <p className={`text-sm ${satoshi.className}`}>
                                Founding year
                            </p>
                        </div> */}
                        <div className="flex flex-col justify-center items-center gap-3 bg-[var(--lgreen2)] text-[var(--dgreen)] rounded-lg min-w-[212px] px-8 py-[26px] animate-fadeUp">
                            <h3 className={`text-[38px] leading-[110%] ${zodiak.className}`}>
                                2019
                            </h3>
                            <p className={`text-[20px] leading-[135%] ${satoshi.className}`}>
                                Founding year
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 bg-[var(--lgreen2)] text-[var(--dgreen)] rounded-lg min-w-[212px] px-8 py-[26px] animate-fadeUp">
                            <h3 className={`text-[38px] leading-[110%] ${zodiak.className}`}>
                                100+
                            </h3>
                            <p className={`text-[20px] leading-[135%] ${satoshi.className}`}>
                                specialists
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

