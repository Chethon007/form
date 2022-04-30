import React, { useEffect, useState } from 'react';
import Child from './Child';


const Parent = () => {
    const [data,setData]=useState('')
    const name='chethan'
    
    return ( 
        <>Parent
        <Child name={name} callBack={(a)=>setData(a)}/>
        {data}
        </>
     );
}
 
export default Parent;