import React, { useEffect } from 'react';


const Child = ({name,callBack}) => {
    let na='hl';
    useEffect(()=>callBack(na),[])
    return ( 
        <>Child{name}
        <input/></>
     );
}
 
export default Child;