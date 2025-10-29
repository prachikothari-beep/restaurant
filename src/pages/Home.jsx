import HomeNavbar from "../components/HomeNavbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FeaturedDishes from "../components/FeaturedDishes";
import AboutSection from "../components/AboutSection";
import HomeFooter from "../components/HomeFooter";

const Home = () => (
  <div>
    <HomeNavbar />
    <HeroSection />
    <FeaturesSection />
    <FeaturedDishes />
    <AboutSection />
    <HomeFooter />
  </div>
);

export default Home;