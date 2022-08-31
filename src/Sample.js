import { useState } from "react";

const Sample=()=>
{
    const [list,setList]=useState([]);
    const OnClickHandle=()=>
    {
        var x = document.getElementById("name");
        setList([...list,x.value]);
    }
    const deleteItem = (index) => () =>
    setList((items) => items.filter((item, i) => i !== index));

    
    return(
        <>
        <input type="text" id="name"></input>
        <input type="button" value="Add Name" onClick={OnClickHandle}></input>
        {
            list.map((item,index)=>
                {
                    return(
                        <div key={index}>
                        <li>{item}</li>
                        <input type="button" value="Delete Name" onClick={deleteItem(index)}></input>
                        </div>
                    )
                })
        }
        </>
    )
}; export default Sample;