import React, { useState } from 'react';
import { Decimal } from 'decimal.js';
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";
import { toStringOrNumber } from '@/lib/conversion';

type CalculationType = 'pressure' | 'flowrate' | 'density' | 'viscosity';

const PetroleumConverter: React.FC = () => {
  const [calculationType, setCalculationType] = useState<CalculationType>('pressure');
  
  // Pressure conversion states
  const [pressureValue, setPressureValue] = useState<string>('');
  const [pressureUnit, setPressureUnit] = useState<'psi' | 'bar' | 'kPa' | 'MPa'>('psi');
  const [pressureResult, setPressureResult] = useState<string>('');
  
  // Flowrate conversion states
  const [flowrateValue, setFlowrateValue] = useState<string>('');
  const [flowrateUnit, setFlowrateUnit] = useState<'bpd' | 'm3h' | 'lpm' | 'gpm'>('bpd');
  const [flowrateResult, setFlowrateResult] = useState<string>('');
  
  // Density conversion states
  const [densityValue, setDensityValue] = useState<string>('');
  const [densityUnit, setDensityUnit] = useState<'kgm3' | 'lbft3' | 'sg'>('kgm3');
  const [densityResult, setDensityResult] = useState<string>('');
  
  // Viscosity conversion states
  const [viscosityValue, setViscosityValue] = useState<string>('');
  const [viscosityUnit, setViscosityUnit] = useState<'cp' | 'pas' | 'poise'>('cp');
  const [viscosityResult, setViscosityResult] = useState<string>('');

  // Validate input is a number
  const isValidNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== '';
  };

  // Convert pressure
  const convertPressure = () => {
    if (!isValidNumber(pressureValue)) {
      setPressureResult('Please enter a valid pressure value');
      return;
    }

    try {
      const value = new Decimal(pressureValue);
      let psi: Decimal = new Decimal(0);
      let bar: Decimal;
      let kPa: Decimal;
      let MPa: Decimal;
      
      // Convert to base unit (psi) first
      if (pressureUnit === 'psi') {
        psi = value;
      } else if (pressureUnit === 'bar') {
        psi = value.times(14.5038); // 1 bar = 14.5038 psi
      } else if (pressureUnit === 'kPa') {
        psi = value.times(0.145038); // 1 kPa = 0.145038 psi
      } else if (pressureUnit === 'MPa') {
        psi = value.times(145.038); // 1 MPa = 145.038 psi
      }
      
      // Convert from base unit to all units
      bar = psi.dividedBy(14.5038);
      kPa = psi.dividedBy(0.145038);
      MPa = psi.dividedBy(145.038);
      
      const result = `${toStringOrNumber(psi)} psi = ${toStringOrNumber(bar)} bar = ${toStringOrNumber(kPa)} kPa = ${toStringOrNumber(MPa)} MPa`;
      setPressureResult(result);
    } catch (error) {
      setPressureResult('Error in conversion');
    }
  };

  // Convert flowrate
  const convertFlowrate = () => {
    if (!isValidNumber(flowrateValue)) {
      setFlowrateResult('Please enter a valid flowrate value');
      return;
    }

    try {
      const value = new Decimal(flowrateValue);
      let bpd: Decimal = new Decimal(0);
      let m3h: Decimal;
      let lpm: Decimal;
      let gpm: Decimal;
      
      // Convert to base unit (bpd - barrels per day) first
      if (flowrateUnit === 'bpd') {
        bpd = value;
      } else if (flowrateUnit === 'm3h') {
        bpd = value.times(151.4167); // 1 m³/h ≈ 151.4167 bpd
      } else if (flowrateUnit === 'lpm') {
        bpd = value.times(9.085); // 1 L/min ≈ 9.085 bpd
      } else if (flowrateUnit === 'gpm') {
        bpd = value.times(34.2857); // 1 gpm ≈ 34.2857 bpd
      }
      
      // Convert from base unit to all units
      m3h = bpd.dividedBy(151.4167);
      lpm = bpd.dividedBy(9.085);
      gpm = bpd.dividedBy(34.2857);
      
      const result = `${toStringOrNumber(bpd)} bpd = ${toStringOrNumber(m3h)} m³/h = ${toStringOrNumber(lpm)} L/min = ${toStringOrNumber(gpm)} gpm`;
      setFlowrateResult(result);
    } catch (error) {
      setFlowrateResult('Error in conversion');
    }
  };

  // Convert density
  const convertDensity = () => {
    if (!isValidNumber(densityValue)) {
      setDensityResult('Please enter a valid density value');
      return;
    }

    try {
      const value = new Decimal(densityValue);
      let kgm3: Decimal = new Decimal(0);
      let lbft3: Decimal;
      let sg: Decimal;
      
      // Convert to base unit (kg/m³) first
      if (densityUnit === 'kgm3') {
        kgm3 = value;
      } else if (densityUnit === 'lbft3') {
        kgm3 = value.times(16.0185); // 1 lb/ft³ ≈ 16.0185 kg/m³
      } else if (densityUnit === 'sg') {
        kgm3 = value.times(1000); // SG of 1.0 = 1000 kg/m³ (water density)
      }
      
      // Convert from base unit to all units
      lbft3 = kgm3.dividedBy(16.0185);
      sg = kgm3.dividedBy(1000);
      
      const result = `${toStringOrNumber(kgm3)} kg/m³ = ${toStringOrNumber(lbft3)} lb/ft³ = ${toStringOrNumber(sg)} SG`;
      setDensityResult(result);
    } catch (error) {
      setDensityResult('Error in conversion');
    }
  };

  // Convert viscosity
  const convertViscosity = () => {
    if (!isValidNumber(viscosityValue)) {
      setViscosityResult('Please enter a valid viscosity value');
      return;
    }

    try {
      const value = new Decimal(viscosityValue);
      let cp: Decimal = new Decimal(0);
      let pas: Decimal;
      let poise: Decimal;
      
      // Convert to base unit (centipoise - cp) first
      if (viscosityUnit === 'cp') {
        cp = value;
      } else if (viscosityUnit === 'pas') {
        cp = value.times(1000); // 1 Pa·s = 1000 cp
      } else if (viscosityUnit === 'poise') {
        cp = value.times(100); // 1 poise = 100 cp
      }
      
      // Convert from base unit to all units
      pas = cp.dividedBy(1000);
      poise = cp.dividedBy(100);
      
      const result = `${toStringOrNumber(cp)} cP = ${toStringOrNumber(pas)} Pa·s = ${toStringOrNumber(poise)} poise`;
      setViscosityResult(result);
    } catch (error) {
      setViscosityResult('Error in conversion');
    }
  };

  return (
    <div className="space-y-6">
      <Tabs 
        tabs={[
          { id: 'pressure', label: 'Pressure' },
          { id: 'flowrate', label: 'Flowrate' },
          { id: 'density', label: 'Density' },
          { id: 'viscosity', label: 'Viscosity' }
        ]}
        defaultTab={calculationType}
        onChange={(tab: string) => setCalculationType(tab as CalculationType)}
      />
      
      {/* Pressure Conversion */}
      {calculationType === 'pressure' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Pressure Value:</label>
                <Input 
                  type="number" 
                  placeholder="Enter pressure value" 
                  value={pressureValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPressureValue(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select 
                  value={pressureUnit} 
                  onChange={(value: string) => setPressureUnit(value as 'psi' | 'bar' | 'kPa' | 'MPa')}
                  options={[
                    { value: 'psi', label: 'PSI' },
                    { value: 'bar', label: 'Bar' },
                    { value: 'kPa', label: 'kPa' },
                    { value: 'MPa', label: 'MPa' }
                  ]}
                />
              </div>
              
              <Button onClick={convertPressure} className="w-full">Convert</Button>
              
              {pressureResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm text-gray-600 mt-1">{pressureResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
      
      {/* Flowrate Conversion */}
      {calculationType === 'flowrate' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Flowrate Value:</label>
                <Input 
                  type="number" 
                  placeholder="Enter flowrate value" 
                  value={flowrateValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFlowrateValue(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select 
                  value={flowrateUnit} 
                  onChange={(value: string) => setFlowrateUnit(value as 'bpd' | 'm3h' | 'lpm' | 'gpm')}
                  options={[
                    { value: 'bpd', label: 'Barrels per day (BPD)' },
                    { value: 'm3h', label: 'Cubic meters per hour (m³/h)' },
                    { value: 'lpm', label: 'Liters per minute (L/min)' },
                    { value: 'gpm', label: 'Gallons per minute (GPM)' }
                  ]}
                />
              </div>
              
              <Button onClick={convertFlowrate} className="w-full">Convert</Button>
              
              {flowrateResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm text-gray-600 mt-1">{flowrateResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
      
      {/* Density Conversion */}
      {calculationType === 'density' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Density Value:</label>
                <Input 
                  type="number" 
                  placeholder="Enter density value" 
                  value={densityValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDensityValue(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select 
                  value={densityUnit} 
                  onChange={(value: string) => setDensityUnit(value as 'kgm3' | 'lbft3' | 'sg')}
                  options={[
                    { value: 'kgm3', label: 'kg/m³' },
                    { value: 'lbft3', label: 'lb/ft³' },
                    { value: 'sg', label: 'Specific Gravity (SG)' }
                  ]}
                />
              </div>
              
              <Button onClick={convertDensity} className="w-full">Convert</Button>
              
              {densityResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm text-gray-600 mt-1">{densityResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
      
      {/* Viscosity Conversion */}
      {calculationType === 'viscosity' && (
        <Card>
          <div className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Viscosity Value:</label>
                <Input 
                  type="number" 
                  placeholder="Enter viscosity value" 
                  value={viscosityValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setViscosityValue(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Unit:</label>
                <Select 
                  value={viscosityUnit} 
                  onChange={(value: string) => setViscosityUnit(value as 'cp' | 'pas' | 'poise')}
                  options={[
                    { value: 'cp', label: 'Centipoise (cP)' },
                    { value: 'pas', label: 'Pascal-second (Pa·s)' },
                    { value: 'poise', label: 'Poise' }
                  ]}
                />
              </div>
              
              <Button onClick={convertViscosity} className="w-full">Convert</Button>
              
              {viscosityResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-semibold">Conversion Result:</p>
                  <p className="text-sm text-gray-600 mt-1">{viscosityResult}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PetroleumConverter;