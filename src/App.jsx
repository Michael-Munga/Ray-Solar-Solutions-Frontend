// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomerRoutes from './routes/CustomerRoutes';

function App() {
  return (
    <BrowserRouter>
      <CustomerRoutes />
    </BrowserRouter>
  );
}

export default App;
