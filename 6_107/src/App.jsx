import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CheckStrength from './Components/CheckStrength.jsx'
import Timer from './Components/Timer.jsx'
import './App.css';
function App() {
  return (
    <>
      <Timer />
      <CheckStrength />
    </>   
    
       
  );
}

export default App;