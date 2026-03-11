import React from 'react';

import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='min-h-full bg-background' data-theme='girlypop'>
      <Outlet />
    </div>
  );
}

export default App;
