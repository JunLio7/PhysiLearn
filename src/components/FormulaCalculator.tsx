import React, { useState } from 'react';
interface Variable {
  name: string;
  unit: string;
  default?: number;
}
interface FormulaProps {
  name: string;
  formula: string;
  variables: Record<string, Variable>;
  calculate: (...args: number[]) => number;
  result?: {
    name: string;
    unit: string;
  };
}
const FormulaCalculator: React.FC<FormulaProps> = ({
  name,
  formula,
  variables,
  calculate,
  result = {
    name: 'Result',
    unit: ''
  }
}) => {
  const variableKeys = Object.keys(variables).filter(key => !formula.includes(`${key} =`));
  const [values, setValues] = useState<Record<string, string | number>>({});
  const [calculationResult, setCalculationResult] = useState<number | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const handleInputChange = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value
    });
    setError(null);
  };
  const calculateResult = () => {
    setError(null);
    const numericValues = variableKeys.map(key => {
      const value = values[key] || variables[key].default || 0;
      return typeof value === 'string' ? parseFloat(value) : value;
    });
    if (numericValues.some(val => isNaN(val))) {
      setError('Please enter valid numbers for all variables');
      return;
    }
    try {
      const result = calculate(...numericValues);
      if (!isFinite(result)) {
        setError('Invalid calculation result. Please check your input values.');
        return;
      }
      setCalculationResult(result);
      // Generate calculation steps
      const substitutionFormula = formula.replace(/([a-zA-Z_]+)/g, match => {
        if (variables[match]) {
          const value = values[match] || variables[match].default || 0;
          return value.toString();
        }
        return match;
      });
      setSteps([`Using the formula: ${formula}`, `Substituting values: ${substitutionFormula}`, `${result?.name || 'Result'} = ${result.toFixed(2)} ${result?.unit || ''}`]);
    } catch (err) {
      setError('An error occurred during calculation. Please check your input values.');
    }
  };
  return <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <h3 className="text-xl font-semibold mb-3">{name} Calculator</h3>
      <div className="bg-blue-50 p-3 rounded-md mb-4">
        <p className="font-mono text-lg">{formula}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {variableKeys.map(key => <div key={key} className="flex flex-col">
            <label className="mb-1 text-sm font-medium">
              {variables[key].name} ({key}){' '}
              {variables[key].unit && `(${variables[key].unit})`}
            </label>
            <input type="number" value={values[key] || ''} onChange={e => handleInputChange(key, e.target.value)} placeholder={variables[key].default?.toString() || '0'} className="border rounded-md px-3 py-2" step="0.01" />
          </div>)}
      </div>
      {error && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
          {error}
        </div>}
      <button onClick={calculateResult} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Calculate
      </button>
      {calculationResult !== null && <div className="mt-6">
          <h4 className="font-semibold mb-2">Solution Steps:</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            {steps.map((step, index) => <p key={index} className="mb-2">
                {step}
              </p>)}
            <p className="font-semibold mt-3">
              {result.name}: {calculationResult.toFixed(2)} {result.unit}
            </p>
          </div>
        </div>}
    </div>;
};
export default FormulaCalculator;