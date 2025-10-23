"use client";
import { useState } from "react";
import { Decimal } from "decimal.js";
import { formatWithSignificantDigits } from "@/lib/conversion";

type ConversionType = "rebar" | "concrete" | "strength";

export default function CivilConverter() {
  const [conversionType, setConversionType] = useState<ConversionType>("rebar");
  const [result, setResult] = useState<string>("");

  // Rebar weight calculation
  const [rebarDiameter, setRebarDiameter] = useState<string>("");
  const [rebarLength, setRebarLength] = useState<string>("");
  const [rebarQuantity, setRebarQuantity] = useState<string>("1");

  // Concrete volume calculation
  const [concreteLength, setConcreteLength] = useState<string>("");
  const [concreteWidth, setConcreteWidth] = useState<string>("");
  const [concreteHeight, setConcreteHeight] = useState<string>("");

  // Strength conversion
  const [strengthValue, setStrengthValue] = useState<string>("");
  const [strengthFromUnit, setStrengthFromUnit] = useState<string>("psi");
  const [strengthToUnit, setStrengthToUnit] = useState<string>("mpa");

  const strengthUnits = ["psi", "mpa", "kpa", "kgf/cm2"];

  const handleConversionTypeChange = (type: ConversionType) => {
    setConversionType(type);
    setResult("");

    // Reset all inputs
    setRebarDiameter("");
    setRebarLength("");
    setRebarQuantity("1");
    setConcreteLength("");
    setConcreteWidth("");
    setConcreteHeight("");
    setStrengthValue("");
    setStrengthFromUnit("psi");
    setStrengthToUnit("mpa");
  };

  const handleCalculate = () => {
    try {
      let calculationResult: Decimal;

      switch (conversionType) {
        case "rebar":
          if (
            !rebarDiameter ||
            !rebarLength ||
            !rebarQuantity ||
            isNaN(Number(rebarDiameter)) ||
            isNaN(Number(rebarLength)) ||
            isNaN(Number(rebarQuantity))
          ) {
            setResult("Please enter valid numbers");
            return;
          }
          // Weight (kg) = π × (d/2)² × L × 7850 / 1000000 × quantity
          // where d is diameter in mm, L is length in m
          const diameter = new Decimal(rebarDiameter);
          const length = new Decimal(rebarLength);
          const quantity = new Decimal(rebarQuantity);

          calculationResult = new Decimal(Math.PI)
            .times(diameter.dividedBy(2).toPower(2))
            .times(length)
            .times(7850)
            .dividedBy(1000000)
            .times(quantity);

          setResult(
            `${formatWithSignificantDigits(calculationResult.toString(), 6)} kg`
          );
          break;

        case "concrete":
          if (
            !concreteLength ||
            !concreteWidth ||
            !concreteHeight ||
            isNaN(Number(concreteLength)) ||
            isNaN(Number(concreteWidth)) ||
            isNaN(Number(concreteHeight))
          ) {
            setResult("Please enter valid numbers");
            return;
          }
          // Volume (m³) = Length (m) × Width (m) × Height (m)
          calculationResult = new Decimal(concreteLength)
            .times(concreteWidth)
            .times(concreteHeight);

          setResult(
            `${formatWithSignificantDigits(calculationResult.toString(), 6)} m³`
          );
          break;

        case "strength":
          if (!strengthValue || isNaN(Number(strengthValue))) {
            setResult("Please enter a valid number");
            return;
          }

          const value = new Decimal(strengthValue);

          // Convert to base unit (MPa)
          let baseMPa: Decimal;
          switch (strengthFromUnit) {
            case "psi":
              baseMPa = value.times(0.00689476);
              break;
            case "kpa":
              baseMPa = value.dividedBy(1000);
              break;
            case "kgf/cm2":
              baseMPa = value.times(0.0980665);
              break;
            default: // already in MPa
              baseMPa = value;
          }

          // Convert from base unit (MPa) to target unit
          switch (strengthToUnit) {
            case "psi":
              calculationResult = baseMPa.dividedBy(0.00689476);
              setResult(
                `${formatWithSignificantDigits(
                  calculationResult.toString(),
                  6
                )} psi`
              );
              break;
            case "kpa":
              calculationResult = baseMPa.times(1000);
              setResult(
                `${formatWithSignificantDigits(
                  calculationResult.toString(),
                  6
                )} kPa`
              );
              break;
            case "kgf/cm2":
              calculationResult = baseMPa.dividedBy(0.0980665);
              setResult(
                `${formatWithSignificantDigits(
                  calculationResult.toString(),
                  6
                )} kgf/cm²`
              );
              break;
            default: // to MPa
              calculationResult = baseMPa;
              setResult(
                `${formatWithSignificantDigits(
                  calculationResult.toString(),
                  6
                )} MPa`
              );
          }
          break;
      }
    } catch {
      setResult("Error in calculation");
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold !text-black mb-4">
          Civil Engineering Converter
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === "rebar"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleConversionTypeChange("rebar")}
          >
            Rebar Weight
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === "concrete"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleConversionTypeChange("concrete")}
          >
            Concrete Volume
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === "strength"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleConversionTypeChange("strength")}
          >
            PSI ↔ MPa Conversion
          </button>
        </div>
      </div>

      <div className="mb-6">
        {conversionType === "rebar" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diameter (mm)
              </label>
              <input
                type="number"
                value={rebarDiameter}
                onChange={(e) => setRebarDiameter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter diameter in mm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length (m)
              </label>
              <input
                type="number"
                value={rebarLength}
                onChange={(e) => setRebarLength(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter length in meters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                value={rebarQuantity}
                onChange={(e) => setRebarQuantity(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter quantity"
              />
            </div>
          </div>
        )}

        {conversionType === "concrete" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length (m)
              </label>
              <input
                type="number"
                value={concreteLength}
                onChange={(e) => setConcreteLength(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter length in meters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width (m)
              </label>
              <input
                type="number"
                value={concreteWidth}
                onChange={(e) => setConcreteWidth(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter width in meters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (m)
              </label>
              <input
                type="number"
                value={concreteHeight}
                onChange={(e) => setConcreteHeight(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter height in meters"
              />
            </div>
          </div>
        )}

        {conversionType === "strength" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <div className="flex">
                <input
                  type="number"
                  value={strengthValue}
                  onChange={(e) => setStrengthValue(e.target.value)}
                  className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-black"
                  placeholder="Enter value"
                />
                <select
                  value={strengthFromUnit}
                  onChange={(e) => setStrengthFromUnit(e.target.value)}
                  className="rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                >
                  {strengthUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={strengthToUnit}
                onChange={(e) => setStrengthToUnit(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {strengthUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center mt-6">
        <button
          onClick={handleCalculate}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md w-full text-center">
            <span className="text-lg font-semibold">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
