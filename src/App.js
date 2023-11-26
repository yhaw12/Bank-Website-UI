// import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'; 
import Main from './Pages/Main';
import Home from './Pages/Home/Home';
import WithdrawMoney from './Pages/Transfer/WithdrawMoney';
import TransferMoney from './Pages/Transfer/MoneyTransfer';
import Dashboard from './Pages/Dashboard';
import Accounts from './Pages/Accounts';
import Settngs from './Pages/Settings';
import Logout from './Pages/Logout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route path='/*' element={<Home />}>
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='transfer' element={<TransferMoney/>} />
        <Route path='withdraw' element={<WithdrawMoney/>} />
        <Route path='accounts' element={<Accounts/>} />
        <Route path='settings' element={<Settngs/>} />
        <Route path='logout' element={<Logout/>} />
        </Route> 
    </Route>
  )
)
const App = () => {
  return (
    <>
    <RouterProvider router={router}>
        <Main/>
    </RouterProvider>
  </>
  );
};

export default App;
