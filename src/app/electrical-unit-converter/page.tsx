'use client';

import ElectricalConverter from '@/components/specialized/ElectricalConverter';

export default function ElectricalUnitConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Electrical Unit Converter</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <ElectricalConverter />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Electrical Engineering Calculations</h2>
          <p className="mb-4">
            Our electrical unit converter provides essential tools for electrical engineers, 
            technicians, and students. These calculators help with common electrical engineering 
            calculations including Ohm&apos;s law, power calculations, and unit conversions.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Electrical Calculations</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Ohm&apos;s Law:</strong> Calculate voltage, current, or resistance using the fundamental relationship V = I × R.</li>
            <li className="mb-2"><strong>Power Calculations:</strong> Determine electrical power using P = V × I or P = I² × R.</li>
            <li className="mb-2"><strong>Resistance Conversions:</strong> Convert between ohms, kilohms, and megohms.</li>
            <li className="mb-2"><strong>Current Conversions:</strong> Convert between amperes, milliamperes, and microamperes.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Electrical Formulas</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2"><strong>Ohm&apos;s Law:</strong> V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms)</p>
            <p className="mb-2"><strong>Power:</strong> P = V × I, where P is power (watts), V is voltage (volts), and I is current (amperes)</p>
            <p className="mb-2"><strong>Resistors in Series:</strong> Rtotal = R₁ + R₂ + R₃ + ...</p>
            <p className="mb-2"><strong>Resistors in Parallel:</strong> 1/Rtotal = 1/R₁ + 1/R₂ + 1/R₃ + ...</p>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            These calculators are designed for electrical engineers, electronics technicians, 
            electrical contractors, and students working on electrical circuits, power systems, 
            and electronic devices.
          </p>
        </div>
      </div>
    </div>
  );
}