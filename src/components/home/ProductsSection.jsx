import { FaCoffee } from "react-icons/fa";
import CoffeeCard from "../CoffeeCard";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ProductsSection = ({ coffees, setCoffees }) => {
    const handleCoffeeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setCoffees(coffees.filter(coffee=> coffee._id != id))
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  
  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className="text-center space-y-2">
        <p className="text-xs">...Slip & Savor...</p>
        <h2 className="text-4xl font-bold">Our Popular Products</h2>
        <Link to={'/coffee/add'} className="btn btn-primary bg-secondary text-gray-800">
          Add Coffee <FaCoffee />
        </Link>
      </div>

      {/* products container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} handleCoffeeDelete={handleCoffeeDelete}/>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
