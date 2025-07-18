import { useLoaderData } from "react-router";
import BacktoHome from "../components/BacktoHome";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const {
    name = "Unknown Coffee",
    quantity = "N/A",
    supplier = "N/A",
    taste = "N/A",
    details = "No details provided for this coffee.",
    photo = "https://placehold.co/600x400/E0E0E0/333333?text=No+Image",
    chef = "Mr. Matin Paul",
  } = coffee || {};
  return (
    <div className="max-w-6xl mx-auto">
      <BacktoHome />
      <div className="bg-base-200 p-8 md:p-16 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Coffee Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={photo}
            alt={name}
            className="w-full h-auto max-h-[400px] object-contain rounded-lg"
            // Fallback for broken image links
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if fallback also fails
              e.target.src =
                "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found";
            }}
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2
            className="text-4xl font-serif text-gray-800 mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Niceties
          </h2>

          <div className="space-y-4 text-lg text-gray-700 mt-4">
            <p>
              <strong className="font-semibold text-gray-900">Name:</strong>{" "}
              {name}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Chef:</strong>{" "}
              {chef}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Supplier:</strong>{" "}
              {supplier}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Taste:</strong>{" "}
              {taste}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Category:</strong>{" "}
              {quantity} {/* Using quantity for category */}
            </p>
            <p className="text-gray-600 leading-relaxed pt-2">
              <strong className="font-semibold text-gray-900">Details:</strong>{" "}
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
