function GenderCheckbox() {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text font-bold text-white">Male</span>
          <input
            type="checkbox"
            name="male"
            id="male"
            className="checkbox border-cyan-600"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text font-bold text-white">Female</span>
          <input
            type="checkbox"
            name="female"
            id="female"
            className="checkbox border-cyan-600"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
