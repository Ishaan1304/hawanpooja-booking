import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import FloatingSocials from "../components/FloatingSocials";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main >
        <Outlet />
      </main>

      <FloatingSocials />
      <Footer/>
      <ScrollToTopButton />

    </>
  );
}

export default MainLayout;