import AddCoffeeForm from "../components/AddCoffeeForm";
import BacktoHome from "../components/BacktoHome";

const AddCoffee = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <BacktoHome />
      </div>
      <div className="p-16 bg-base-200 rounded-xl">
        <div className="text-center px-10 mb-5">
          <h1 className="text-4xl font-bold">Add New Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <AddCoffeeForm />
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
