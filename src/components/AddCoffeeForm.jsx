import Swal from "sweetalert2";

const AddCoffeeForm = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <form onSubmit={handleAddCoffee}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Coffee Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="input w-full"
            placeholder="Enter coffee name"
          />
        </fieldset>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Quantity
          </label>
          <input
            type="number"
            className="input w-full"
            name="quantity"
            placeholder="Enter Quantity"
          />
        </fieldset>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Suplier
          </label>
          <input
            type="text"
            className="input w-full"
            name="suplier"
            placeholder="Enter suplier"
          />
        </fieldset>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Taste
          </label>
          <input
            type="text"
            className="input w-full"
            name="taste"
            placeholder="Enter coffee taste"
          />
        </fieldset>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Price
          </label>
          <input
            type="number"
            className="input w-full"
            required
            name="price"
            placeholder="Price per cup"
          />
        </fieldset>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Details
          </label>
          <input
            type="text"
            className="input w-full"
            name="details"
            placeholder="Enter Details"
          />
        </fieldset>
      </div>
      <fieldset className="fieldset my-6 rounded-box w-full">
        <label className="label text-lg font-medium text-primary">Photo</label>
        <input
          type="text"
          className="input w-full"
          name="photo"
          placeholder="Enter Photo URL"
        />
      </fieldset>
      <button className="btn btn-primary bg-secondary text-primary w-full">
        Add Coffee
      </button>
    </form>
  );
};

export default AddCoffeeForm;
