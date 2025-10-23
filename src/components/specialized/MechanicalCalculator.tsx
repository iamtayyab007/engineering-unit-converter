'use client';

import { useState } from 'react';
import { Decimal } from 'decimal.js';
import { formatWithSignificantDigits } from '@/lib/conversion';

type CalculationType = 'torque' | 'stress' | 'power' | 'shaft';

export default function MechanicalCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>('torque');
  const [result, setResult] = useState<string>('');
  
  // Torque calculation
  const [torquePower, setTorquePower] = useState<string>('');
  const [torqueSpeed, setTorqueSpeed] = useState<string>('');
  
  // Stress calculation
  const [stressForce, setStressForce] = useState<string>('');
  const [stressArea, setStressArea] = useState<string>('');
  
  // Power calculation
  const [powerTorque, setPowerTorque] = useState<string>('');
  const [powerSpeed, setPowerSpeed] = useState<string>('');
  
  // Shaft calculation
  const [shaftTorque, setShaftTorque] = useState<string>('');
  const [shaftStress, setShaftStress] = useState<string>('');

  const handleCalculationTypeChange = (type: CalculationType) => {
    setCalculationType(type);
    setResult('');
    
    // Reset all inputs
    setTorquePower('');
    setTorqueSpeed('');
    setStressForce('');
    setStressArea('');
    setPowerTorque('');
    setPowerSpeed('');
    setShaftTorque('');
    setShaftStress('');
  };

  const handleCalculate = () => {
    try {
      let calculationResult: Decimal;
      
      switch (calculationType) {
        case 'torque':
          if (!torquePower || !torqueSpeed || isNaN(Number(torquePower)) || isNaN(Number(torqueSpeed))) {
            setResult('Please enter valid numbers');
            return;
          }
          // T (N·m) = P (W) × 60 / (2π × N (rpm))
          calculationResult = new Decimal(torquePower)
            .times(60)
            .dividedBy(new Decimal(2 * Math.PI).times(torqueSpeed));
          setResult(`${formatWithSignificantDigits(calculationResult.toString(), 6)} N·m`);
          break;
          
        case 'stress':
          if (!stressForce || !stressArea || isNaN(Number(stressForce)) || isNaN(Number(stressArea))) {
            setResult('Please enter valid numbers');
            return;
          }
          // σ = F / A
          calculationResult = new Decimal(stressForce).dividedBy(stressArea);
          setResult(`${formatWithSignificantDigits(calculationResult.toString(), 6)} MPa`);
          break;
          
        case 'power':
          if (!powerTorque || !powerSpeed || isNaN(Number(powerTorque)) || isNaN(Number(powerSpeed))) {
            setResult('Please enter valid numbers');
            return;
          }
          // P (W) = T (N·m) × ω (rad/s)
          // Convert RPM to rad/s: ω = 2π × N / 60
          const angularVelocity = new Decimal(2 * Math.PI).times(powerSpeed).dividedBy(60);
          calculationResult = new Decimal(powerTorque).times(angularVelocity);
          setResult(`${formatWithSignificantDigits(calculationResult.toString(), 6)} W`);
          break;
          
        case 'shaft':
          if (!shaftTorque || !shaftStress || isNaN(Number(shaftTorque)) || isNaN(Number(shaftStress))) {
            setResult('Please enter valid numbers');
            return;
          }
          // d = ∛(16T / πτ)
          calculationResult = new Decimal(16)
            .times(shaftTorque)
            .dividedBy(new Decimal(Math.PI).times(shaftStress))
            .toPower(1/3);
          setResult(`${formatWithSignificantDigits(calculationResult.toString(), 6)} mm`);
          break;
      }
    } catch {
      setResult("Error in calculation");
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Mechanical Engineering Calculators</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              calculationType === 'torque' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleCalculationTypeChange('torque')}
          >
            Torque Calculator
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              calculationType === 'stress' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleCalculationTypeChange('stress')}
          >
            Stress Calculator
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              calculationType === 'power' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleCalculationTypeChange('power')}
          >
            Power Calculator
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              calculationType === 'shaft' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleCalculationTypeChange('shaft')}
          >
            Shaft Size Calculator
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        {calculationType === 'torque' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Power (W)
              </label>
              <input
                type="number"
                value={torquePower}
                onChange={(e) => setTorquePower(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter power in watts"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rotational Speed (RPM)
              </label>
              <input
                type="number"
                value={torqueSpeed}
                onChange={(e) => setTorqueSpeed(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter speed in RPM"
              />
            </div>
          </div>
        )}
        
        {calculationType === 'stress' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Force (N)
              </label>
              <input
                type="number"
                value={stressForce}
                onChange={(e) => setStressForce(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter force in Newtons"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area (mm²)
              </label>
              <input
                type="number"
                value={stressArea}
                onChange={(e) => setStressArea(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter area in m²"
              />
            </div>
          </div>
        )}
        
        {calculationType === 'power' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Torque (N·m)
              </label>
              <input
                type="number"
                value={powerTorque}
                onChange={(e) => setPowerTorque(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter torque in newton-meters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rotational Speed (RPM)
              </label>
              <input
                type="number"
                value={powerSpeed}
                onChange={(e) => setPowerSpeed(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter speed in RPM"
              />
            </div>
          </div>
        )}
        
        {calculationType === 'shaft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Torque (N·m)
              </label>
              <input
                type="number"
                value={shaftTorque}
                onChange={(e) => setShaftTorque(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter torque in N⋅m"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Allowable Shear Stress (MPa)
              </label>
              <input
                type="number"
                value={shaftStress}
                onChange={(e) => setShaftStress(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black"
                placeholder="Enter allowable stress in MPa"
              />
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