import {  useState } from "react";
import CompA from "./CompA";
import {CounterContext} from "./CounterContext"

const UsecontextParent=()=>
{
    const [counter,setCounter]= useState(0);
    const [list,setList]=useState([{name:"Ramu"},{name:"Shankar",age:"38"}]);
    return(
        <>
        Parent component
        <p>{counter}</p>
        <input type="button" value="+" onClick={()=>setCounter(counter+1)}></input>
        <input type="button" value="-" onClick={()=>setCounter(counter-1)}></input>
        <CounterContext.Provider value={{list,setList}} >
            <CompA></CompA>
        </CounterContext.Provider>
        </>
    )
}
export default UsecontextParent;