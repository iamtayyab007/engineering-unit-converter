"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  className = "",
  label,
  error,
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !text-black font-medium placeholder-black';
  const errorStyles = error
    ? "border-red-300 !text-black placeholder-black focus:ring-red-500 focus:border-red-500"
    : "border-gray-300";
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label className="block text-sm font-semibold !text-black mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${errorStyles} ${widthStyle} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm !text-black">{error}</p>}
    </div>
  );
};

export default Input;
