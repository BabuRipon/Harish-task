import React from 'react';
import Add from './component/add/add';
import Update from './component/update/update';

class App extends React.Component{

  state={
     list:[
       {name:'ripon',age:23,salary:25000},
       {name:'Harish',age:23,salary:35000},
       {name:'john',age:35,salary:75000},
     ],
     updatedValue:{},
     adduser:true,
     isUpdate:false,
  }

  AddUserHandler=()=>{
    this.setState({...this.state,adduser:false})
  }

  AddEmpHandler=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.push({name:value.name,age:value.age,salary:value.salary})
    this.setState({list:oldEmp,adduser:true})
  }

  deleteEmpHandler=(index)=>{
      let oldEmp=this.state.list;
      oldEmp.splice(index,1);
      this.setState({list:oldEmp})
  }

  upadateHandler=(item,index)=>{
    let obj={...item,id:index}
    this.setState({isUpdate:true,updatedValue:obj})
  }

  updateEmp=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.splice(value.id,1,{name:value.name,age:value.age,salary:value.salary})
    this.setState({list:oldEmp,isUpdate:false})
  }

  render(){
    
    const listOfEmp=this.state.list.map((item,index)=>{
      return(
            <div className="row" key={index} style={{margin:'10px'}}>
                <h3 className="col-sm-10" style={{backgroundColor:'#c4c4c4',padding:'5px'}}>name : {item.name} | age : {item.age} | salary : {item.salary}</h3>
                <span className="col-sm-1 btn btn-success" onClick={()=>this.upadateHandler(item,index)}>update</span>
                <span className="col-sm-1 btn btn-danger" onClick={()=>this.deleteEmpHandler(index)}>X</span>
            </div>
      )
    })

    return(
      <div className="container">
            <div className="row mt-4">
              <div className="col-sm-12">
                    {this.state.adduser?
                    <span className="btn btn-primary" onClick={this.AddUserHandler}>Add EMP</span>
                    :<Add addEmp={this.AddEmpHandler}/>
                    }
                    {this.state.isUpdate?<Update 
                    name={this.state.updatedValue.name} 
                    age={
                      this.state.updatedValue.age
                    } 
                    salary={this.state.updatedValue.salary} 
                    id={this.state.updatedValue.id}
                    updateEmp={this.updateEmp}
                    />:null}
              </div>
            </div>
            {listOfEmp}
           
      </div>
    )
  }
}

export default App;