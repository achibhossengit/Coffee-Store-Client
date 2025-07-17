import React from "react";
import featureIcon1 from "../../assets/icons/1.png";
import featureIcon2 from "../../assets/icons/2.png";
import featureIcon3 from "../../assets/icons/3.png";
import featureIcon4 from "../../assets/icons/4.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: featureIcon1,
      title: "Awesome Aroma",
      des: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      icon: featureIcon2,
      title: "High Quality",
      des: "We served the coffee to you maintaining the best quality",
    },
    {
      icon: featureIcon3,
      title: "Pure Grades",
      des: "The coffee is made of the green coffee beans which you will love",
    },
    {
      icon: featureIcon4,
      title: "Proper Roasting",
      des: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="bg-base-300">
      <div className="flex justify-around flex-wrap max-w-7xl mx-auto py-8 gap-5">
        {features.map((feature, index) => (
          <div key={index} className="max-w-[200px]">
            <img src={feature.icon} alt="" />
            <h3 className="text-2xl text-primary font-medium">
              {feature.title}
            </h3>
            <p>{feature.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
