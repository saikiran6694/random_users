import React from "react";

const FormField = ({ type, placeholder, name, handleChange, value }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type={type}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        />
      </div>
    </div>
  );
};

export default FormField;
