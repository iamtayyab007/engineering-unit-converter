'use client';

import React, { useState, useEffect } from "react";
import { Decimal } from "decimal.js";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";

type CalculationType =
  | "ohmsLaw"
  | "powerCalc"
  | "resistanceConversion"
  | "currentConversion";

const ElectricalConverter: React.FC = () => {
  const [calculationType, setCalculationType] =
    useState<CalculationType>("ohmsLaw");

  // Ohm's Law states
  const [ohmsLawMode, setOhmsLawMode] = useState<
    "voltage" | "current" | "resistance"
  >("voltage");
  const [voltage, setVoltage] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [resistance, setResistance] = useState<string>("");

  // Power calculation states
  const [powerCalcMode, setPowerCalcMode] = useState<
    "power" | "voltage" | "current"
  >("power");
  const [power, setPower] = useState<string>("");
  const [powerVoltage, setPowerVoltage] = useState<string>("");
  const [powerCurrent, setPowerCurrent] = useState<string>("");

  // Resistance conversion states
  const [resistanceValue, setResistanceValue] = useState<string>("");
  const [resistanceUnit, setResistanceUnit] = useState<
    "ohm" | "kilohm" | "megohm"
  >("ohm");
  const [resistanceResult, setResistanceResult] = useState<string>("");

  // Current conversion states
  const [currentValue, setCurrentValue] = useState<string>("");
  const [currentUnit, setCurrentUnit] = useState<
    "ampere" | "milliampere" | "microampere"
  >("ampere");
  const [currentResult, setCurrentResult] = useState<string>("");

  // Result state
  const [result, setResult] = useState<string>("");
  const [formula, setFormula] = useState<string>("");

  // Validate input is a number
  const isValidNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== "";
  };

  // Calculate Ohm's Law
  const calculateOhmsLaw = () => {
    try {
      if (ohmsLawMode === "voltage") {
        if (!isValidNumber(current) || !isValidNumber(resistance)) {
          setResult("Please enter valid current and resistance values");
          return;
        }

        const i = new Decimal(current);
        const r = new Decimal(resistance);
        const v = i.times(r);

        setResult(`${v.toFixed(4)} volts`);
        setFormula(
          `V = I × R = ${current} A × ${resistance} Ω = ${v.toFixed(4)} V`
        );
      } else if (ohmsLawMode === "current") {
        if (!isValidNumber(voltage) || !isValidNumber(resistance)) {
          setResult("Please enter valid voltage and resistance values");
          return;
        }

        const v = new Decimal(voltage);
        const r = new Decimal(resistance);
        const i = v.dividedBy(r);

        setResult(`${i.toFixed(4)} amperes`);
        setFormula(
          `I = V ÷ R = ${voltage} V ÷ ${resistance} Ω = ${i.toFixed(4)} A`
        );
      } else if (ohmsLawMode === "resistance") {
        if (!isValidNumber(voltage) || !isValidNumber(current)) {
          setResult("Please enter valid voltage and current values");
          return;
        }

        const v = new Decimal(voltage);
        const i = new Decimal(current);
        const r = v.dividedBy(i);

        setResult(`${r.toFixed(4)} ohms`);
        setFormula(
          `R = V ÷ I = ${voltage} V ÷ ${current} A = ${r.toFixed(4)} Ω`
        );
      }
    } catch (error) {
      setResult("Error in calculation");
    }
  };

  // Calculate Power
  const calculatePower = () => {
    try {
      if (powerCalcMode === "power") {
        if (!isValidNumber(powerVoltage) || !isValidNumber(powerCurrent)) {
          setResult("Please enter valid voltage and current values");
          return;
        }

        const v = new Decimal(powerVoltage);
        const i = new Decimal(powerCurrent);
        const p = v.times(i);

        setResult(`${p.toFixed(4)} watts`);
        setFormula(
          `P = V × I = ${powerVoltage} V × ${powerCurrent} A = ${p.toFixed(
            4
          )} W`
        );
      } else if (powerCalcMode === "voltage") {
        if (!isValidNumber(power) || !isValidNumber(powerCurrent)) {
          setResult("Please enter valid power and current values");
          return;
        }

        const p = new Decimal(power);
        const i = new Decimal(powerCurrent);
        const v = p.dividedBy(i);

        setResult(`${v.toFixed(4)} volts`);
        setFormula(
          `V = P ÷ I = ${power} W ÷ ${powerCurrent} A = ${v.toFixed(4)} V`
        );
      } else if (powerCalcMode === "current") {
        if (!isValidNumber(power) || !isValidNumber(powerVoltage)) {
          setResult("Please enter valid power and voltage values");
          return;
        }

        const p = new Decimal(power);
        const v = new Decimal(powerVoltage);
        const i = p.dividedBy(v);

        setResult(`${i.toFixed(4)} amperes`);
        setFormula(
          `I = P ÷ V = ${power} W ÷ ${powerVoltage} V = ${i.toFixed(4)} A`
        );
      }
    } catch (error) {
      setResult("Error in calculation");
    }
  };

  // Convert resistance
  const convertResistance = () => {
    if (!isValidNumber(resistanceValue)) {
      setResistanceResult("Please enter a valid resistance value");
      return;
    }

    try {
      const value = new Decimal(resistanceValue);
      let result = "";

      if (resistanceUnit === "ohm") {
        result = `${value.toFixed(4)} Ω = ${value
          .dividedBy(1000)
          .toFixed(4)} kΩ = ${value.dividedBy(1000000).toFixed(6)} MΩ`;
      } else if (resistanceUnit === "kilohm") {
        result = `${value.times(1000).toFixed(4)} Ω = ${value.toFixed(
          4
        )} kΩ = ${value.dividedBy(1000).toFixed(6)} MΩ`;
      } else if (resistanceUnit === "megohm") {
        result = `${value.times(1000000).toFixed(4)} Ω = ${value
          .times(1000)
          .toFixed(4)} kΩ = ${value.toFixed(6)} MΩ`;
      }

      setResistanceResult(result);
    } catch (error) {
      setResistanceResult("Error in conversion");
    }
  };

  // Convert current
  const convertCurrent = () => {
    if (!isValidNumber(currentValue)) {
      setCurrentResult("Please enter a valid current value");
      return;
    }

    try {
      const value = new Decimal(currentValue);
      let result = "";

      if (currentUnit === "ampere") {
        result = `${value.toFixed(4)} A = ${value
          .times(1000)
          .toFixed(4)} mA = ${value.times(1000000).toFixed(4)} μA`;
      } else if (currentUnit === "milliampere") {
        result = `${value.dividedBy(1000).toFixed(6)} A = ${value.toFixed(
          4
        )} mA = ${value.times(1000).toFixed(4)} μA`;
      } else if (currentUnit === "microampere") {
        result = `${value.dividedBy(1000000).toFixed(8)} A = ${value
          .dividedBy(1000)
          .toFixed(6)} mA = ${value.toFixed(4)} μA`;
      }

      setCurrentResult(result);
    } catch (error) {
      setCurrentResult("Error in conversion");
    }
  };

  return (
    <div className="space-y-6">
      <Tabs
        tabs={[
          { id: "ohmsLaw", label: "Ohm's Law" },
          { id: "powerCalc", label: "Power" },
          { id: "resistanceConversion", label: "Resistance" },
          { id: "currentConversion", label: "Current" },
        ]}
        defaultTab="ohmsLaw"
        onChange={(tabId) => setCalculationType(tabId as CalculationType)}
        className="w-full"
      />

      {calculationType === "ohmsLaw" && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold !text-black mb-2">Calculate:</label>
                <Select
                  value={ohmsLawMode}
                  onChange={(value) =>
                    setOhmsLawMode(value as "voltage" | "current" | "resistance")
                  }
                  options={[
                    { value: "voltage", label: "Voltage (V)" },
                    { value: "current", label: "Current (I)" },
                    { value: "resistance", label: "Resistance (R)" },
                  ]}
                  fullWidth
                />
              </div>

              {ohmsLawMode !== "voltage" && (
                <div>
                  <label className="block text-sm font-semibold !text-black mb-2">Voltage (V):</label>
                  <Input
                    type="number"
                    placeholder="Enter voltage in volts"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                  />
                </div>
              )}

              {ohmsLawMode !== "current" && (
                <div>
                  <label className="block text-sm font-semibold !text-black mb-2">Current (I):</label>
                  <Input
                    type="number"
                    placeholder="Enter current in amperes"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                  />
                </div>
              )}

              {ohmsLawMode !== "resistance" && (
                <div>
                  <label className="block text-sm font-semibold !text-black mb-2">Resistance (R):</label>
                  <Input
                    type="number"
                    placeholder="Enter resistance in ohms"
                    value={resistance}
                    onChange={(e) => setResistance(e.target.value)}
                  />
                </div>
              )}

              <Button onClick={calculateOhmsLaw} className="w-full">Calculate</Button>

              {result && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">{result}</p>
                  <p className="text-sm !text-black mt-1">{formula}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === "powerCalc" && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Calculate:</label>
                <Select
                  value={powerCalcMode}
                  onChange={(value) => setPowerCalcMode(value as "power" | "voltage" | "current")}
                  options={[
                    { value: "power", label: "Power (P)" },
                    { value: "voltage", label: "Voltage (V)" },
                    { value: "current", label: "Current (I)" },
                  ]}
                  fullWidth
                />
              </div>

              {powerCalcMode !== "power" && (
                <div>
                  <label className="block text-sm font-medium mb-2">Power (P):</label>
                  <Input
                    type="number"
                    placeholder="Enter power in watts"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                  />
                </div>
              )}

              {powerCalcMode !== "voltage" && (
                <div>
                  <label className="block text-sm font-medium mb-2">Voltage (V):</label>
                  <Input
                    type="number"
                    placeholder="Enter voltage in volts"
                    value={powerVoltage}
                    onChange={(e) => setPowerVoltage(e.target.value)}
                  />
                </div>
              )}

              {powerCalcMode !== "current" && (
                <div>
                  <label className="block text-sm font-medium mb-2">Current (I):</label>
                  <Input
                    type="number"
                    placeholder="Enter current in amperes"
                    value={powerCurrent}
                    onChange={(e) => setPowerCurrent(e.target.value)}
                  />
                </div>
              )}

              <Button onClick={calculatePower} className="w-full">Calculate</Button>

              {result && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">{result}</p>
                  <p className="text-sm !text-black mt-1">{formula}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === "resistanceConversion" && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Resistance Value:</label>
                <Input
                  type="number"
                  placeholder="Enter resistance value"
                  value={resistanceValue}
                  onChange={(e) => setResistanceValue(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select
                  value={resistanceUnit}
                  onChange={(value) => setResistanceUnit(value as "ohm" | "kilohm" | "megohm")}
                  options={[
                    { value: "ohm", label: "Ohms (Ω)" },
                    { value: "kilohm", label: "Kilohms (kΩ)" },
                    { value: "megohm", label: "Megohms (MΩ)" },
                  ]}
                  fullWidth
                />
              </div>

              <Button onClick={convertResistance} className="w-full">Convert</Button>

              {resistanceResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm !text-black mt-1">{resistanceResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === "currentConversion" && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text sm font-medium mb-2">Current Value:</label>
                <Input
                  type="number"
                  placeholder="Enter current value"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select
                  value={currentUnit}
                  onChange={(value) =>
                    setCurrentUnit(value as "ampere" | "milliampere" | "microampere")
                  }
                  options={[
                    { value: "ampere", label: "Amperes (A)" },
                    { value: "milliampere", label: "Milliamperes (mA)" },
                    { value: "microampere", label: "Microamperes (μA)" },
                  ]}
                  fullWidth
                />
              </div>

              <Button onClick={convertCurrent} className="w-full">Convert</Button>

              {currentResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm !text-black mt-1">{currentResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ElectricalConverter;
