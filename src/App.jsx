import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './customer/Routers/CustomerRoutes';

function App() {

  return (
    
      <Routes>
        <Route path='/*' element={<CustomerRoutes />} />
      </Routes>



  )
}

export default App
