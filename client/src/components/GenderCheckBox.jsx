const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-4 gap-2">
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-base-300">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-accent bg-white"
            checked={selectedGender === "Male"}
            onChange={() => onCheckboxChange("Male")}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-base-300">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-accent bg-white"
            checked={selectedGender === "Female"}
            onChange={() => onCheckboxChange("Female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
