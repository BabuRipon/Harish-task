import React,{useState,useEffect} from 'react';


const Update=(props)=>{

     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [salary,setSalary]=useState('');

     useEffect(()=>{
         setSalary(props.salary);
         setName(props.name)
         setAge(props.age)
     },[])

    return(
        <form>
            <div className="form-row">
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="name"
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                   />
                </div>
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="age" 
                   value={age}
                   onChange={(e)=>setAge(e.target.value)}
                   />
                </div>
                <div className="col">
                   <input type="text" 
                   className="form-control" 
                   placeholder="salary" 
                   value={salary}
                   onChange={(e)=>setSalary(e.target.value)}
                   />
                </div>
            </div>
            <button onClick={(e)=>props.updateEmp(e,{name,age,salary,id:props.id})}>update</button>
        </form>
    )
}

export default Update;