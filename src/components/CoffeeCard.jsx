import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, handleCoffeeDelete }) => {
  const { _id, name, quantity, taste, photo, price } = coffee;

  return (
    <div className="bg-base-200 rounded-xl shadow-md my-4 p-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <div className="w-1/3">
          <img
            src={photo}
            alt={name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Info + Buttons */}
        <div className="flex w-full">
          {/* Coffee Info */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p>Taste: {taste}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 ml-auto">
            <Link
              to={`coffees/${_id}`}
              className="btn btn-sm bg-secondary text-white"
            >
              <FaEye />
            </Link>
            <Link
              to={`updateCoffee/${_id}`}
              className="btn btn-sm bg-primary text-white"
            >
              <MdEdit />
            </Link>
            <button
              onClick={() => handleCoffeeDelete(_id)}
              className="btn btn-sm bg-red-500 text-white"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
