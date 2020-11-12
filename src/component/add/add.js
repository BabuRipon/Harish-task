import React,{useState} from 'react';


const Add=(props)=>{

     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [salary,setSalary]=useState('');

    return(
        <form>
            <div className="form-row">
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="name"
                   onChange={(e)=>setName(e.target.value)}
                   />
                </div>
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="age" 
                   onChange={(e)=>setAge(e.target.value)}
                   />
                </div>
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="salary" 
                   onChange={(e)=>setSalary(e.target.value)}
                   />
                </div>
            </div>
            <button onClick={(e)=>props.addEmp(e,{name,age,salary})}>add</button>
        </form>
    )
}

export default Add;