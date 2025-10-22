'use client';

import StructuralSteelCalculator from '@/components/specialized/StructuralSteelCalculator';

export default function StructuralSteelCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Structural Steel Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <StructuralSteelCalculator />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Structural Steel Calculations</h2>
          <p className="mb-4">
            Our structural steel calculator provides essential tools for structural engineers, 
            architects, and construction professionals. These calculators help with common 
            structural engineering calculations including beam sizing, load calculations, 
            and moment of inertia determinations.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Structural Steel Calculations</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Beam Size Selection:</strong> Calculate required beam sizes based on span, load, and deflection criteria.</li>
            <li className="mb-2"><strong>Load per Meter:</strong> Determine distributed loads on beams and structural members.</li>
            <li className="mb-2"><strong>Moment of Inertia:</strong> Calculate section properties for various steel profiles.</li>
            <li className="mb-2"><strong>Section Modulus:</strong> Determine resistance to bending for different beam profiles.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Structural Steel Formulas</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2"><strong>Bending Moment:</strong> M = wL²/8 (for uniformly distributed load on simply supported beam), where M is moment, w is load per unit length, and L is span</p>
            <p className="mb-2"><strong>Beam Deflection:</strong> δ = 5wL⁴/(384EI) (for uniformly distributed load), where δ is deflection, w is load per unit length, L is span, E is modulus of elasticity, and I is moment of inertia</p>
            <p className="mb-2"><strong>Section Modulus:</strong> S = I/y, where S is section modulus, I is moment of inertia, and y is distance from neutral axis</p>
            <p className="mb-2"><strong>Stress:</strong> σ = M/S, where σ is stress, M is moment, and S is section modulus</p>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            These calculators are designed for structural engineers, architects, steel detailers, 
            construction managers, and other professionals working on building structures, 
            bridges, and industrial facilities.
          </p>
        </div>
      </div>
    </div>
  );
}