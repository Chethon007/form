
import React, { useState } from "react";
import './ExpensForm.css' ;


const ExpenseForm = (props) => {

    const [entered_title , setnewtitle] = useState('') ;
    const [entered_amount , setnewamount] = useState('') ; 
    const [entered_date , setnewdate] = useState('') ;

    const titlechange = (event)=> {
        setnewtitle(event.target.value);  // this will set value to varible- entered title
    } ;
    const amountchange = (event)=> {
        setnewamount(event.target.value);
    } ;
    const datechange = (event)=> {
        setnewdate(event.target.value);
    } ;

    const submit_handler = (event)=> {
        event.preventDefault() ;  // web page prevent from refreshing
         
        //values are stored in object form
        const EXPENSEDATA = {
              expdate: new Date(entered_date) ,
              exptitle : entered_title ,   
              expsamount:  entered_amount 
              
        };
       
       props.onsave_expdata(EXPENSEDATA)  ;

        console.log(EXPENSEDATA);

        //after consoling (output) expensedata,,,then variable set to empty 
        setnewtitle('');
        setnewamount('');
        setnewdate('');

    }

    return(
        <form onSubmit={submit_handler}>
            <div className="new-expense_controls">
                
                <div className="new-expense_control">
                <label>Title</label>
                <input type='text' value={entered_title} onChange={titlechange} />
                </div>

                <div className="new-expense_control">
                <label>Amount</label>
                <input type='number' min='1' steps='1' value={entered_amount} onChange={amountchange} />
                </div>

                <div className="new-expense_control">
                <label>Date</label>
                <input type='date' value={entered_date} onChange={datechange}/>
                </div>

            </div>
            <div className='new-expense_actions' >
              <button type="submit">Add Expense Items </button>
            </div>

        </form>

    ) ;
}

export default ExpenseForm ;