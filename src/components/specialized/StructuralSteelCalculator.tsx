import React, { useState } from 'react';
import { Decimal } from 'decimal.js';
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";

type CalculationType = 'beamSize' | 'loadCalculation' | 'momentOfInertia' | 'sectionModulus';

// Common steel beam profiles with their properties
const beamProfiles = {
  'W8x10': { depth: 8.25, weight: 10, inertia: 30.8, sectionModulus: 7.81 },
  'W10x12': { depth: 9.87, weight: 12, inertia: 53.8, sectionModulus: 10.9 },
  'W12x16': { depth: 12.0, weight: 16, inertia: 103, sectionModulus: 17.1 },
  'W14x22': { depth: 13.74, weight: 22, inertia: 199, sectionModulus: 29.0 },
  'W16x26': { depth: 15.69, weight: 26, inertia: 301, sectionModulus: 38.4 },
  'W18x35': { depth: 17.7, weight: 35, inertia: 510, sectionModulus: 57.6 },
  'W21x44': { depth: 20.83, weight: 44, inertia: 843, sectionModulus: 81.6 },
  'W24x55': { depth: 23.57, weight: 55, inertia: 1350, sectionModulus: 114 },
  'W27x84': { depth: 26.92, weight: 84, inertia: 2850, sectionModulus: 209 },
  'W30x99': { depth: 29.65, weight: 99, inertia: 3990, sectionModulus: 269 },
};

