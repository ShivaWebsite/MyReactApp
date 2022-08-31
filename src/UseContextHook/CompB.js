import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CompB=()=>{
    const {counter,SetCounter} = useContext(CounterContext);
    const {list,setList} = useContext(CounterContext);
    return(
        <>
        
        Compb
        <p>{counter}</p>
        {list.map((item)=>{
            return(
                <div style={{color:"red",fontWeight:"bold"}}>
               <p>{item.name} {item.age}</p>
                </div>
            )
        })}
        </>
    )
};

export default CompB