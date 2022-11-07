import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ButtonScrollToTop, Container } from "../theme/components";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { BiUpArrowAlt } from "react-icons/bi";

function Root() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });
  return (
    <ScrollToTop>
      <Container>
        <Navbar />
        <Outlet />
        <footer> Made with 💙 by Zuza in 2022</footer>
      </Container>
      <ButtonScrollToTop
        showButton={showButton}
        onClick={() => window.scrollTo(0, 0)}
      >
        <BiUpArrowAlt />
      </ButtonScrollToTop>
    </ScrollToTop>
  );
}

export default Root;
