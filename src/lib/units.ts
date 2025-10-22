// Engineering Unit Conversion Data Model

// Define unit types
export type UnitType = 
  | 'length' 
  | 'mass' 
  | 'time' 
  | 'temperature' 
  | 'force' 
  | 'pressure' 
  | 'energy' 
  | 'power'
  | 'electric_current'
  | 'voltage'
  | 'resistance'
  | 'frequency'
  | 'area'
  | 'volume'
  | 'velocity'
  | 'acceleration'
  | 'angle'
  | 'viscosity'
  | 'density'
  | 'flow_rate';

// Define unit interface
export interface Unit {
  id: string;
  name: string;
  symbol: string;
  type: UnitType;
  conversionToBase: (value: number) => number;
  conversionFromBase: (value: number) => number;
}

// Length units
export const lengthUnits: Unit[] = [
  {
    id: 'meter',
    name: 'Meter',
    symbol: 'm',
    type: 'length',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilometer',
    name: 'Kilometer',
    symbol: 'km',
    type: 'length',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'centimeter',
    name: 'Centimeter',
    symbol: 'cm',
    type: 'length',
    conversionToBase: (value) => value / 100,
    conversionFromBase: (value) => value * 100,
  },
  {
    id: 'millimeter',
    name: 'Millimeter',
    symbol: 'mm',
    type: 'length',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'micrometer',
    name: 'Micrometer',
    symbol: 'μm',
    type: 'length',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
  {
    id: 'nanometer',
    name: 'Nanometer',
    symbol: 'nm',
    type: 'length',
    conversionToBase: (value) => value / 1000000000,
    conversionFromBase: (value) => value * 1000000000,
  },
  {
    id: 'inch',
    name: 'Inch',
    symbol: 'in',
    type: 'length',
    conversionToBase: (value) => value * 0.0254,
    conversionFromBase: (value) => value / 0.0254,
  },
  {
    id: 'foot',
    name: 'Foot',
    symbol: 'ft',
    type: 'length',
    conversionToBase: (value) => value * 0.3048,
    conversionFromBase: (value) => value / 0.3048,
  },
  {
    id: 'yard',
    name: 'Yard',
    symbol: 'yd',
    type: 'length',
    conversionToBase: (value) => value * 0.9144,
    conversionFromBase: (value) => value / 0.9144,
  },
  {
    id: 'mile',
    name: 'Mile',
    symbol: 'mi',
    type: 'length',
    conversionToBase: (value) => value * 1609.344,
    conversionFromBase: (value) => value / 1609.344,
  },
];

// Mass units
export const massUnits: Unit[] = [
  {
    id: 'kilogram',
    name: 'Kilogram',
    symbol: 'kg',
    type: 'mass',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'gram',
    name: 'Gram',
    symbol: 'g',
    type: 'mass',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'milligram',
    name: 'Milligram',
    symbol: 'mg',
    type: 'mass',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
  {
    id: 'metric_ton',
    name: 'Metric Ton',
    symbol: 't',
    type: 'mass',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'pound',
    name: 'Pound',
    symbol: 'lb',
    type: 'mass',
    conversionToBase: (value) => value * 0.45359237,
    conversionFromBase: (value) => value / 0.45359237,
  },
  {
    id: 'ounce',
    name: 'Ounce',
    symbol: 'oz',
    type: 'mass',
    conversionToBase: (value) => value * 0.028349523125,
    conversionFromBase: (value) => value / 0.028349523125,
  },
];

// Temperature units
export const temperatureUnits: Unit[] = [
  {
    id: 'celsius',
    name: 'Celsius',
    symbol: '°C',
    type: 'temperature',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'fahrenheit',
    name: 'Fahrenheit',
    symbol: '°F',
    type: 'temperature',
    conversionToBase: (value) => (value - 32) * (5/9),
    conversionFromBase: (value) => value * (9/5) + 32,
  },
  {
    id: 'kelvin',
    name: 'Kelvin',
    symbol: 'K',
    type: 'temperature',
    conversionToBase: (value) => value - 273.15,
    conversionFromBase: (value) => value + 273.15,
  },
];

// Force units
export const forceUnits: Unit[] = [
  {
    id: 'newton',
    name: 'Newton',
    symbol: 'N',
    type: 'force',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilonewton',
    name: 'Kilonewton',
    symbol: 'kN',
    type: 'force',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'pound_force',
    name: 'Pound-force',
    symbol: 'lbf',
    type: 'force',
    conversionToBase: (value) => value * 4.4482216153,
    conversionFromBase: (value) => value / 4.4482216153,
  },
  {
    id: 'dyne',
    name: 'Dyne',
    symbol: 'dyn',
    type: 'force',
    conversionToBase: (value) => value * 0.00001,
    conversionFromBase: (value) => value / 0.00001,
  },
];

// Pressure units
export const pressureUnits: Unit[] = [
  {
    id: 'pascal',
    name: 'Pascal',
    symbol: 'Pa',
    type: 'pressure',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilopascal',
    name: 'Kilopascal',
    symbol: 'kPa',
    type: 'pressure',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'megapascal',
    name: 'Megapascal',
    symbol: 'MPa',
    type: 'pressure',
    conversionToBase: (value) => value * 1000000,
    conversionFromBase: (value) => value / 1000000,
  },
  {
    id: 'bar',
    name: 'Bar',
    symbol: 'bar',
    type: 'pressure',
    conversionToBase: (value) => value * 100000,
    conversionFromBase: (value) => value / 100000,
  },
  {
    id: 'psi',
    name: 'Pounds per Square Inch',
    symbol: 'psi',
    type: 'pressure',
    conversionToBase: (value) => value * 6894.7572932,
    conversionFromBase: (value) => value / 6894.7572932,
  },
  {
    id: 'atmosphere',
    name: 'Atmosphere',
    symbol: 'atm',
    type: 'pressure',
    conversionToBase: (value) => value * 101325,
    conversionFromBase: (value) => value / 101325,
  },
];

// Energy units
export const energyUnits: Unit[] = [
  {
    id: 'joule',
    name: 'Joule',
    symbol: 'J',
    type: 'energy',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilojoule',
    name: 'Kilojoule',
    symbol: 'kJ',
    type: 'energy',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'calorie',
    name: 'Calorie',
    symbol: 'cal',
    type: 'energy',
    conversionToBase: (value) => value * 4.184,
    conversionFromBase: (value) => value / 4.184,
  },
  {
    id: 'kilocalorie',
    name: 'Kilocalorie',
    symbol: 'kcal',
    type: 'energy',
    conversionToBase: (value) => value * 4184,
    conversionFromBase: (value) => value / 4184,
  },
  {
    id: 'watt_hour',
    name: 'Watt-hour',
    symbol: 'Wh',
    type: 'energy',
    conversionToBase: (value) => value * 3600,
    conversionFromBase: (value) => value / 3600,
  },
  {
    id: 'kilowatt_hour',
    name: 'Kilowatt-hour',
    symbol: 'kWh',
    type: 'energy',
    conversionToBase: (value) => value * 3600000,
    conversionFromBase: (value) => value / 3600000,
  },
  {
    id: 'electron_volt',
    name: 'Electron Volt',
    symbol: 'eV',
    type: 'energy',
    conversionToBase: (value) => value * 1.602176634e-19,
    conversionFromBase: (value) => value / 1.602176634e-19,
  },
  {
    id: 'british_thermal_unit',
    name: 'British Thermal Unit',
    symbol: 'BTU',
    type: 'energy',
    conversionToBase: (value) => value * 1055.05585262,
    conversionFromBase: (value) => value / 1055.05585262,
  },
];

// Power units
export const powerUnits: Unit[] = [
  {
    id: 'watt',
    name: 'Watt',
    symbol: 'W',
    type: 'power',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilowatt',
    name: 'Kilowatt',
    symbol: 'kW',
    type: 'power',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'megawatt',
    name: 'Megawatt',
    symbol: 'MW',
    type: 'power',
    conversionToBase: (value) => value * 1000000,
    conversionFromBase: (value) => value / 1000000,
  },
  {
    id: 'horsepower',
    name: 'Horsepower',
    symbol: 'hp',
    type: 'power',
    conversionToBase: (value) => value * 745.699872,
    conversionFromBase: (value) => value / 745.699872,
  },
];

// Electric current units
export const electricCurrentUnits: Unit[] = [
  {
    id: 'ampere',
    name: 'Ampere',
    symbol: 'A',
    type: 'electric_current',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'milliampere',
    name: 'Milliampere',
    symbol: 'mA',
    type: 'electric_current',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'microampere',
    name: 'Microampere',
    symbol: 'μA',
    type: 'electric_current',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
];

// Voltage units
export const voltageUnits: Unit[] = [
  {
    id: 'volt',
    name: 'Volt',
    symbol: 'V',
    type: 'voltage',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'millivolt',
    name: 'Millivolt',
    symbol: 'mV',
    type: 'voltage',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'kilovolt',
    name: 'Kilovolt',
    symbol: 'kV',
    type: 'voltage',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
];

// Resistance units
export const resistanceUnits: Unit[] = [
  {
    id: 'ohm',
    name: 'Ohm',
    symbol: 'Ω',
    type: 'resistance',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kiloohm',
    name: 'Kiloohm',
    symbol: 'kΩ',
    type: 'resistance',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'megaohm',
    name: 'Megaohm',
    symbol: 'MΩ',
    type: 'resistance',
    conversionToBase: (value) => value * 1000000,
    conversionFromBase: (value) => value / 1000000,
  },
];

// Frequency units
export const frequencyUnits: Unit[] = [
  {
    id: 'hertz',
    name: 'Hertz',
    symbol: 'Hz',
    type: 'frequency',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilohertz',
    name: 'Kilohertz',
    symbol: 'kHz',
    type: 'frequency',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'megahertz',
    name: 'Megahertz',
    symbol: 'MHz',
    type: 'frequency',
    conversionToBase: (value) => value * 1000000,
    conversionFromBase: (value) => value / 1000000,
  },
  {
    id: 'gigahertz',
    name: 'Gigahertz',
    symbol: 'GHz',
    type: 'frequency',
    conversionToBase: (value) => value * 1000000000,
    conversionFromBase: (value) => value / 1000000000,
  },
];

// Area units
export const areaUnits: Unit[] = [
  {
    id: 'square_meter',
    name: 'Square Meter',
    symbol: 'm²',
    type: 'area',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'square_kilometer',
    name: 'Square Kilometer',
    symbol: 'km²',
    type: 'area',
    conversionToBase: (value) => value * 1000000,
    conversionFromBase: (value) => value / 1000000,
  },
  {
    id: 'square_centimeter',
    name: 'Square Centimeter',
    symbol: 'cm²',
    type: 'area',
    conversionToBase: (value) => value / 10000,
    conversionFromBase: (value) => value * 10000,
  },
  {
    id: 'square_millimeter',
    name: 'Square Millimeter',
    symbol: 'mm²',
    type: 'area',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
  {
    id: 'square_foot',
    name: 'Square Foot',
    symbol: 'ft²',
    type: 'area',
    conversionToBase: (value) => value * 0.09290304,
    conversionFromBase: (value) => value / 0.09290304,
  },
  {
    id: 'square_inch',
    name: 'Square Inch',
    symbol: 'in²',
    type: 'area',
    conversionToBase: (value) => value * 0.00064516,
    conversionFromBase: (value) => value / 0.00064516,
  },
  {
    id: 'acre',
    name: 'Acre',
    symbol: 'ac',
    type: 'area',
    conversionToBase: (value) => value * 4046.8564224,
    conversionFromBase: (value) => value / 4046.8564224,
  },
  {
    id: 'hectare',
    name: 'Hectare',
    symbol: 'ha',
    type: 'area',
    conversionToBase: (value) => value * 10000,
    conversionFromBase: (value) => value / 10000,
  },
];

// Volume units
export const volumeUnits: Unit[] = [
  {
    id: 'cubic_meter',
    name: 'Cubic Meter',
    symbol: 'm³',
    type: 'volume',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'liter',
    name: 'Liter',
    symbol: 'L',
    type: 'volume',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'milliliter',
    name: 'Milliliter',
    symbol: 'mL',
    type: 'volume',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
  {
    id: 'cubic_centimeter',
    name: 'Cubic Centimeter',
    symbol: 'cm³',
    type: 'volume',
    conversionToBase: (value) => value / 1000000,
    conversionFromBase: (value) => value * 1000000,
  },
  {
    id: 'cubic_foot',
    name: 'Cubic Foot',
    symbol: 'ft³',
    type: 'volume',
    conversionToBase: (value) => value * 0.028316846592,
    conversionFromBase: (value) => value / 0.028316846592,
  },
  {
    id: 'cubic_inch',
    name: 'Cubic Inch',
    symbol: 'in³',
    type: 'volume',
    conversionToBase: (value) => value * 0.000016387064,
    conversionFromBase: (value) => value / 0.000016387064,
  },
  {
    id: 'gallon_us',
    name: 'US Gallon',
    symbol: 'gal',
    type: 'volume',
    conversionToBase: (value) => value * 0.003785411784,
    conversionFromBase: (value) => value / 0.003785411784,
  },
  {
    id: 'gallon_uk',
    name: 'UK Gallon',
    symbol: 'gal (UK)',
    type: 'volume',
    conversionToBase: (value) => value * 0.00454609,
    conversionFromBase: (value) => value / 0.00454609,
  },
];

// Velocity units
export const velocityUnits: Unit[] = [
  {
    id: 'meter_per_second',
    name: 'Meter per Second',
    symbol: 'm/s',
    type: 'velocity',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'kilometer_per_hour',
    name: 'Kilometer per Hour',
    symbol: 'km/h',
    type: 'velocity',
    conversionToBase: (value) => value / 3.6,
    conversionFromBase: (value) => value * 3.6,
  },
  {
    id: 'mile_per_hour',
    name: 'Mile per Hour',
    symbol: 'mph',
    type: 'velocity',
    conversionToBase: (value) => value * 0.44704,
    conversionFromBase: (value) => value / 0.44704,
  },
  {
    id: 'foot_per_second',
    name: 'Foot per Second',
    symbol: 'ft/s',
    type: 'velocity',
    conversionToBase: (value) => value * 0.3048,
    conversionFromBase: (value) => value / 0.3048,
  },
  {
    id: 'knot',
    name: 'Knot',
    symbol: 'kn',
    type: 'velocity',
    conversionToBase: (value) => value * 0.514444444,
    conversionFromBase: (value) => value / 0.514444444,
  },
];

// Acceleration units
export const accelerationUnits: Unit[] = [
  {
    id: 'meter_per_second_squared',
    name: 'Meter per Second Squared',
    symbol: 'm/s²',
    type: 'acceleration',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'foot_per_second_squared',
    name: 'Foot per Second Squared',
    symbol: 'ft/s²',
    type: 'acceleration',
    conversionToBase: (value) => value * 0.3048,
    conversionFromBase: (value) => value / 0.3048,
  },
  {
    id: 'g_force',
    name: 'G-force',
    symbol: 'g',
    type: 'acceleration',
    conversionToBase: (value) => value * 9.80665,
    conversionFromBase: (value) => value / 9.80665,
  },
];

// Angle units
export const angleUnits: Unit[] = [
  {
    id: 'degree',
    name: 'Degree',
    symbol: '°',
    type: 'angle',
    conversionToBase: (value) => value * (Math.PI / 180),
    conversionFromBase: (value) => value * (180 / Math.PI),
  },
  {
    id: 'radian',
    name: 'Radian',
    symbol: 'rad',
    type: 'angle',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'gradian',
    name: 'Gradian',
    symbol: 'grad',
    type: 'angle',
    conversionToBase: (value) => value * (Math.PI / 200),
    conversionFromBase: (value) => value * (200 / Math.PI),
  },
];

// Viscosity units
export const viscosityUnits: Unit[] = [
  {
    id: 'pascal_second',
    name: 'Pascal Second',
    symbol: 'Pa·s',
    type: 'viscosity',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'poise',
    name: 'Poise',
    symbol: 'P',
    type: 'viscosity',
    conversionToBase: (value) => value / 10,
    conversionFromBase: (value) => value * 10,
  },
  {
    id: 'centipoise',
    name: 'Centipoise',
    symbol: 'cP',
    type: 'viscosity',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
];

// Density units
export const densityUnits: Unit[] = [
  {
    id: 'kilogram_per_cubic_meter',
    name: 'Kilogram per Cubic Meter',
    symbol: 'kg/m³',
    type: 'density',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'gram_per_cubic_centimeter',
    name: 'Gram per Cubic Centimeter',
    symbol: 'g/cm³',
    type: 'density',
    conversionToBase: (value) => value * 1000,
    conversionFromBase: (value) => value / 1000,
  },
  {
    id: 'pound_per_cubic_foot',
    name: 'Pound per Cubic Foot',
    symbol: 'lb/ft³',
    type: 'density',
    conversionToBase: (value) => value * 16.01846337,
    conversionFromBase: (value) => value / 16.01846337,
  },
];

// Flow rate units
export const flowRateUnits: Unit[] = [
  {
    id: 'cubic_meter_per_second',
    name: 'Cubic Meter per Second',
    symbol: 'm³/s',
    type: 'flow_rate',
    conversionToBase: (value) => value,
    conversionFromBase: (value) => value,
  },
  {
    id: 'cubic_meter_per_hour',
    name: 'Cubic Meter per Hour',
    symbol: 'm³/h',
    type: 'flow_rate',
    conversionToBase: (value) => value / 3600,
    conversionFromBase: (value) => value * 3600,
  },
  {
    id: 'liter_per_second',
    name: 'Liter per Second',
    symbol: 'L/s',
    type: 'flow_rate',
    conversionToBase: (value) => value / 1000,
    conversionFromBase: (value) => value * 1000,
  },
  {
    id: 'liter_per_minute',
    name: 'Liter per Minute',
    symbol: 'L/min',
    type: 'flow_rate',
    conversionToBase: (value) => value / 60000,
    conversionFromBase: (value) => value * 60000,
  },
  {
    id: 'gallon_per_minute',
    name: 'Gallon per Minute',
    symbol: 'gal/min',
    type: 'flow_rate',
    conversionToBase: (value) => value * 0.00006309020833,
    conversionFromBase: (value) => value / 0.00006309020833,
  },
];

// Combine all units
export const allUnits: Record<UnitType, Unit[]> = {
  length: lengthUnits,
  mass: massUnits,
  time: [],
  temperature: temperatureUnits,
  force: forceUnits,
  pressure: pressureUnits,
  energy: energyUnits,
  power: powerUnits,
  electric_current: electricCurrentUnits,
  voltage: voltageUnits,
  resistance: resistanceUnits,
  frequency: frequencyUnits,
  area: areaUnits,
  volume: volumeUnits,
  velocity: velocityUnits,
  acceleration: accelerationUnits,
  angle: angleUnits,
  viscosity: viscosityUnits,
  density: densityUnits,
  flow_rate: flowRateUnits,
};

// Unit categories with display names
export const unitCategories: { id: UnitType; name: string }[] = [
  { id: 'length', name: 'Length' },
  { id: 'mass', name: 'Mass' },
  { id: 'temperature', name: 'Temperature' },
  { id: 'force', name: 'Force' },
  { id: 'pressure', name: 'Pressure' },
  { id: 'energy', name: 'Energy' },
  { id: 'power', name: 'Power' },
  { id: 'electric_current', name: 'Electric Current' },
  { id: 'voltage', name: 'Voltage' },
  { id: 'resistance', name: 'Resistance' },
  { id: 'frequency', name: 'Frequency' },
  { id: 'area', name: 'Area' },
  { id: 'volume', name: 'Volume' },
  { id: 'velocity', name: 'Velocity' },
  { id: 'acceleration', name: 'Acceleration' },
  { id: 'angle', name: 'Angle' },
  { id: 'viscosity', name: 'Viscosity' },
  { id: 'density', name: 'Density' },
  { id: 'flow_rate', name: 'Flow Rate' },
];

// Conversion function
export function convert(value: number, fromUnit: Unit, toUnit: Unit): number {
  if (fromUnit.type !== toUnit.type) {
    throw new Error(`Cannot convert between different unit types: ${fromUnit.type} and ${toUnit.type}`);
  }
  
  // Convert from source unit to base unit
  const baseValue = fromUnit.conversionToBase(value);
  
  // Convert from base unit to target unit
  return toUnit.conversionFromBase(baseValue);
}

// Function to get units by type
export function getUnitsByType(type: UnitType): Unit[] {
  return allUnits[type] || [];
}

// Function to find a unit by ID
export function findUnitById(id: string): Unit | undefined {
  for (const type in allUnits) {
    const units = allUnits[type as UnitType];
    const unit = units.find(u => u.id === id);
    if (unit) {
      return unit;
    }
  }
  return undefined;
}