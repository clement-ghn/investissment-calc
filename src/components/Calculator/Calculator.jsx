import React from 'react';
import './Calculator.css';

export default function Calculator({ onInputChange }) {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <label>Initial Investment</label>
        <input type="number" name="initialInvestment" onChange={onInputChange} />

        <label>Annual Investment</label>
        <input type="number" name="annualInvestment" onChange={onInputChange} />
      </div>
      <div className='input-group'>
        <label>Expected Return (%)</label>
        <input type="number" name="expectedReturn" onChange={onInputChange} />

        <label>Duration (years)</label>
        <input type="number" name="duration" onChange={onInputChange} />
      </div>
    </div>
  );
}
