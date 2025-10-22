import CivilConverterClient from "./CivilConverterClient";

export default function CivilEngineeringConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Civil Engineering Unit Converter
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <CivilConverterClient />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Civil Engineering Calculations
          </h2>
          <p className="mb-4">
            Our civil engineering converter provides specialized tools for civil
            engineers, construction managers, and contractors. These calculators
            help with common civil engineering tasks including material
            estimation, strength calculations, and unit conversions.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Key Civil Engineering Conversions
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Rebar Weight:</strong> Calculate the weight of
              reinforcement bars based on diameter and length.
            </li>
            <li className="mb-2">
              <strong>Concrete Volume:</strong> Determine concrete volume
              requirements for various structural elements.
            </li>
            <li className="mb-2">
              <strong>PSI to MPa:</strong> Convert between pounds per square
              inch and megapascals for material strength specifications.
            </li>
            <li className="mb-2">
              <strong>Area and Volume:</strong> Convert between different area
              and volume units used in construction.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Common Civil Engineering Formulas
          </h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="mb-2">
              <strong>Rebar Weight:</strong> Weight (kg) = π × (d/2)² × L × 7850
              / 1000000
            </p>
            <p className="mb-2">
              <strong>Concrete Volume:</strong> Volume (m³) = Length (m) × Width
              (m) × Height (m)
            </p>
            <p className="mb-2">
              <strong>PSI to MPa:</strong> MPa = PSI × 0.00689476
            </p>
            <p className="mb-2">
              <strong>Concrete Mix Ratio:</strong> Cement : Sand : Aggregate = 1
              : 2 : 4 (typical ratio)
            </p>
          </div>

          <p className="text-sm text-gray-600 italic">
            These calculators are designed for civil engineers, structural
            engineers, construction managers, contractors, and students working
            on construction projects, structural design, and material
            estimation.
          </p>
        </div>
      </div>
    </div>
  );
}
