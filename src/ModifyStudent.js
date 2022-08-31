const ModifyStudent=(props)=>
{
    return(
        <div>
            Name:<input type={props.student.name}></input><br></br>
            Addres:<input type={props.student.address}></input><br></br>
            Age:<input type={props.student.age}></input><br></br>
        </div>
    );
};
export default ModifyStudent;