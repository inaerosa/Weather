import React from 'react';
import './CityDetail.css'

import ConditionCode from './ConditionCode'

const CityDetail = ({local}) => {

    let cidade = local.results;
    let min = cidade.forecast[0].min
    let max = cidade.forecast[0].max;
    let code = cidade.condition_slug;
    return ( 
        <div className="container-detail">
            
            <h2>{local && cidade.city} </h2>
          
            <p>Temperatural atual: {local && cidade.condition_code}ºC</p>
            <p>Mínima: {local && min}ºC</p>
            <p>Maxima: {local && max}ºC </p>
            <p>Tempo : {cidade.description}</p>
            <ConditionCode cidade={code}></ConditionCode>
        </div>
     );
}
 
export default CityDetail;