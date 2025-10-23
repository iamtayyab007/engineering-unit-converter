"use client";

import { useState, useEffect } from "react";
import {
  Unit,
  UnitType,
  unitCategories,
  getUnitsByType,
  findUnitById,
} from "@/lib/units";
import {
  convertWithPrecision,
  formatWithSignificantDigits,
  isValidNumber,
} from "@/lib/conversion";

export default function UnitConverter() {
  const [selectedCategory, setSelectedCategory] = useState<UnitType>("length");
  const [fromUnitId, setFromUnitId] = useState<string>("");
  const [toUnitId, setToUnitId] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [units, setUnits] = useState<Unit[]>([]);

  // Initialize units when category changes
  useEffect(() => {
    const unitsForCategory = getUnitsByType(selectedCategory);
    setUnits(unitsForCategory);

    // Set default units when category changes
    if (unitsForCategory.length > 0) {
      setFromUnitId(unitsForCategory[0].id);
      setToUnitId(
        unitsForCategory.length > 1
          ? unitsForCategory[1].id
          : unitsForCategory[0].id
      );
    }
  }, [selectedCategory]);

  // Perform conversion when inputs change
  useEffect(() => {
    if (inputValue && fromUnitId && toUnitId) {
      const fromUnit = findUnitById(fromUnitId);
      const toUnit = findUnitById(toUnitId);

      if (fromUnit && toUnit) {
        try {
          const convertedValue = convertWithPrecision(
            inputValue,
            fromUnit,
            toUnit
          );
          setResult(formatWithSignificantDigits(convertedValue));
        } catch {
          setResult("Error");
        }
      }
    } else {
      setResult("");
    }
  }, [inputValue, fromUnitId, toUnitId]);

  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidNumber(value)) {
      setInputValue(value);
    }
  };

  // Swap units
  const handleSwapUnits = () => {
    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Engineering Unit Converter
      </h2>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {unitCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From Unit */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            From
          </label>
          <div className="flex flex-col space-y-2">
            <select
              value={fromUnitId}
              onChange={(e) => setFromUnitId(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter value"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black placeholder-black"
            />
          </div>
        </div>

        {/* Swap Button (visible only on mobile) */}
        <div className="md:hidden flex justify-center items-center">
          <button
            onClick={handleSwapUnits}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
        </div>

        {/* To Unit */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              To
            </label>
            {/* Swap Button (visible only on desktop) */}
            <button
              onClick={handleSwapUnits}
              className="hidden md:flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Swap
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <select
              value={toUnitId}
              onChange={(e) => setToUnitId(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
            <div className="relative">
              <input
                type="text"
                value={result}
                readOnly
                className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Formula and Explanation */}
      {inputValue && result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Conversion Details
          </h3>
          <p className="text-sm text-gray-600">
            {inputValue} {findUnitById(fromUnitId)?.symbol} = {result}{" "}
            {findUnitById(toUnitId)?.symbol}
          </p>
        </div>
      )}
    </div>
  );
}
