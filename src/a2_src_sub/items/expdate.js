import React from "react";

import './expdate.css' ;
const Expdate = (props) =>{
   
    const year = props.date.getFullYear() ;
    const month = props.date.toLocaleString('en-US' , {month : 'long'}) ;
    const day = props.date.toLocaleString('en-US', {day : "2-digit"}) ;

    return(
        <div className='dmy'>
           
            <div className='y'>{year}</div>
            <div className='m'> {month}</div>
            <div className='d'>{day}</div>
               {/*  or    <div>{props.date.toISOString()}</div> */}
       </div>
    );
}

export default Expdate ;