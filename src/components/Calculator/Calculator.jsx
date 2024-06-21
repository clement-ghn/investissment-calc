import React from 'react';
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Calculator({ onInputChange }) {
  return (
    <div id='user-input' className='row'>
      <div className='input-group col-sm'>
        <label className='mb-1'>Initial Investment</label>
        <input type="number" name="initialInvestment" onChange={onInputChange} />

        <label>Annual Investment</label>
        <input type="number" name="annualInvestment" onChange={onInputChange} />
      </div>
      <div className='input-group col-sm'>
        <label>Expected Return (%)</label>
        <input type="number" name="expectedReturn" onChange={onInputChange} />

        <label>Duration (years)</label>
        <input type="number" name="duration" onChange={onInputChange} />
      </div>
    </div>
  );
}
