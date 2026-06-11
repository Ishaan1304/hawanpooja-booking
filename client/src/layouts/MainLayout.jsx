import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer/>
      <ScrollToTopButton />

    </>
  );
}

export default MainLayout;