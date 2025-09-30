
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

    // height: 800px;
    // width: 800px;
    // border-radius: 50%;
    // position: absolute;
    // top: 0%;
    // left: 0;
    // transform: translate(-50%, -50%);
    // background-color: #1b3233;
export default function ConsultationSection() {
    return (
        <section className="bg-[#DAEBE3] py-16 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 xl:w-[1400px] xl:h-[1400px] lg:w-[1100px] lg:h-[1100px]  md:w-[800px] md:h-[800px] w-[800px] h-[800px] rounded-full bg-[#1b3233]"></div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-32">

                <div className="relative flex justify-center md:justify-end">
                        <Image
                            src="/assests/header/scrumpage-logos/CTA Three.webp"
                            alt="Consultation"
                            width={500}
                            height={600}
                            className="rounded-lg shadow-lg w-full h-full"
                        />
                </div>

                <div className="text-center md:text-left">
                    <h2 className={`text-[40px] md:text-3xl font-thin text-[#1B3233] mb-4 ${zodiak.className}`}>
                        Book your free consultation today!
                    </h2>
                    <p className={`text-[20px] text-[#1B3233] mb-6 ${satoshi.className}`}>
                        Pellentesque ut neque. Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Sed mollis, eros et ultrices tempus.
                    </p>
                    <button className={`px-6 py-2 bg-[#1B3233] text-[20px] text-[#ECF6F2] rounded-full hover:bg-[#1e4741] transition ${satoshi.className}`}>
                        Contact sales
                    </button>
                </div>
            </div>
        </section>



    );
}
