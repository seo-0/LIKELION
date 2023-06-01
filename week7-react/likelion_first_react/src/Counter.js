import { useState } from "react";
import "./Counter.css";
const Counter= ()=>{
    let [counter, setCounter]= useState(0) //카운터값을 0으로 초기화
   
   function increase(){
    setCounter(counter +1);
   }
   function decrease(){
    setCounter(counter -1);
   }
   
    return(
         <div>
            <h1>{counter}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
         </div>
    );
};

export default Counter;