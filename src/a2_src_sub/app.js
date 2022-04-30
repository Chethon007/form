
import React ,{useState , useEffect} from "react";

import Expenses from "./items/expenses";

import NewExpense from "./NewExpenses/NewExpens";

 // creating array of objects 

 let DUMMY_EXPENSES = [
  { 
     
    
      exptitle : 'school fees' ,
      expsamount : 70000,
      expdate : new Date(2022, 3, 14)
  },
  { 
   
    
      exptitle : 'ticket price' ,
      expsamount : 700,
      expdate : new Date(2022, 7, 4)
  },
  { 
   
   
      exptitle : ' Born day' ,
      expsamount : 950,
      expdate : new Date(1998, 9, 7)
  },
  { 
   
    
      exptitle : 'Bike insurence' ,
      expsamount : 2000 ,
      expdate : new Date(2022, 1, 6)
  }
]

const Appii=()=>{
      
     const [expenses , set_expenses] = useState(DUMMY_EXPENSES) ;

     function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                return response.json();   //get data in json farmate
            }
        ).then(
            data => {
                console.log(data);
                set_expenses(data);  // set data to expenses
            }
        );
    }

    // useEffect(()=>{
    //     fetchData();   //inorder to prvent rendering of data multiples times,,,we use  hook(useEffect) with []
    // },[]);





  // getting data OR INFORMATION from child's 
        
  const addexp_handler = (expense)=>{
          
          const updated_expenses = [expense,  ...expenses] ;  //merging both new and old values
          //expense values coming from child  that is newly entered values,
          //expenses values are already written values [dummy]
               
          set_expenses(updated_expenses);
          console.log(updated_expenses);
         }

    return(
        <div>
        <h1>Lets get started</h1>

         <NewExpense onADDexp ={addexp_handler}/>

         <Expenses  items= { expenses }/>

        </div>  
         
    );
}
export default Appii ;