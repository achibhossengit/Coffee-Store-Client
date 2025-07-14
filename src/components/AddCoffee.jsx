const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
  };
  return (
    <div className="p-28">
      <div className="p-12 text-center">
        <h1 className="text-xl font-bold">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Coffee Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Shef</label>
              <input
                type="text"
                className="input w-full"
                name="shef"
                placeholder="Enter Shef name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Suplier</label>
              <input
                type="text"
                className="input w-full"
                name="suplier"
                placeholder="Enter suplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                name="taste"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                name="category"
                placeholder="Enter coffee category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                name="details"
                placeholder="Enter Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 my-6 border-base-300 rounded-box w-full border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Enter Photo URL"
            />
          </fieldset>
          <button className="btn w-full">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
