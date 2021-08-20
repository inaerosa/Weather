import React, { useState } from 'react'
import axios from 'axios';

import CityDetail from './CityDetail'


const FormLocal = () => {
    const [inputLocal, setInputLocal] = useState('');
    const [local, setLocal] = useState('');

    const handleInputChange = (e) => {
        setInputLocal(e.target.value);
        console.log(inputLocal);
    }

    const handleClick = async () => {
        if (inputLocal) {
            const { data } = await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=4be84cba&city_name=${inputLocal}`);

            setLocal(data)
            console.log(local)
        }
    }
    return (

        <>

        <div className="container"> 
            <h1>Weather</h1>
            <div className="input">
            <input type="text" onChange={handleInputChange} placeholder="Nome da cidade" size={30} />
            <button type="submit" onClick={handleClick}>Buscar</button>
            </div>
        </div>
        
        {local ? <CityDetail local={local} /> : ""}
            
        
        </>

    );
}

export default FormLocal;