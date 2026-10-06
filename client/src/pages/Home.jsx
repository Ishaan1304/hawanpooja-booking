import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
import TempleIntro from "../components/TempleIntro";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import OnlineHawan from "../components/OnlineHawan";
import HawanPackages from "../components/HawanPackages";



function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <TempleIntro />
      <HawanPackages />
      <StatsSection />

      <OnlineHawan />

      <TestimonialsSection />     
    </>
  );
}

export default Home;