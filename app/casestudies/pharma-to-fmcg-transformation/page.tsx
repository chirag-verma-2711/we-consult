import "@/app/globals.css";
import Banner from "@/app/components/casestudies/banner";
import Second from "@/app/components/casestudies/second";
import Third from "@/app/components/casestudies/third";
import Fourth from "@/app/components/casestudies/fourth";
import Fifth from "@/app/components/casestudies/fifth";
import Last from "@/app/components/casestudies/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function CaseStudies() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <div className="container border-1 border-b-black border-dashed mx-auto"></div>
      <Last />
      {/* <Parallax />
      <ScrumPage /> */}
    </>
  );
}
