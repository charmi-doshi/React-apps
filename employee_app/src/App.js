import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import { useState } from 'react';
import { Employee } from './MyComponents/Employee';
import { EmployeeList } from './MyComponents/EmployeeList';
import { AddEmployee } from './MyComponents/AddEmployee';
import { Alert } from './MyComponents/Alert';


function App() {

  var title="Emp Management"

  const onDelete =(employee) =>{
    console.log("delete called ...",employee)
    setEmployees(employeeList.filter((e)=>{

      return e!== employee;

    }))
  }
  //add method
  
  const addEmployee=(id,employeeName,age)=>{
    
    
    
    const employee={
      eId:id,
      //eId:1,
      eName:employeeName,
      eAge:age
    }
    //  spread operator
    setEmployees([...employeeList,employee])
  }
  //
  const [employeeList,setEmployees] = useState([
    {
      eId:1,
      eName:"dhruvi",
      eAge:19
    },
    {
      eId:2,
      eName:"deven",
      eAge:19
    },
    {
      eId:3,
      eName:"charmi",
      eAge:19
    }
  ])
  return (
    <>
    <Header title= {title} searchBar= {true}/>
    <AddEmployee addEmployee={addEmployee}></AddEmployee>
    
    <EmployeeList employeeList={employeeList} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