const StructuralSteelCalculator: React.FC = () => {
  const [calculationType, setCalculationType] = useState<CalculationType>('beamSize');
  
  // Beam size selection states
  const [span, setSpan] = useState<string>('');
  const [load, setLoad] = useState<string>('');
  const [allowableDeflection, setAllowableDeflection] = useState<string>('');
  const [beamSizeResult, setBeamSizeResult] = useState<string>('');
  
  // Load calculation states
  const [beamLength, setBeamLength] = useState<string>('');
  const [totalLoad, setTotalLoad] = useState<string>('');
  const [loadType, setLoadType] = useState<'uniform' | 'point'>('uniform');
  const [loadResult, setLoadResult] = useState<string>('');
  
  // Moment of inertia states
  const [beamProfile, setBeamProfile] = useState<string>('W8x10');
  const [inertiaResult, setInertiaResult] = useState<string>('');
  
  // Section modulus states
  const [modulusProfile, setModulusProfile] = useState<string>('W8x10');
  const [modulusResult, setModulusResult] = useState<string>('');

  // Validate input is a number
  const isValidNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== '';
  };

  // Calculate required beam size
  const calculateBeamSize = () => {
    if (!isValidNumber(span) || !isValidNumber(load) || !isValidNumber(allowableDeflection)) {
      setBeamSizeResult('Please enter valid values for span, load, and allowable deflection');
      return;
    }

    try {
      const spanValue = new Decimal(span);
      const loadValue = new Decimal(load);
      const deflectionValue = new Decimal(allowableDeflection);
      
      // Calculate required moment of inertia (I) using deflection formula
      // δ = 5wL⁴/(384EI), rearranged to I = 5wL⁴/(384Eδ)
      // Using E = 29,000,000 psi for steel
      const E = new Decimal(29000000);
      const requiredI = loadValue.times(spanValue.pow(4)).times(5).dividedBy(E.times(384).times(deflectionValue));
      
      // Find suitable beam from profiles
      const suitableBeams = Object.entries(beamProfiles)
        .filter(([, props]) => new Decimal(props.inertia).greaterThanOrEqualTo(requiredI))
        .sort((a, b) => a[1].weight - b[1].weight);
      
      if (suitableBeams.length === 0) {
        setBeamSizeResult('No standard beam meets the requirements. Consider using multiple beams or a custom solution.');
      } else {
        const recommendedBeam = suitableBeams[0];
        setBeamSizeResult(`Recommended beam: ${recommendedBeam[0]} (Depth: ${recommendedBeam[1].depth} in, Weight: ${recommendedBeam[1].weight} lb/ft)\nRequired moment of inertia: ${requiredI.toFixed(2)} in⁴\nBeam moment of inertia: ${recommendedBeam[1].inertia} in⁴`);
      }
    } catch {
      setBeamSizeResult("Error in calculation");
    }
  };

  // Calculate load per meter
  const calculateLoad = () => {
    if (!isValidNumber(beamLength) || !isValidNumber(totalLoad)) {
      setLoadResult('Please enter valid values for beam length and total load');
      return;
    }

    try {
      const lengthValue = new Decimal(beamLength);
      const loadValue = new Decimal(totalLoad);
      
      if (loadType === 'uniform') {
        // For uniform load, simply divide total load by length
        const loadPerMeter = loadValue.dividedBy(lengthValue);
        setLoadResult(`Uniform load: ${loadPerMeter.toFixed(2)} lb/ft\nBending moment: ${loadValue.times(lengthValue).times(lengthValue).dividedBy(8).toFixed(2)} lb-ft\nShear force: ${loadValue.times(lengthValue).dividedBy(2).toFixed(2)} lb`);
      } else {
        // For point load at center, calculate equivalent uniform load
        setLoadResult(`Point load at center: ${loadValue.toFixed(2)} lb\nBending moment: ${loadValue.times(lengthValue).dividedBy(4).toFixed(2)} lb-ft\nShear force: ${loadValue.dividedBy(2).toFixed(2)} lb`);
      }
    } catch {
      setLoadResult("Error in calculation");
    }
  };

  // Calculate moment of inertia
  const calculateInertia = () => {
    try {
      const selectedBeam = beamProfiles[beamProfile as keyof typeof beamProfiles];
      setInertiaResult(`Beam profile: ${beamProfile}\nMoment of inertia: ${selectedBeam.inertia} in⁴\nDepth: ${selectedBeam.depth} in\nWeight: ${selectedBeam.weight} lb/ft`);
    } catch {
      setInertiaResult("Error in calculation");
    }
  };

  // Calculate section modulus
  const calculateModulus = () => {
    try {
      const selectedBeam = beamProfiles[modulusProfile as keyof typeof beamProfiles];
      setModulusResult(`Beam profile: ${modulusProfile}\nSection modulus: ${selectedBeam.sectionModulus} in³\nMoment of inertia: ${selectedBeam.inertia} in⁴\nDepth: ${selectedBeam.depth} in`);
    } catch {
      setModulusResult("Error in calculation");
    }
  };

  return (
    <div className="space-y-6">
      <Tabs
        tabs={[
          { id: 'beamSize', label: 'Beam Size' },
          { id: 'loadCalculation', label: 'Load Calc' },
          { id: 'momentOfInertia', label: 'Moment of Inertia' },
          { id: 'sectionModulus', label: 'Section Modulus' },
        ]}
        defaultTab="beamSize"
        onChange={(value) => setCalculationType(value as CalculationType)}
        className="mb-4"
      />

      {calculationType === 'beamSize' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Span (ft):</label>
                <Input
                  type="number"
                  placeholder="Enter beam span"
                  value={span}
                  onChange={(e) => setSpan(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Uniform Load (lb/ft):</label>
                <Input
                  type="number"
                  placeholder="Enter uniform load"
                  value={load}
                  onChange={(e) => setLoad(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Allowable Deflection (in):</label>
                <Input
                  type="number"
                  placeholder="Enter allowable deflection"
                  value={allowableDeflection}
                  onChange={(e) => setAllowableDeflection(e.target.value)}
                />
              </div>

              <Button onClick={calculateBeamSize} className="w-full">Calculate Required Beam</Button>

              {beamSizeResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Beam Size Result:</p>
                  <pre className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{beamSizeResult}</pre>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === 'loadCalculation' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Beam Length (ft):</label>
                <Input
                  type="number"
                  placeholder="Enter beam length"
                  value={beamLength}
                  onChange={(e) => setBeamLength(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Total Load (lb):</label>
                <Input
                  type="number"
                  placeholder="Enter total load"
                  value={totalLoad}
                  onChange={(e) => setTotalLoad(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Load Type:</label>
                <Select
                  options={[
                    { value: 'uniform', label: 'Uniform Load' },
                    { value: 'point', label: 'Point Load (Center)' },
                  ]}
                  value={loadType}
                  onChange={(value) => setLoadType(value as 'uniform' | 'point')}
                  fullWidth
                />
              </div>

              <Button onClick={calculateLoad} className="w-full">Calculate Load Effects</Button>

              {loadResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Load Calculation Result:</p>
                  <pre className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{loadResult}</pre>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === 'momentOfInertia' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Beam Profile:</label>
                <Select
                  options={Object.keys(beamProfiles).map((profile) => ({ value: profile, label: profile }))}
                  value={beamProfile}
                  onChange={(value) => setBeamProfile(value)}
                  fullWidth
                />
              </div>

              <Button onClick={calculateInertia} className="w-full">Get Moment of Inertia</Button>

              {inertiaResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Moment of Inertia:</p>
                  <pre className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{inertiaResult}</pre>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {calculationType === 'sectionModulus' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Beam Profile:</label>
                <Select
                  options={Object.keys(beamProfiles).map((profile) => ({ value: profile, label: profile }))}
                  value={modulusProfile}
                  onChange={(value) => setModulusProfile(value)}
                  fullWidth
                />
              </div>

              <Button onClick={calculateModulus} className="w-full">Get Section Modulus</Button>

              {modulusResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Section Modulus:</p>
                  <pre className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{modulusResult}</pre>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default StructuralSteelCalculator;