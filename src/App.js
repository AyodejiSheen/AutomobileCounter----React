import React, { useEffect, useState } from "react";
import { Auto } from "./auto";
import { Input } from "./input";
import "./App.css";
import FormClass from "./Formclass";

function App() {

  let [activate, setActivate] = useState(false);
  let [IncTotal, setIncTotal] = useState(0);
  let [DecTotal, setDecTotal] = useState(0);
  let [name, setname] = useState("")

  let [valueid, setValueid] = useState(0);

  let [autoArray, setautoArray] = useState([
    {
      type: "Car",
      countValue:0
    },

    {
      type: "Bus",
      countValue:0
    },

    {
      type: "Lorry",
      countValue:0
    },

    {
      type: "Bike",
      countValue:0
    }
  ])


  let decrement = (e) => {
  let x = e.target.id;
  console.log(x);
  let newarr = [...autoArray];
  
  if (newarr[x].countValue <= 0){
    setActivate = true;
  }else{
    newarr[x].countValue--;
    setautoArray(newarr);
  }
};


  let increment = (e) => {
    let x = e.target.id;
    console.log(x)
    let newarr = [...autoArray];
    newarr[x].countValue++;
    setautoArray(newarr);
  };




// To add new Auto
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(name);

  if (name == ""){
    alert("Please, Enter the name of the automobile")
  }else{
    let newauto =   {
      type: name,
      countValue: 0,
    }
  
    let existing = autoArray.findIndex((each, i) => name == each.type)
  
    console.log(existing);
  
    if(existing >= 0){
      alert("The Automobile has already been Listed")
    }else{
    setautoArray([...autoArray, newauto]);
    }
  
    setname("");
  }
}




const handleChange = (e) => {
  //create a variable value to target the input value, that is calling the fnction handleChange, and later setNAme to the value.
      let value = e.target.value;
      setname(value);
}




  return (
    <>
      <div className="container-fluid">
        <div className="row">


          <div className="col-md-6 mt-4">
            <FormClass name={name} handleSubmit={handleSubmit} handleChange={handleChange}/>
          </div>

          <div className="col-md-6 mt-4 p-0 border">
            <p className="display-4 text-center bg-light p-3 ">Transport Record</p>
            <Auto autoArray={autoArray} increment={increment} decrement={decrement} activate={activate}/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
