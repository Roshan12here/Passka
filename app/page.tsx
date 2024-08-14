import Hero from "./components/Hero";
import OurToken from "./components/TokenStaructure";
import OurPartners from "./components/OurPartners";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Description";
import Cards from "./components/CustomCards";
import Tokenomics from "./components/TokenomicsLayout";
import RoadmapComponent from "./components/RoadMap";
import Features from "./components/OurFeatures";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <main>
  <Navbar/>
  <Hero/>
  <OurToken/>
  <OurPartners/>
  <LandingPage/>
  <Cards/>
  <Tokenomics/>
  <RoadmapComponent/>
  <Features/>
  <Footer/>
 </main>
  );
}
