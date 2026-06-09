import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">
          Welcome To HawanPooja Booking
        </h2>
      </section>
    </>
  );
}

export default Home;