import React, {useState} from 'react';
import ReactDOM from 'react-dom';


export function Auto (props){

    let {autoArray, increment, decrement, activate} = props;

 
    return(
        <>
        <div className="container">
    
                {
                    autoArray.map((auto, index) => {
                        return(
                            <div key={index} id={index} className="row align-items-center" >
                                <div className="col-3 col-md-3 type" id={index}>{auto.type}</div>

                                <div className=" col-3 col-md-3" id={index}><button id={index} className="btn btn-success increaseBtn" onClick={increment}>increase</button></div>

                                <div className="col-3 col-md-3" id={index}><button id={index} className="btn btn-danger decreaseBtn" disabled={activate} onClick={decrement}>Decrease</button> </div>

                                <div className="col-3 col-md-3 countValue" id={index}>{auto.countValue}</div>
                            </div>
                        )
                    })
                }

            
        </div>
        </>
    )
}


