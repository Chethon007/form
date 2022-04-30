import './app.css' ;

import Subcomponent from './subcomponent';



function App(){
    return(
      
       <div  className='app-container'>
         <h4>first component</h4>
         <p>this is paragraph</p> 
         

        
          <Subcomponent></Subcomponent> or
         <Subcomponent/> 
        
     </div>
         ) ;
}
export default App ;