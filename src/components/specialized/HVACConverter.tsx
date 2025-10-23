'use client';

import { useState } from 'react';
import { Decimal } from 'decimal.js';
import { formatWithSignificantDigits } from '@/lib/conversion';

type ConversionType = 'btu-tons' | 'cfm' | 'static-pressure';

export default function HVACConverter() {
  const [conversionType, setConversionType] = useState<ConversionType>('btu-tons');
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('btu/h');
  const [toUnit, setToUnit] = useState<string>('ton');
  const [result, setResult] = useState<string>('');

  const btuTonsUnits = ['btu/h', 'ton', 'kW'];
  const cfmUnits = ['cfm', 'l/s', 'm³/h', 'm³/s'];
  const pressureUnits = ['inWC', 'Pa', 'kPa', 'psi', 'bar'];

  const getUnits = () => {
    switch (conversionType) {
      case 'btu-tons':
        return btuTonsUnits;
      case 'cfm':
        return cfmUnits;
      case 'static-pressure':
        return pressureUnits;
      default:
        return [];
    }
  };

  const handleConversionTypeChange = (type: ConversionType) => {
    setConversionType(type);
    setInputValue('');
    setResult('');
    
    switch (type) {
      case 'btu-tons':
        setFromUnit('btu/h');
        setToUnit('ton');
        break;
      case 'cfm':
        setFromUnit('cfm');
        setToUnit('l/s');
        break;
      case 'static-pressure':
        setFromUnit('inWC');
        setToUnit('Pa');
        break;
    }
  };

  const handleConvert = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setResult('Please enter a valid number');
      return;
    }

    try {
      let conversionResult: Decimal;
      
      // BTU-Tons conversions
      if (conversionType === 'btu-tons') {
        if (fromUnit === 'btu/h' && toUnit === 'ton') {
          conversionResult = new Decimal(inputValue).dividedBy(12000);
        } else if (fromUnit === 'ton' && toUnit === 'btu/h') {
          conversionResult = new Decimal(inputValue).times(12000);
        } else if (fromUnit === 'btu/h' && toUnit === 'kW') {
          conversionResult = new Decimal(inputValue).times(0.00029307107);
        } else if (fromUnit === 'kW' && toUnit === 'btu/h') {
          conversionResult = new Decimal(inputValue).times(3412.142);
        } else if (fromUnit === 'ton' && toUnit === 'kW') {
          conversionResult = new Decimal(inputValue).times(3.5168525);
        } else if (fromUnit === 'kW' && toUnit === 'ton') {
          conversionResult = new Decimal(inputValue).dividedBy(3.5168525);
        } else {
          conversionResult = new Decimal(inputValue); // Same unit
        }
      }
      
      // CFM conversions
      else if (conversionType === 'cfm') {
        if (fromUnit === 'cfm' && toUnit === 'l/s') {
          conversionResult = new Decimal(inputValue).times(0.4719);
        } else if (fromUnit === 'l/s' && toUnit === 'cfm') {
          conversionResult = new Decimal(inputValue).dividedBy(0.4719);
        } else if (fromUnit === 'cfm' && toUnit === 'm³/h') {
          conversionResult = new Decimal(inputValue).times(1.699);
        } else if (fromUnit === 'm³/h' && toUnit === 'cfm') {
          conversionResult = new Decimal(inputValue).dividedBy(1.699);
        } else if (fromUnit === 'cfm' && toUnit === 'm³/s') {
          conversionResult = new Decimal(inputValue).times(0.000471947);
        } else if (fromUnit === 'm³/s' && toUnit === 'cfm') {
          conversionResult = new Decimal(inputValue).dividedBy(0.000471947);
        } else if (fromUnit === 'l/s' && toUnit === 'm³/h') {
          conversionResult = new Decimal(inputValue).times(3.6);
        } else if (fromUnit === 'm³/h' && toUnit === 'l/s') {
          conversionResult = new Decimal(inputValue).dividedBy(3.6);
        } else if (fromUnit === 'l/s' && toUnit === 'm³/s') {
          conversionResult = new Decimal(inputValue).dividedBy(1000);
        } else if (fromUnit === 'm³/s' && toUnit === 'l/s') {
          conversionResult = new Decimal(inputValue).times(1000);
        } else if (fromUnit === 'm³/h' && toUnit === 'm³/s') {
          conversionResult = new Decimal(inputValue).dividedBy(3600);
        } else if (fromUnit === 'm³/s' && toUnit === 'm³/h') {
          conversionResult = new Decimal(inputValue).times(3600);
        } else {
          conversionResult = new Decimal(inputValue); // Same unit
        }
      }
      
      // Static pressure conversions
      else if (conversionType === 'static-pressure') {
        if (fromUnit === 'inWC' && toUnit === 'Pa') {
          conversionResult = new Decimal(inputValue).times(249.09);
        } else if (fromUnit === 'Pa' && toUnit === 'inWC') {
          conversionResult = new Decimal(inputValue).dividedBy(249.09);
        } else if (fromUnit === 'inWC' && toUnit === 'kPa') {
          conversionResult = new Decimal(inputValue).times(0.24909);
        } else if (fromUnit === 'kPa' && toUnit === 'inWC') {
          conversionResult = new Decimal(inputValue).dividedBy(0.24909);
        } else if (fromUnit === 'inWC' && toUnit === 'psi') {
          conversionResult = new Decimal(inputValue).times(0.03613);
        } else if (fromUnit === 'psi' && toUnit === 'inWC') {
          conversionResult = new Decimal(inputValue).dividedBy(0.03613);
        } else if (fromUnit === 'inWC' && toUnit === 'bar') {
          conversionResult = new Decimal(inputValue).times(0.00249);
        } else if (fromUnit === 'bar' && toUnit === 'inWC') {
          conversionResult = new Decimal(inputValue).dividedBy(0.00249);
        } else if (fromUnit === 'Pa' && toUnit === 'kPa') {
          conversionResult = new Decimal(inputValue).dividedBy(1000);
        } else if (fromUnit === 'kPa' && toUnit === 'Pa') {
          conversionResult = new Decimal(inputValue).times(1000);
        } else if (fromUnit === 'Pa' && toUnit === 'psi') {
          conversionResult = new Decimal(inputValue).times(0.000145038);
        } else if (fromUnit === 'psi' && toUnit === 'Pa') {
          conversionResult = new Decimal(inputValue).dividedBy(0.000145038);
        } else if (fromUnit === 'Pa' && toUnit === 'bar') {
          conversionResult = new Decimal(inputValue).times(0.00001);
        } else if (fromUnit === 'bar' && toUnit === 'Pa') {
          conversionResult = new Decimal(inputValue).dividedBy(0.00001);
        } else if (fromUnit === 'kPa' && toUnit === 'psi') {
          conversionResult = new Decimal(inputValue).times(0.145038);
        } else if (fromUnit === 'psi' && toUnit === 'kPa') {
          conversionResult = new Decimal(inputValue).dividedBy(0.145038);
        } else if (fromUnit === 'kPa' && toUnit === 'bar') {
          conversionResult = new Decimal(inputValue).times(0.01);
        } else if (fromUnit === 'bar' && toUnit === 'kPa') {
          conversionResult = new Decimal(inputValue).dividedBy(0.01);
        } else if (fromUnit === 'psi' && toUnit === 'bar') {
          conversionResult = new Decimal(inputValue).times(0.0689476);
        } else if (fromUnit === 'bar' && toUnit === 'psi') {
          conversionResult = new Decimal(inputValue).dividedBy(0.0689476);
        } else {
          conversionResult = new Decimal(inputValue); // Same unit
        }
      } else {
        conversionResult = new Decimal(inputValue);
      }
      
      setResult(formatWithSignificantDigits(conversionResult.toString(), 6));
    } catch {
      setResult("Error in calculation");
    }
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInputValue(result);
    setResult('');
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold !text-black mb-4">HVAC Unit Converter</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === 'btu-tons' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 !text-black hover:bg-gray-300'
            }`}
            onClick={() => handleConversionTypeChange('btu-tons')}
          >
            BTU ↔ Tons
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === 'cfm' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 !text-black hover:bg-gray-300'
            }`}
            onClick={() => handleConversionTypeChange('cfm')}
          >
            CFM Calculations
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              conversionType === 'static-pressure' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 !text-black hover:bg-gray-300'
            }`}
            onClick={() => handleConversionTypeChange('static-pressure')}
          >
            Static Pressure
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium !text-black mb-2">
            From
          </label>
          <div className="flex">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
              placeholder="Enter value"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-black"
            >
              {getUnits().map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium !text-black mb-2">
            To
          </label>
          <div className="flex">
            <input
              type="text"
              value={result}
              readOnly
              className="block w-full rounded-l-md border-gray-300 bg-gray-50 shadow-sm text-black placeholder-black"
              placeholder="Result"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-black"
            >
              {getUnits().map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handleConvert}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Convert
        </button>
        <button
          onClick={handleSwapUnits}
          className="px-6 py-2 bg-gray-200 !text-black rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Swap
        </button>
      </div>
    </div>
  );
}