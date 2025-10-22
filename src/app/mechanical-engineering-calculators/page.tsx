'use client';

import MechanicalCalculator from '@/components/specialized/MechanicalCalculator';

export default function MechanicalEngineeringCalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mechanical Engineering Calculator Suite</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <MechanicalCalculator />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mechanical Engineering Calculations</h2>
          <p className="mb-4">
            Our mechanical engineering calculator suite provides essential tools for mechanical engineers, 
            designers, and students. These calculators help solve common mechanical engineering problems 
            with precision and efficiency.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Mechanical Engineering Calculations</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Torque Calculations:</strong> Calculate torque from power and rotational speed, or determine the required torque for specific applications.</li>
            <li className="mb-2"><strong>Stress Analysis:</strong> Calculate various stress types including tensile, compressive, shear, and bending stresses in mechanical components.</li>
            <li className="mb-2"><strong>Power Calculations:</strong> Determine power requirements for mechanical systems based on force, velocity, torque, and angular velocity.</li>
            <li className="mb-2"><strong>Shaft Size Calculations:</strong> Calculate appropriate shaft diameters based on torque, material properties, and safety factors.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Mechanical Engineering Formulas</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2"><strong>Torque from Power:</strong> T (N·m) = P (W) × 60 / (2π × N (rpm))</p>
            <p className="mb-2"><strong>Tensile Stress:</strong> σ = F / A</p>
            <p className="mb-2"><strong>Power from Torque:</strong> P (W) = T (N·m) × ω (rad/s)</p>
            <p className="mb-2"><strong>Shaft Diameter:</strong> d = ∛(16T / πτ)</p>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            These calculators are designed for mechanical engineers, product designers, manufacturing engineers, 
            and engineering students working on mechanical systems, machine design, and power transmission applications.
          </p>
        </div>
      </div>
    </div>
  );
}