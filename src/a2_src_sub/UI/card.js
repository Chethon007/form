import './card.css' ;
import React from 'react';

const Card=(props)=>{
 
    const classes = 'card ' + props.className ;
    return(<div className= {classes}> {props.children} </div>) ;
}

export default Card ;

// passing card fun or component inside opening and closing tag like <div> tag