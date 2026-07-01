import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main >
        <Outlet />
      </main>

      <Footer/>
      <ScrollToTopButton />

    </>
  );
}

export default MainLayout;