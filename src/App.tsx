import React from 'react';

import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1><Link to=''>Kiana Joon</Link></h1>
        <nav>
          <Link to='work'>work</Link>
          <Link to='contact'>contact</Link>
        </nav>
      </header>
      <Outlet />

      <footer>
        thanks for visiting
      </footer>
    </div>
  );
}

export default App;
