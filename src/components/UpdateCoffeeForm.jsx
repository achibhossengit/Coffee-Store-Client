import React from "react";

const UpdateCoffeeForm = ({ coffee, handleUpdateCoffee }) => {
  const { _id, name, quantity, suplier, taste, details, photo, price } = coffee;

  return (
    <form onSubmit={handleUpdateCoffee}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <fieldset className="fieldset rounded-box w-full">
          <label className="label text-lg font-medium text-primary">
            Coffee Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
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
            defaultValue={quantity}
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
            defaultValue={suplier}
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
            defaultValue={taste}
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
            name="price"
            defaultValue={price}
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
            defaultValue={details}
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
          defaultValue={photo}
          placeholder="Enter Photo URL"
        />
      </fieldset>

      <button className="btn btn-primary bg-secondary text-primary w-full">
        Update Now
      </button>
    </form>
  );
};

export default UpdateCoffeeForm;
