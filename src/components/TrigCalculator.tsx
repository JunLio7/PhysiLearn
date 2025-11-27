import React, { useState } from 'react';
import { trigFunctions } from '../utils/formulas';
const TrigCalculator = () => {
  const [mode, setMode] = useState<'angle' | 'side'>('angle');
  const [function_, setFunction] = useState<'sin' | 'cos' | 'tan'>('sin');
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);
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
    const func = trigFunctions[function_];
    try {
      if (mode === 'angle') {
        // Solving for angle
        const opposite = parseFloat(values.opposite || '0');
        const adjacent = parseFloat(values.adjacent || '0');
        const hypotenuse = parseFloat(values.hypotenuse || '0');
        if (isNaN(opposite) || isNaN(adjacent) || isNaN(hypotenuse)) {
          setError('Please enter valid numbers');
          return;
        }
        let angle: number;
        let calculationSteps: string[] = [];
        if (function_ === 'sin' && opposite && hypotenuse) {
          if (hypotenuse === 0) {
            setError('Hypotenuse cannot be zero');
            return;
          }
          if (Math.abs(opposite / hypotenuse) > 1) {
            setError('Invalid triangle: opposite cannot be greater than hypotenuse');
            return;
          }
          angle = func.solveForAngle(opposite, hypotenuse);
          if (!isFinite(angle)) {
            setError('Invalid calculation result');
            return;
          }
          calculationSteps = [`Using the formula: sin(θ) = opposite / hypotenuse`, `Substituting values: sin(θ) = ${opposite} / ${hypotenuse}`, `θ = sin⁻¹(${(opposite / hypotenuse).toFixed(4)})`, `θ = ${angle.toFixed(2)}°`];
          setResult(angle);
        } else if (function_ === 'cos' && adjacent && hypotenuse) {
          if (hypotenuse === 0) {
            setError('Hypotenuse cannot be zero');
            return;
          }
          if (Math.abs(adjacent / hypotenuse) > 1) {
            setError('Invalid triangle: adjacent cannot be greater than hypotenuse');
            return;
          }
          angle = func.solveForAngle(adjacent, hypotenuse);
          if (!isFinite(angle)) {
            setError('Invalid calculation result');
            return;
          }
          calculationSteps = [`Using the formula: cos(θ) = adjacent / hypotenuse`, `Substituting values: cos(θ) = ${adjacent} / ${hypotenuse}`, `θ = cos⁻¹(${(adjacent / hypotenuse).toFixed(4)})`, `θ = ${angle.toFixed(2)}°`];
          setResult(angle);
        } else if (function_ === 'tan' && opposite && adjacent) {
          if (adjacent === 0) {
            setError('Adjacent cannot be zero');
            return;
          }
          angle = func.solveForAngle(opposite, adjacent);
          if (!isFinite(angle)) {
            setError('Invalid calculation result');
            return;
          }
          calculationSteps = [`Using the formula: tan(θ) = opposite / adjacent`, `Substituting values: tan(θ) = ${opposite} / ${adjacent}`, `θ = tan⁻¹(${(opposite / adjacent).toFixed(4)})`, `θ = ${angle.toFixed(2)}°`];
          setResult(angle);
        } else {
          setError('Please enter valid values for the calculation');
          return;
        }
        setSteps(calculationSteps);
      } else {
        // Solving for a side
        const angle = parseFloat(values.angle || '0');
        const opposite = parseFloat(values.opposite || '0');
        const adjacent = parseFloat(values.adjacent || '0');
        const hypotenuse = parseFloat(values.hypotenuse || '0');
        if (isNaN(angle) || isNaN(opposite) || isNaN(adjacent) || isNaN(hypotenuse)) {
          setError('Please enter valid numbers');
          return;
        }
        if (angle <= 0 || angle >= 90) {
          setError('Angle must be between 0° and 90°');
          return;
        }
        let resultValue: number;
        let calculationSteps: string[] = [];
        if (function_ === 'sin') {
          if (angle && hypotenuse && !opposite) {
            if (hypotenuse === 0) {
              setError('Hypotenuse cannot be zero');
              return;
            }
            resultValue = func.solveForOpposite(angle, hypotenuse);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: sin(θ) = opposite / hypotenuse`, `Rearranging: opposite = sin(θ) × hypotenuse`, `Substituting values: opposite = sin(${angle}°) × ${hypotenuse}`, `opposite = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else if (angle && opposite && !hypotenuse) {
            const sinValue = Math.sin(angle * Math.PI / 180);
            if (sinValue === 0) {
              setError('Cannot calculate: sin(angle) is zero');
              return;
            }
            resultValue = func.solveForHypotenuse(angle, opposite);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: sin(θ) = opposite / hypotenuse`, `Rearranging: hypotenuse = opposite / sin(θ)`, `Substituting values: hypotenuse = ${opposite} / sin(${angle}°)`, `hypotenuse = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else {
            setError('Please enter valid values for the calculation');
            return;
          }
        } else if (function_ === 'cos') {
          if (angle && hypotenuse && !adjacent) {
            if (hypotenuse === 0) {
              setError('Hypotenuse cannot be zero');
              return;
            }
            resultValue = func.solveForAdjacent(angle, hypotenuse);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: cos(θ) = adjacent / hypotenuse`, `Rearranging: adjacent = cos(θ) × hypotenuse`, `Substituting values: adjacent = cos(${angle}°) × ${hypotenuse}`, `adjacent = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else if (angle && adjacent && !hypotenuse) {
            const cosValue = Math.cos(angle * Math.PI / 180);
            if (cosValue === 0) {
              setError('Cannot calculate: cos(angle) is zero');
              return;
            }
            resultValue = func.solveForHypotenuse(angle, adjacent);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: cos(θ) = adjacent / hypotenuse`, `Rearranging: hypotenuse = adjacent / cos(θ)`, `Substituting values: hypotenuse = ${adjacent} / cos(${angle}°)`, `hypotenuse = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else {
            setError('Please enter valid values for the calculation');
            return;
          }
        } else if (function_ === 'tan') {
          if (angle && adjacent && !opposite) {
            if (adjacent === 0) {
              setError('Adjacent cannot be zero');
              return;
            }
            resultValue = func.solveForOpposite(angle, adjacent);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: tan(θ) = opposite / adjacent`, `Rearranging: opposite = tan(θ) × adjacent`, `Substituting values: opposite = tan(${angle}°) × ${adjacent}`, `opposite = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else if (angle && opposite && !adjacent) {
            const tanValue = Math.tan(angle * Math.PI / 180);
            if (tanValue === 0) {
              setError('Cannot calculate: tan(angle) is zero');
              return;
            }
            resultValue = func.solveForAdjacent(angle, opposite);
            if (!isFinite(resultValue)) {
              setError('Invalid calculation result');
              return;
            }
            calculationSteps = [`Using the formula: tan(θ) = opposite / adjacent`, `Rearranging: adjacent = opposite / tan(θ)`, `Substituting values: adjacent = ${opposite} / tan(${angle}°)`, `adjacent = ${resultValue.toFixed(2)}`];
            setResult(resultValue);
          } else {
            setError('Please enter valid values for the calculation');
            return;
          }
        }
        setSteps(calculationSteps);
      }
    } catch (err) {
      setError('An error occurred during calculation. Please check your input values.');
    }
  };
  return <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <h3 className="text-xl font-semibold mb-3">Trigonometry Calculator</h3>
      <div className="flex mb-4 space-x-4">
        <div className="flex items-center">
          <input type="radio" id="angleMode" checked={mode === 'angle'} onChange={() => setMode('angle')} className="mr-2" />
          <label htmlFor="angleMode">Solve for angle</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="sideMode" checked={mode === 'side'} onChange={() => setMode('side')} className="mr-2" />
          <label htmlFor="sideMode">Solve for side</label>
        </div>
      </div>
      <div className="flex mb-6 space-x-4">
        <div className="flex items-center">
          <input type="radio" id="sinFunction" checked={function_ === 'sin'} onChange={() => setFunction('sin')} className="mr-2" />
          <label htmlFor="sinFunction">Sine</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="cosFunction" checked={function_ === 'cos'} onChange={() => setFunction('cos')} className="mr-2" />
          <label htmlFor="cosFunction">Cosine</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="tanFunction" checked={function_ === 'tan'} onChange={() => setFunction('tan')} className="mr-2" />
          <label htmlFor="tanFunction">Tangent</label>
        </div>
      </div>
      <div className="bg-blue-50 p-3 rounded-md mb-4">
        <p className="font-mono text-lg">
          {function_ === 'sin' && 'sin(θ) = opposite / hypotenuse'}
          {function_ === 'cos' && 'cos(θ) = adjacent / hypotenuse'}
          {function_ === 'tan' && 'tan(θ) = opposite / adjacent'}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mode === 'angle' ? <>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Opposite Side</label>
              <input type="number" value={values.opposite || ''} onChange={e => handleInputChange('opposite', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'cos'} step="0.01" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Adjacent Side</label>
              <input type="number" value={values.adjacent || ''} onChange={e => handleInputChange('adjacent', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'sin'} step="0.01" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Hypotenuse</label>
              <input type="number" value={values.hypotenuse || ''} onChange={e => handleInputChange('hypotenuse', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'tan'} step="0.01" />
            </div>
          </> : <>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">
                Angle (θ) in degrees
              </label>
              <input type="number" value={values.angle || ''} onChange={e => handleInputChange('angle', e.target.value)} className="border rounded-md px-3 py-2" step="0.01" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Opposite Side</label>
              <input type="number" value={values.opposite || ''} onChange={e => handleInputChange('opposite', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'cos' || values.hypotenuse && function_ === 'sin' || values.adjacent && function_ === 'tan'} step="0.01" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Adjacent Side</label>
              <input type="number" value={values.adjacent || ''} onChange={e => handleInputChange('adjacent', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'sin' || values.hypotenuse && function_ === 'cos' || values.opposite && function_ === 'tan'} step="0.01" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Hypotenuse</label>
              <input type="number" value={values.hypotenuse || ''} onChange={e => handleInputChange('hypotenuse', e.target.value)} className="border rounded-md px-3 py-2" disabled={function_ === 'tan' || values.opposite && function_ === 'sin' || values.adjacent && function_ === 'cos'} step="0.01" />
            </div>
          </>}
      </div>
      {error && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
          {error}
        </div>}
      <button onClick={calculateResult} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Calculate
      </button>
      {result !== null && <div className="mt-6">
          <h4 className="font-semibold mb-2">Solution Steps:</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            {steps.map((step, index) => <p key={index} className="mb-2">
                {step}
              </p>)}
            <p className="font-semibold mt-3">
              {mode === 'angle' ? 'Angle' : 'Result'}: {result.toFixed(2)}{' '}
              {mode === 'angle' ? '°' : ''}
            </p>
          </div>
        </div>}
    </div>;
};
export default TrigCalculator;