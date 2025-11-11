import MainBanner from "./components/homepage/MainBanner";
// import MainBanner_old from "./components/homepage/MainBanner-old";
import ServicesMap from "./components/homepage/ServicesMap";
import ClientList from "./components/homepage/ClientList";
import ProblemSolv from "./components/homepage/ProblemSolv";
import GreatResult from "./components/homepage/GreatResult";
import ScrumPage from "./components/homepage/ScrumPage";
// import ConsultationCTA from "./components/homepage/ConsultationCTA";
import GoodInsights from "./components/homepage/GoodInsights";
import "./globals.css";

export default function Home() {
  return (
    <>
      {/* <MainBanner_old /> */}
      <MainBanner />
      <section className="relative w-full bg-[#daebe3] bg-[url('/assests/header/images/dotted_bg.png')] bg-no-repeat  bg-center bg-[length:77%]">
        <div className="w-full  flex flex-col items-center justify-center bg-[#e8f5f18f]">
          <ServicesMap />
          <ClientList />
        </div>
      </section>
      <ProblemSolv />
      <GreatResult />
      <ScrumPage />
      {/* <ConsultationCTA /> */}
      <GoodInsights />
    </>
  );
}
