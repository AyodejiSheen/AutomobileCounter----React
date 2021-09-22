import React from 'react';
import ReactDOM from 'react-dom';
import {Auto} from './auto';



export  const Input = (props) => {

    let {displayAuto} = props;

  
        
  let autoname
        let handletype = (e) => {
            autoname = e.target.value;
        }




    return(
            <>
          <input type = "text" placeholder="input the Automobile Name" id="inputtype" onChange={handletype}></input>
          <button onClick={displayAuto}>Add</button>
            </>
    )   
}