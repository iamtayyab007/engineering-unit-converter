'use client';

import HVACConverter from "@/components/specialized/HVACConverter";

export default function HVACUnitConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          HVAC Unit Converter
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <HVACConverter />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About HVAC Unit Conversions
          </h2>
          <p className="mb-4">
            HVAC (Heating, Ventilation, and Air Conditioning) engineering
            requires precise calculations for system design, equipment
            selection, and performance evaluation. Our HVAC unit converter
            provides accurate conversions for the most commonly used units in
            the HVAC industry.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Key HVAC Conversions
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>BTU to Tons:</strong> Convert between British Thermal
              Units (BTU) and refrigeration tons for cooling capacity
              calculations.
            </li>
            <li className="mb-2">
              <strong>CFM Calculations:</strong> Calculate Cubic Feet per Minute
              for airflow requirements in ventilation systems.
            </li>
            <li className="mb-2">
              <strong>Static Pressure:</strong> Convert between different
              pressure units used in duct design and fan selection.
            </li>
            <li className="mb-2">
              <strong>Temperature Conversions:</strong> Convert between
              Fahrenheit, Celsius, and Kelvin for HVAC applications.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Why HVAC Engineers Need Precise Conversions
          </h3>
          <p className="mb-4">
            Accurate unit conversions are critical in HVAC engineering to ensure
            proper system sizing, energy efficiency, and occupant comfort. Even
            small errors in calculations can lead to significant issues in
            system performance, energy consumption, and operational costs.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Common HVAC Conversion Formulas
          </h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2">
              <strong>BTU/hr to Tons:</strong> Tons = BTU/hr ÷ 12,000
            </p>
            <p className="mb-2">
              <strong>CFM to L/s:</strong> L/s = CFM × 0.4719
            </p>
            <p className="mb-2">
              <strong>Inches of Water Column to Pascals:</strong> Pa = inWC ×
              249.09
            </p>
          </div>

          <p className="text-sm text-gray-600 italic">
            This calculator is designed for professional HVAC engineers, HVAC
            technicians, mechanical engineers specializing in building systems,
            and students studying HVAC design and applications.
          </p>
        </div>
      </div>
    </div>
  );
}