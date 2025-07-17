import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import StorySection from "../components/home/StorySection";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection coffees={coffees}/>
      <StorySection />
    </div>
  );
};

export default Home;
