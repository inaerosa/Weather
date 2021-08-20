import * as Icon from 'react-feather'
import React from 'react';

const ConditionCode = ({cidade}) => {

    let clima = cidade;
  
    return ( 
        <div>
           {clima === "storm" ? <Icon.CloudLightning/> :
            clima === "snow" ? <Icon.CloudSnow/> :
            clima === "hail"  ? <Icon.AlertTriangle/> && <p>Alerta! Granizo</p> :
            clima === "rain" ? <Icon.CloudRain/>:
            clima === "fog" ? <Icon.AlertTriangle/> && <p>Alta neblina</p> :
            clima === "clear_day"  ? <Icon.Sun/> :
            clima === "clear_night"  ? <Icon.Moon/> :
            clima === "cloud" ? <Icon.Cloud/> :
            clima === "cloudly_night" ?<Icon.Cloud/> :
            clima === "none_day" ? <Icon.Sun/> : 
            clima === "none_night" ? <Icon.Moon/> : ""
        }
        </div>
     );
}
 
export default ConditionCode;