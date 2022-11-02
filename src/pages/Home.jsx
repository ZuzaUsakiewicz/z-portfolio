import HomeAboutSection from "../components/HomeAboutSection";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeNoteSection from "../components/HomeNoteSection";
import HomeProjectsSection from "../components/HomeProjectsSection";
import HomeStackSection from "../components/HomeStackSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeStackSection />
      <HomeProjectsSection />
      <HomeAboutSection />
      <HomeNoteSection />
    </>
  );
};

export default Home;
