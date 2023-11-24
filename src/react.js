import React from 'react';

const App = () => {
  return (
    <div>
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb" id="breadcrumb">
                <li>
                  <a className="active" href="#">Home</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
              </ul>
            </div>
          </div>
          
          <ul className="box-info">
            {/* ... Your box-info list items ... */}
          </ul>

          {/* Transfer Money section */}
          <section id="transfer-money-section" style={{ display: 'none' }}>
            <div className="card">
              <h2 style={{ textAlign: 'center' }}> Transfer Money</h2>
              <form id="transfer-money-form">
                {/* ... Your form elements ... */}
                <button type="submit">Transfer Money</button>
              </form>
            </div>
          </section>

          {/* Withdraw Money section */}
          <section id="withdraw-money-section" style={{ display: 'none' }}>
            <div className="card">
              <h2 style={{ textAlign: 'center' }}> Withdraw Money</h2>
              <form id="withdraw-money-form">
                {/* ... Your form elements ... */}
                <button type="submit">Withdraw Money</button>
              </form>
            </div>
          </section>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}

      {/* ... Other scripts ... */}
    </div>
  );
};

export default App;
