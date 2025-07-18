import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import StorySection from "../components/home/StorySection";
import { useState } from "react";

const Home = () => {
  const initCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initCoffees);
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection coffees={coffees} setCoffees={setCoffees} />
      <StorySection />
    </div>
  );
};

export default Home;
