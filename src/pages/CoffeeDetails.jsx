import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, quantity, suplier, taste, details, photo, price } = coffee;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Coffee Details</h1>

      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
        <img
          src={photo}
          alt={name}
          className="w-full md:w-1/2 object-cover h-80"
        />

        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Supplier:</span> {suplier}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> {price}৳
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Details:</span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
