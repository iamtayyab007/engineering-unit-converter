'use client';

import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  className = '',
  options,
  label,
  error,
  fullWidth = false,
  onChange,
  value,
  ...props
}) => {
  const baseStyles = 'block px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !text-black font-medium';
  const errorStyles = error ? 'border-red-300 !text-black focus:ring-red-500 focus:border-red-500' : 'border-gray-300';
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-semibold !text-black mb-1">
          {label}
        </label>
      )}
      <select
        className={`${baseStyles} ${errorStyles} ${widthStyle} ${className}`}
        value={value}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm !text-black">{error}</p>
      )}
    </div>
  );
};

export default Select;