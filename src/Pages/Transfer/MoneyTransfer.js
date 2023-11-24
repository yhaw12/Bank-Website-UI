import React from 'react';
import './'

const TransferMoney = () => {
  return (
      <section id="transfer-money-section" style={{display: 'none'}}>
        <div className="card">
          <h2 style={{ textAlign: 'center' }}>Transfer Money</h2>
          <form id="transfer-money-form">
            <label htmlFor="recipient">Recipient Name:</label>
            <input type="text" id="recipient" name="recipient" required />

            <label htmlFor="country">Select Country:</label>
            <select id="country" name="country" required></select>

            <label htmlFor="bank">Bank Name:</label>
            <input type="text" id="bank" name="bank" required />

            <label htmlFor="account-number">Recipient Account Number:</label>
            <input type="text" id="account-number" name="account-number" required />

            <label htmlFor="amount">Transfer Amount:</label>
            <input type="number" id="amount" name="amount" required />

            <button type="submit">Transfer Money</button>
          </form>
        </div>
      </section>
  );
};

export default TransferMoney;  