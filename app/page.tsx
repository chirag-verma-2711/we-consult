import MainBanner from "./components/homepage/MainBanner";
import ServicesMap from "./components/homepage/ServicesMap";
import ClientList from "./components/homepage/ClientList";
import ProblemSolv from "./components/homepage/ProblemSolv";
import GreatResult from "./components/homepage/GreatResult";
import ScrumPage from "./components/homepage/ScrumPage";
import ConsultationCTA from "./components/homepage/ConsultationCTA";
import GoodInsights from "./components/homepage/GoodInsights";
import "./globals.css";


export default function Home() {
  return (
    <>
    <MainBanner />
    <ServicesMap />
    <ClientList />
    <ProblemSolv />
    <GreatResult />
    <ScrumPage />
    <ConsultationCTA/>
    <GoodInsights/>
    </>
  );
}
