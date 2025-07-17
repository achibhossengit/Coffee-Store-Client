import heroImg from "../../assets/more/3.png";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="grid md:grid-cols-7 bg-cover bg-center h-[400px] md:h-[700px]"
    >
      {/* empty div */}
      <div className="hidden md:flex col-span-3"></div>
      {/* text container */}
      <div className="text-white flex col-span-4 text-center md:text-start md:items-center h-full w-full">
        <div className="pt-5 md:pt-0 max-w-[650px] space-y-4">
          <h1 className="text-5xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-secondary text-gray-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
