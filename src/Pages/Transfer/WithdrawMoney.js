import React, { useState } from 'react';

const WithdrawMoneySection = () => {
  const [withdrawalType, setWithdrawalType] = useState('Bank');

  const handleWithdrawalTypeChange = (event) => {
    setWithdrawalType(event.target.value);
  };

  return (
    <section id="withdraw-money-section" style={{ display: 'none' }}>
      <div className="card">
        <h2 style={{ textAlign: 'center' }}>Withdraw Money</h2>
        <form id="withdraw-money-form">
          <label htmlFor="withdrawal_type">Withdraw To:</label>
          <select
            name="withdrawal_type"
            id="withdrawal_type"
            value={withdrawalType}
            onChange={handleWithdrawalTypeChange}
          >
            <option value="Bank">Bank</option>
            <option value="Mobile_Money">Mobile Money</option>
          </select>

          {withdrawalType === 'Mobile_Money' && (
            <div id="mobileMoneyOperators">
              <label htmlFor="operator">Choose Operator:</label>
              <select name="operator" id="operator">
                <option value="Vodacash">Vodacash</option>
                <option value="MTN">MTN</option>
                <option value="Tigocash">Tigocash</option>
                {/* Add more operators as needed */}
              </select>
              <label htmlFor="mobile_number">Mobile Number:</label>
              <input type="text" id="mobile_number" name="mobile_number" required />
            </div>
          )}

          <label htmlFor="withdrawal_amount">Withdraw Amount:</label>
          <input type="number" id="withdrawal_amount" name="withdrawal_amount" required />

          <button type="submit">Withdraw Money</button>
        </form>
      </div>
    </section>
  );
};

export default WithdrawMoneySection;
