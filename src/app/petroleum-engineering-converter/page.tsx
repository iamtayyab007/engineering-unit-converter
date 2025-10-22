'use client';

import PetroleumConverter from '@/components/specialized/PetroleumConverter';

export default function PetroleumEngineeringConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Petroleum & Process Engineering Converter</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <PetroleumConverter />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Petroleum Engineering Calculations</h2>
          <p className="mb-4">
            Our petroleum engineering converter provides essential tools for petroleum engineers, 
            process engineers, and oil & gas professionals. These calculators help with common 
            petroleum engineering calculations including pressure, flowrate, density, and viscosity conversions.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Petroleum Engineering Conversions</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Pressure Conversions:</strong> Convert between psi, bar, kPa, and other pressure units commonly used in petroleum engineering.</li>
            <li className="mb-2"><strong>Flowrate Calculations:</strong> Convert between barrels per day (BPD), cubic meters per hour, and other flow units.</li>
            <li className="mb-2"><strong>Density Conversions:</strong> Convert between kg/m³, lb/ft³, and specific gravity for various fluids.</li>
            <li className="mb-2"><strong>Viscosity Conversions:</strong> Convert between centipoise, Pascal-seconds, and other viscosity measurements.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Petroleum Engineering Formulas</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2"><strong>Darcy's Law:</strong> Q = (k × A × ΔP) / (μ × L), where Q is flow rate, k is permeability, A is cross-sectional area, ΔP is pressure difference, μ is viscosity, and L is length</p>
            <p className="mb-2"><strong>Specific Gravity:</strong> SG = ρ / ρwater, where SG is specific gravity, ρ is density of the fluid, and ρwater is density of water</p>
            <p className="mb-2"><strong>Pressure Gradient:</strong> ΔP/L = ρ × g × sin(θ), where ΔP/L is pressure gradient, ρ is density, g is gravitational acceleration, and θ is angle from horizontal</p>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            These calculators are designed for petroleum engineers, process engineers, drilling engineers, 
            reservoir engineers, and other professionals working in the oil & gas industry, refineries, 
            and petrochemical plants.
          </p>
        </div>
      </div>
    </div>
  );
}