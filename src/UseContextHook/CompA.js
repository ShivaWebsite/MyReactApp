import { useContext } from "react";
import CompB from "./CompB";
import { CounterContext } from "./CounterContext";

const CompA=()=>{
    const {counter,setCounter} = useContext(CounterContext);
    const {list,setList} = useContext(CounterContext);
    const AddNameHandler=()=>{
        var obj1= document.getElementById("name");
        var obj2= document.getElementById("age");
        setList([...list,{name:obj1.value,age:obj2.value}]);
    }
    return(
        <>
        <p>In Comp A</p>
        <p>{counter}</p>
        <input type="button" value="+" onClick={()=>setCounter(counter+1)}></input>
        <input type="button" value="-" onClick={()=>setCounter(counter-1)}></input>
        <div>
            <input type="text" id="name"></input>
            <input type="text" id="age"></input>
            <input type="button" value="Add Name" onClick={AddNameHandler}></input>
        </div>
        {list.map((item)=>{
            return(
                <>
                <p>{item.name} {item.age}</p>
                
                </>
            )
        })}
        <CompB></CompB>
        </>
    )
};
export default CompA;