import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import UpdateCoffeeForm from "../components/UpdateCoffeeForm";
import BacktoHome from "../components/BacktoHome";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    // send to the backend
    fetch(`https://coffee-store-server-achibhossengit-achib-hossens-projects.vercel.app/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Info Updated successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <BacktoHome />
      </div>
      <div className="p-16 bg-base-200 rounded-xl">
        <div className="text-center px-10 mb-5">
          <h1 className="text-4xl font-bold">Update Existing Coffee Details</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <UpdateCoffeeForm
            coffee={coffee}
            handleUpdateCoffee={handleUpdateCoffee}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
