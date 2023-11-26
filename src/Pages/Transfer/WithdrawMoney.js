import React from 'react';
import '../Transfer/Withdraw.css'

const WithdrawMoney = () => {
  return (
    <section id="withdraw-money-section">
      <div className="card">
        <h2 style={{ textAlign: 'center' }}> Withdraw Money</h2>
        <form id="withdraw-money-form">
          <label htmlFor="recipient">Withdraw To:</label>
          <select name="withdrawal_type" id="withdrawal_type">
            <option value="Bank">Bank</option>
            <option value="Mobile_Money">Mobile Money</option>
          </select>

          {/* New select element for mobile money operators */}
          {/* <div id="mobileMoneyOperators">
            <label htmlFor="operator">Choose Operator:</label>
            <select name="operator" id="operator">
              <option value="Vodacash">Vodacash</option>
              <option value="MTN">MTN</option>
              <option value="Tigocash">Tigocash</option>
              
            </select>
            <label htmlFor="mobile_number">Mobile Number:</label>
            <input type="text" id="mobile_number" name="mobile_number" required />
          </div> */}

          <label htmlFor="amount">Withdraw Amount:</label>
          <input type="number" id="withdrawal_amount" name="withdrawal_amount" required />

          <button type="submit">Withdraw Money</button>
        </form>
      </div>
    </section>
  );
};

export default WithdrawMoney;