import ReadOnlyComponent from "./ReadOnlyComponent";

const EditContrl=(props)=>
{
    const SaveData=()=>{
        console.log("Save");
        var name1 = document.getElementById("name1");
        var address1 = document.getElementById("address1");
        var age1 = document.getElementById("age1");
        var obj1={name:name1.value,address:props.student.address,age:props.student.age};
        console.log(obj1);
        props.CallBackFn(obj1);
    }
    const onCancel=()=>
    {
        props.oncloseEdidcb();
    }
    const onchangeHandle=()=>{

    }
    return(
        <tr key={props.index}>    
            <td>    
        <input type="text"  id="name1" placeholder="enter address"></input>
        </td>
       
        <td>
        <input type="button" value="Save" onClick={SaveData}></input>
        </td>
        <td>
        <input type="button" value="Cancel" onClick={onCancel}></input>
        </td>
        </tr>


    );
};
export default EditContrl;