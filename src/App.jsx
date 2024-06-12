import React from 'react';
import Header from './components/Header/Header.jsx';
import Calculator from './components/Calculator/Calculator.jsx';
import Results from './components/Results/Results.jsx';
import useInvestmentData from './hooks/InvestmentData.jsx';

function App() {
  const { investmentData, results, handleInputChange } = useInvestmentData();

  return (
    <>
      <Header />
      <Calculator onInputChange={handleInputChange} />
      <Results data={results} initialInvestment={investmentData.initialInvestment} />
    </>
  );
}

export default App;
