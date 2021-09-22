import React, {useState} from 'react';


function FormClass (props) {
    
    let {name, handleSubmit, handleChange} = props;
    





    return (
        <>
        <p className="display-4 text-center ">Add New Automobile</p>

        <div className="container">
            <div className="row">
                <div className="p-5 text-center mx-auto bg-light">
                <form onSubmit={handleSubmit}> 


                    {/* To get the input, set the value of the input to be equal to the state. And add the event Listener Onchange to handle the value input*/}
                    <input type="text" className="form-control" placeholder="Add a new Automobile" value = {name} onChange={handleChange}></input>

                    <br></br>

                    <button type="submit" className="btn btn-primary">Save </button>
                </form>
                </div>
            </div>
        </div>

       
        </>
    )
}


export default FormClass;