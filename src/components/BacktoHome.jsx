import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const BacktoHome = () => {
  return (
    <div className="my-10">
      <Link className="flex items-center gap-2 text-xl font-bold text-primary" to={"/"}>
        <FaArrowLeftLong /> Back to home
      </Link>
    </div>
  );
};

export default BacktoHome;
