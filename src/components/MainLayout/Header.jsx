import logo from "../../assets/more/logo1.png";
import headerBg from "../../assets/more/15.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${headerBg})` }}
      className="bg-[size:contain] bg-center flex justify-center items-center gap-2 h-20"
    >
      <img className="w-14" src={logo} alt="logo" />
      <h1 className="text-3xl sm:text-5xl text-white">Expresso Emporium</h1>
    </div>
  );
};

export default Header;