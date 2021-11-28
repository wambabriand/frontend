import React from 'react';

function ChangeEMail(){

    function onModifierEmail(){
        console.log("vos info serons envoyer au serveur")
    }

    return(<div>
        <div className='row'>
            <div className='col-md-3 col-4'>
                <label> Email actuelle </label>
            </div>
            <div className='col-md-5 col-7'>
                bebebe@yaho.fr
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3 col-4'>
                <label>nouveau email</label>
            </div>
            <div className='col-md-5 col-7'>
                <input type="email"></input>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3 col-4'>
                <label> Confirm  email  </label>
            </div>
            <div className='col-md-5 col-7'>
                <input type="email"></input>
            </div>
        </div>
        
        <div>
            <button onClick={()=>{onModifierEmail()}}>Modifier</button>
        </div>
    </div>);
}

export default ChangeEMail;