// OLD EXPENSE FORM........

// import './expensiveitem.css' ;
// import './expdate.css' ;
// import '../UI/card.js' ;
// import Card from '../UI/card.js';

// import React, {useState} from 'react';

// const Expensiveitem =(props) => { 

//     const month = props.date.toLocaleString('en-US' , {month : 'long'}) ;
//     const year = props.date.getFullYear() ;
//     const day = props.date.toLocaleString('en-US', {day : "2-digit"}) ;

//     // changing title value using useState propeerty
  
//     const [new_title , setnewtitle] = useState('');

//     const [title, set_title] = useState(props.title) ; //return a array contains [vaaribale, function]
    
//     const clickhandler= ()=> {
        
//            set_title( new_title)
//     }

//     const change_handler = (event)=> {
        
//         setnewtitle(event.target.value);
//  }
//   return(
//     <Card className='ex'>
//      {/* <div className='ex'>   */}
           
//             <div className='dmy'>
//                  <div className='d'>{day}th</div>
//                 <div className='m'> {month}</div>
//                 <div className='y'>{year}</div>
//                 {/*  or    <div>{props.date.toISOString()}</div> */}
//             </div>
//             <div className='exdes'> 
//                   <h2>{ title}</h2>
           
//                   <div className='exprice'> {props.amount}</div>
//             </div>

//             <input type= 'text'  value={new_title} onChange={ change_handler} />
//             <button onClick={ clickhandler}>change title</button>

//     </Card>
//     ) ;
// }
// export default Expensiveitem ; 

// this like template,,we repeat this in 4 times in our code....


// -------!!!!------!!!!----THIS OLDFORM CLOSED -----------!!!!!!!-----1!!11!!!!!


// adding NewExpenseForm

import './expensiveitem.css' ;
import './expdate.css' ;
import '../UI/card.js' ;
import Card from '../UI/card.js';
import React from 'react';
import Expdate from './expdate' ;


const Expensiveitem =(props) => { 
  
   
  return(
    <Card className='ex'>
     {/* <div className='ex'>   */}
           
            <Expdate date = {new Date(props.date)}/> 
            <div className='exdes'> 
                  <h2>{ props.title}</h2>
                  {/* <h2>{ props.title}</h2> */}
                  <div className='exprice'> {props.amount}</div>
                  
            </div>

    </Card>
    ) ;
}
export default Expensiveitem ; 