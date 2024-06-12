import React from 'react';
import './Results.css';
import { formatter } from '../../util/investment.js';

export default function Results({ data, initialInvestment }) {
  let cumulativeInterest = 0;
  let investedCap = initialInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th scope='col'>Year</th>
          <th scope='col'>Investment Value</th>
          <th scope='col'>Interest (Year)</th>
          <th scope='col'>Total Interest</th>
          <th scope='col'>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          cumulativeInterest += item.interest;
          investedCap += item.annualInvestment;

          return (
            <tr key={index}>
              <th scope="row">{item.year}</th>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(cumulativeInterest)}</td>
              <td>{formatter.format(investedCap)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
