import { Outlet } from "react-router-dom";
import { Container } from "../theme/components";
import Navbar from "../components/Navbar";

function Root() {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <footer> Made with 💙 by Zuza in 2022</footer>
    </Container>
  );
}

export default Root;
