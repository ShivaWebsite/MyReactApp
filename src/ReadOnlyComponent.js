const ReadOnlyComponent=(props)=>
{//console.log(props.index);
    return(
        
        <tr key={props.index}>
                        <td style={{border:"1px solid black"}}>{props.student.name}</td>
                        <td style={{border:"1px solid black"}}>{props.student.address}</td>
                        <td style={{border:"1px solid black"}}>{props.student.age}</td>
                        <td style={{border:"1px solid black"}}><input type="button" value="Delete" onClick={props.onDelete(props.index)}></input></td>
                        <td style={{border:"1px solid black"}}><input type="button" value="Edit" onClick={props.onEdit(props.index)}></input></td>
    </tr>
    );
}
export default ReadOnlyComponent;