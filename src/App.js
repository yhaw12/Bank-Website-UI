// import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'; 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       {/* <Route path='/dashboard/*' element={<Dashboard />}>
        <Route path='employees' element={<Employees />} />
        <Route path='profile' element={<Profile />} />
      </Route> 
      <Route path="/transfer" component={TransferMoneySection} />
      <Route path="/withdraw" component={WithdrawMoneySection} />  */}
    </Route>
  )
)
const App = () => {
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
  </>
  );
};

export default App;
