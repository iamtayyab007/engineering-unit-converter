// Conversion utilities for precise calculations

import { Unit } from './units';
import { Decimal } from 'decimal.js';

/**
 * Format a Decimal result to a string with appropriate precision
 */
export function formatResult(value: Decimal, unit: string = '', precision: number = 2): string {
  return `${value.toFixed(precision)}${unit ? ' ' + unit : ''}`;
}

/**
 * Convert a Decimal to a string for React state
 */
export function toStringOrNumber(value: Decimal): string {
  return value.toString();
}

// Use Decimal.js for high precision calculations
export function convertWithPrecision(
  value: number | string,
  fromUnit: Unit,
  toUnit: Unit,
  precision: number = 10
): string {
  try {
    // Handle empty or invalid input
    if (value === '' || value === null || value === undefined) {
      return '';
    }

    // Parse the input value as a Decimal for high precision
    const decimalValue = new Decimal(value);
  
    
    // Special case for temperature which often has non-linear conversions
    if (fromUnit.type === 'temperature') {
      // Convert to base unit (Celsius)
      const baseValue = fromUnit.id === 'celsius' 
        ? decimalValue 
        : fromUnit.id === 'fahrenheit' 
          ? decimalValue.minus(32).times(5).dividedBy(9) 
          : decimalValue.minus(273.15);
      
      // Convert from base unit to target unit
      const result = toUnit.id === 'celsius' 
        ? baseValue 
        : toUnit.id === 'fahrenheit' 
          ? baseValue.times(9).dividedBy(5).plus(32) 
          : baseValue.plus(273.15);
      
      return result.toFixed(precision);
    }
    
    // For linear conversions, use the standard conversion functions
    // Convert to base unit
    const baseValue = new Decimal(fromUnit.conversionToBase(decimalValue.toNumber()));
    
    // Convert from base unit to target unit
    const result = new Decimal(toUnit.conversionFromBase(baseValue.toNumber()));
    
    return result.toFixed(precision);
  } catch (error) {
    console.error('Conversion error:', error);
    return 'Error';
  }
}

// Format the result with appropriate significant digits
export function formatWithSignificantDigits(value: string | number, significantDigits: number = 6): string {
  try {
    if (value === '' || value === null || value === undefined || value === 'Error') {
      return value as string;
    }
    
    const decimalValue = new Decimal(value);
    
    // Handle zero
    if (decimalValue.isZero()) {
      return '0';
    }
    
    // Format based on the magnitude
    if (decimalValue.abs().lessThan(0.000001) || decimalValue.abs().greaterThan(1000000)) {
      // Use scientific notation for very small or very large numbers
      return decimalValue.toSignificantDigits(significantDigits).toExponential();
    } else {
      // Use fixed notation for numbers in a reasonable range
      return decimalValue.toSignificantDigits(significantDigits).toString();
    }
  } catch (error) {
    console.error('Formatting error:', error);
    return String(value);
  }
}

// Validate numeric input
export function isValidNumber(value: string): boolean {
  if (value === '' || value === '-') return true;
  
  // Allow numbers with optional decimal point and negative sign
  const regex = /^-?\d*\.?\d*$/;
  return regex.test(value);
}

// Round to significant digits
export function roundToSignificantDigits(value: number, significantDigits: number): number {
  if (value === 0) return 0;
  
  const decimal = new Decimal(value);
  return decimal.toSignificantDigits(significantDigits).toNumber();
}