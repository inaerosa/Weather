import './App.css';

import React, { useState } from 'react'
import axios from 'axios';

import CityDetail from './components/CityDetail'
function App() {

  const [inputLocal, setInputLocal] = useState('');
  const [local, setLocal] = useState('');

  const handleInputChange = (e) => {
    setInputLocal(e.target.value);
    console.log(inputLocal);
  }

  const handleClick = async () => {
    if (inputLocal) {
      const { data } = await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=adf455bb&city_name=${inputLocal}`);

      setLocal(data)
    }
  }


  return (

    <div className="app">
      <div className="container">
        <h1>Weather</h1>
        <div className="input">
          <input type="text" onChange={handleInputChange} placeholder="Nome da cidade" size={30} />
        
          <button type="submit" onClick={handleClick}>Buscar</button>
   
        </div>
        
        <div className="board">
          {local ? <CityDetail local={local} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
