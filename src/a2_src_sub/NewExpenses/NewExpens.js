
import React from "react";
import './NewExpens.css' ;
import ExpenseForm from "./ExpensForm";

const NewExpense = (props) => {
 
    const save_exp_data = (entered_expense_data)=>{
        
        const expense_data = {

            ...entered_expense_data,
            id : Math.random().toString()
        } 

        props.onADDexp(expense_data);
        console.log(expense_data);
 };

    return(
        <div className="new-expense">
            <ExpenseForm  onsave_expdata={save_exp_data}/>
        </div>

    ) ;
}

export default NewExpense ;