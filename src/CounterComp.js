import {useDispatch, useSelector} from 'react-redux';
import counterReducer from './reducers/Counter';
import { increment } from './actions';
import { decrement } from './actions';
import { addNewItem } from './actions';
const   CounterComp=()=>
{
    const counter = useSelector(state=>state.counter);
    const list = useSelector(state=>state.List);
    const dispatch = useDispatch();
    const OnClickHandle=()=>{
        var name1 = document.getElementById("name");
        var address1 = document.getElementById("address");
        var age1 = document.getElementById("age");
        var obj1 ={name:name1.value,address:address1.value,age:age1.value};
        //setNames([...names,obj1]);
        dispatch(addNewItem(obj1));
    }
    return (
        <>

        <h1>Counter {counter}</h1>
        <input type="button" value="+" onClick={()=>dispatch(increment())}></input>
        <input type="button" value="-" onClick={()=>dispatch(decrement())}></input>
        
        <hr></hr>
        Name :<input type="text" id="name"></input><br></br>
        Address : <input type="text" id="address"></input><br></br>
        Age : <input type="text" id="age"></input><br></br>
        <input type="button" value="Add New Student" onClick={OnClickHandle}></input>
        {
            list.map((item)=>{
                return(
                    <>
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                    <p>{item.age}</p>
                    </>
                )
            })
        }

        </>
    );
}
export default CounterComp;