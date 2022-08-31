import { Fragment, useState } from "react";
import EditContrl from "./EditContrl";
import './index.css';
import ModifyStudent from "./ModifyStudent";
import ReadOnlyComponent from "./ReadOnlyComponent";
import {useDispatch, useSelector} from 'react-redux';
import { increment,decrement } from "./actions";
const DeleteItemInList=()=>
{
    const [names,setNames]=useState([]);
    const [toggle,setToggle]=useState(false);
    const [editContactId,setEditContactId]=useState(-1);
    const [query,setQuery]= useState("");
    const OnClickHandle=()=>
    {
        var name1 = document.getElementById("name");
        var address1 = document.getElementById("address");
        var age1 = document.getElementById("age");
        var obj1 ={name:name1.value,address:address1.value,age:age1.value};
        setNames([...names,obj1]);
    }
    const onDelete=(index)=>()=>{
       setNames((names)=> names.filter((item,i)=>i!==index))
    }
    const onEdit=(index)=>()=>{
               
        setEditContactId(index);
        //setToggle(!toggle);

        //setNames((names)=> names.filter((item,i)=>i!==index))

     }
     const onSave=(data)=>
     {
        const user = [...names];
        user[editContactId]=data;
        
         console.log(data);
         setNames(user);
         setEditContactId(-1);
     }
     const onCloseEdit=(data)=>
     {
         console.log(data);
         setEditContactId(-1);
     }
     const onchangeHandle=(e)=>{
        console.log("OnchangeHandle : " +e.target.value);
        setNames((names)=> names.filter((item)=>item.name.includes(e.target.value)))
     }
     const counter = useSelector(state=>state.counter);
     const dispatch = useDispatch();
    return(
        <>
        
        Name :<input type="text" id="name"></input><br></br>
        Address : <input type="text" id="address"></input><br></br>
        Age : <input type="text" id="age"></input><br></br>
        <input type="button" value="Add New Student" onClick={OnClickHandle}></input>
       <hr></hr>
       <input type="text" onChange={(e)=>setQuery(e.target.value)}></input>
       <p>Counter {counter}</p>
       <input type="button" value="+" onClick={()=>dispatch(increment())}></input>
       <input type="button" value="-" onClick={()=>dispatch(decrement())}></input>
       <table style={{border:"1px solid black"}}>
           <tr >
               <td style={{border:"1px solid black"}}>Name</td>
               <td style={{border:"1px solid black"}}>Address</td>
               <td style={{border:"1px solid black"}}>Age</td>
           </tr>
       <tbody>
        {
        
            names.filter((item)=>item.name.includes(query)).map((item,index)=>{
                return(
                <>  
                        {editContactId===index? <EditContrl student={item} CallBackFn={onSave} oncloseEdidcb={onCloseEdit}></EditContrl>:
                        <ReadOnlyComponent student={item} index={index} onDelete={onDelete} onEdit={onEdit}></ReadOnlyComponent>
                        
                }</> 
                      
                                    
                )
            })
            
        }
        </tbody>
        </table>
    </>
    );

};
export default DeleteItemInList;