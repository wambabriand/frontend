import React from 'react';
//import { useState } from 'react'

function Register () {
  //  const [email, setEmail] = useState("");
  
   
function inputControl(name, email1, email2, password1, password2){
    if(name.trim().length === 0){
        alert('problem');
    }
}


   


    return (
    <div> 
        <div className = 'container'>
            <div className='row m-5'> </div>
            <div className = 'row mt-5'>
                <div className = 'col-md-3'></div>
                <div className = 'col-md-5 bg-secondary '>
                    <div className = 'form-group px-4 mt-5 '>   
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className = 'form-group px-4'>   
                        <label for="exampleInputEmail1">Confirm your email address</label>
                        <input type="email" className="form-control"></input>
                    </div> 
                    <div className = 'form-group px-4'>   
                        <label for="exampleInputEmail1">WhatSapp Number</label>
                        <input type="text" className="form-control" ></input>
                    </div>
                    <div className = 'form-group px-4'>   
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control" ></input>
                    </div>
                    <div className = 'form-group px-4'>   
                        <label for="exampleInputEmail1">Confirm your password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button className=' my-5 btn btn-block btn-primary' onClick={()=>{inputControl(" ","","","","")}}>Register</button>
                </div>
            </div>
        </div>
    </div>
   
    );
}

export default Register;
