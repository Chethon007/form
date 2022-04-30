import Expensiveitem from "./expensiveitem";
import React  from 'react';

import './expenses.css' ;
import Card  from "../UI/card";

const Expenses = (props)=>{

    return(
            <Card className="expenses">
              {/* // <div className="expenses">  */}

              {/* acessing each values using map fun */}
                  {
                  props.items.map( 
                                    (e) => ( 
                                    <Expensiveitem
                                    title={e.exptitle}  
                                    date={e.expdate}
                                    amount={e.expsamount}
                                      
                                    // title={e.title}    
                                    // amount={e.id} 
                            ></Expensiveitem>
                  ) ) 
                  }
        


{/*             
                    <Expensiveitem 
                    date={props.items[0].expdate}
                    title={props.items[0].exptitle}     //we can use direct value also here, title = 'school fees' ;
                    amount={props.items[0].expsamount}>  
                  </Expensiveitem>

                  <Expensiveitem 
                    date={props.items[1].expdate}
                    title={props.items[1].exptitle}     
                    amount={props.items[1].expsamount}>  
                  </Expensiveitem>

                  <Expensiveitem 
                    date={props.items[2].expdate}
                    title={props.items[2].exptitle}     
                    amount={props.items[2].expsamount}>  
                  </Expensiveitem>

                  <Expensiveitem 
                    date={props.items[3].expdate}
                    title={props.items[3].exptitle}     
                    amount={props.items[3].expsamount}>  
                  </Expensiveitem>  */}

            </Card>
                );
            }

export default Expenses ;