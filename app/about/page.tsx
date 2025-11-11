import "../globals.css";
import Banner from "../components/about/banner";
import Second from "../components/about/second";
import Third from "../components/about/third";
import Fourth from "../components/about/fourth";

export default function About() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <div className="p-5 bg-white"></div>
    </>
  );
}
