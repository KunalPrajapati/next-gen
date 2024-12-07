import HeroSection from "../components/Home/HeroSection";
import "../components/Home/Home.css";
import ServiceSection from "../components/Home/ServiceSection/ServiceSection";

const Home = () => {
  return (
    <>
      <div className="home-page flex flex-col w-full">
        <HeroSection />
        <ServiceSection />
      </div>
    </>
  )
}

export default Home