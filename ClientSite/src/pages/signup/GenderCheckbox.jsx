const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text font-bold text-white">Male</span>
          <input
            type="checkbox"
            name="male"
            id="male"
            className="checkbox border-cyan-600"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text font-bold text-white">Female</span>
          <input
            type="checkbox"
            name="female"
            id="female"
            className="checkbox border-cyan-600"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
