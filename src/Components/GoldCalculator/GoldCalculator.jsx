import React, { useState } from 'react';
import './GoldCalculator.css';

const GoldCalculator = () => {
  const [percentage, setPercentage] = useState(99.99);
  const [amount, setAmount] = useState(7750.00);

  const goldRates = {
    99.99: 7750,
    91.67: 7105,
    87.50: 6782,
    83.30: 6456,
    75.00: 5813,
    62.50: 4844,
  };

  const calculateAmount = (percentage) => {
    const rate = (percentage / 100) * goldRates[99.99];
    setAmount(rate.toFixed(2));
  };

  const handlePercentageChange = (e) => {
    const newPercentage = parseFloat(e.target.value);
    setPercentage(newPercentage);
    calculateAmount(newPercentage);
  };

  return (
    <div className="gold-calculator">
      <h1>99.99 % of pure 1 gram gold rate in Cash For Gold @ GG-Gold : Rs 7750</h1>
      <p>
        When you think about selling your BIS HALLMARKED gold jewellery with Cash For Gold @ GG-Gold,
        you can find out the value of the gold you are selling at the current 1 gram rate by filling
        the details of the percentage (%) of gold in your pure gold, composite gold and composite gold
        jewellery in the boxes below. At times, this value will change according to the market. Your
        pure and composite gold, and composite gold jewellery’s percentage can be seen below. The valuation
        rate will be made in accordance with those.
      </p>
      <div className="calculator-box">
        <div className="input-box">
          <label>Fill the percentage % of gold that you are about to sell, after testing the gold purity.</label>
          <input
            type="number"
            value={percentage}
            onChange={handlePercentageChange}
            step="0.01"
            min="0"
            max="100"
          />
        </div>
        <div className="result-box">
          <label>Once you have completed your 1 gm gold price will be available here.</label>
          <input type="text" value={`Rs: ${amount}`} readOnly />
        </div>
      </div>
      <h2>The percentage of gold may be as follows. The price will be based on the gold value.</h2>
      <table>
        <thead>
          <tr>
            <th>Percentage basis</th>
            <th>The current price of 1 gm gold</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(goldRates).map(([key, value]) => (
            <tr key={key}>
              <td>{key} %</td>
              <td>Rs: {value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoldCalculator;
