import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ButtonScrollToTop, Container } from "../theme/components";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { BiUpArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";

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
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Made with 💙 by Zuza in 2022
        </motion.footer>
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
