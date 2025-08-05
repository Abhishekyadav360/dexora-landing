import Header from "./Sections/Header";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Footer from "./Sections/Footer";



import Faq from "./Sections/Faq";


import GetStarted from "./Sections/GetStarted";


import RoadmapSection from "./Sections/Roadmap";


import Features from "./Sections/Features";

import WhyDexora from "./Sections/WhyDexora";
import Tokenomics from "./Sections/Tokenomics";





export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      {/* <Ecosystem /> */}
      {/* <Features /> */}
      <Tokenomics />
      <RoadmapSection />
      <WhyDexora />
      {/* <TechStackSection /> */}
      {/* <Challenge /> */}

      <Faq />
      <GetStarted />

      <Footer />
    </>
  );
}
