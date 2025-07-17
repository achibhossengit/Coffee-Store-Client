import story1 from "../../assets/cups/Rectangle 9.png";
import story2 from "../../assets/cups/Rectangle 10.png";
import story3 from "../../assets/cups/Rectangle 11.png";
import story4 from "../../assets/cups/Rectangle 12.png";
import story5 from "../../assets/cups/Rectangle 13.png";
import story6 from "../../assets/cups/Rectangle 14.png";
import story7 from "../../assets/cups/Rectangle 15.png";
import story8 from "../../assets/cups/Rectangle 16.png";
import { FaCoffee } from "react-icons/fa";

const stories = [
  { image: story1, alt: "" },
  { image: story2, alt: "" },
  { image: story3, alt: "" },
  { image: story4, alt: "" },
  { image: story5, alt: "" },
  { image: story6, alt: "" },
  { image: story7, alt: "" },
  { image: story8, alt: "" },
];

const StorySection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="text-center space-y-2">
        <p className="text-xs">Follow Us Now</p>
        <h2 className="text-4xl font-bold">Follow on Instagram</h2>
      </div>

      {/* story container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-10">
        {stories.map((story, index) => (
            <div key={index} className="flex justify-center">
                <img src={story.image} alt={story.alt} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default StorySection;
