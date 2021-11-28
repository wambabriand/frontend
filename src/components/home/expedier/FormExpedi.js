import React, { useState } from 'react';
import DetailVoyage from './DetailVoyage.js';
import {doPost}  from '../../../services/api.js';
import MessageRes from './MessageRes.js';
import ErrorMessage from './ErrorMessage.js';

function FormExpedition(props){
    const  {dispatcher, actionType, voyage} = props;
    const  [infos,setInfos] = useState({departCity:voyage.villeDepart[0], arrivalCity:voyage.villeDarrive[0], paymentMode:"PostPay",idVoyage:voyage.id});
    const  [{data,loading,error},executePOST] = doPost("/api/jego/unlock/post/reservation");

    function validateEmail(email) {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function expedier(){
        if(infos.numberKg===undefined || infos.emailSen===undefined ||infos.phoneNumSen===undefined ||
        infos.fullNameSen===undefined || infos.phoneNumRec===undefined ||infos.fullNameRec===undefined){
             alert("il faut remplir tous les champs obligatoires")
             return;
         }
         if(isNaN(infos.numberKg) || isNaN(voyage.kgAvailable) || voyage.departures.trim()==="" || voyage.arrivals.trim()===""){
              alert("La valeur de certains champs sont incorrectes")
              return;
         }
        if(!validateEmail(infos.emailSen)){
            alert("Adresse email invalid");
            return;
        }
        executePOST({data:infos});
    }
    function Annuler(){
        const action = {type: actionType.cancel_resevation};
        dispatcher(action);
    }
    function setPrivce(price){
        if(isNaN(price)){
            document.getElementById("price").value ="0 euro";
            return;
        } 
        document.getElementById("price").value = voyage.priceByKg * price + " euro";
    }

    // quand les données sont pret je fait le dispactcher
    // je fabrique un use sate qui va prendre toutes les infos
 
    if(loading) return(<p className='mt-5 pt-5'>Loading...</p>);
    if(error) {
        return(<p>error... Veillez nous contacter</p>)
    }
    
    if(data ){
        if(data.result){
            return <MessageRes Annuler={Annuler} />
        }
        else{
            return <ErrorMessage />
        }
    }


return(
<div className="container-fluid">

    <div className = 'row mt-5'>
        <div className = 'col-md-3 col-12' ></div>
        <div className = 'col-md-5 col-12 '>
            <DetailVoyage voyage={voyage}></DetailVoyage>
             {/*infos du paquet*/}
            <div className="row  mt-5 ">
                <div className="col-6"> 
                    <div className='form-group'>   
                        <label>Ville Depart </label>
                        <select onChange={(e)=>{ setInfos({...infos,departCity:e.target.value})}} className="form-control">
                            { voyage.villeDepart.map( (v,i) => {return <option key={i} value={v}> {v} </option>;}) }
                        </select>
                    </div>
                </div>
                <div className="col-6"> 
                    <div className='form-group'>   
                        <label>Ville Arrivée </label>
                        <select onChange={(e)=>{ setInfos({...infos,arrivalCity:e.target.value})}}  className="form-control">
                            { voyage.villeDarrive.map( (v,i) => {return <option key={i} value={v}> {v} </option>;}) }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-3"> 
                    <label>Poids(Kg)</label>
                    <input  onChange={(e)=>{ setPrivce(e.target.value); setInfos({...infos,numberKg:e.target.value})}}  type="number" min='0' step="0.5" className="form-control" ></input>
                </div>
                <div className="col-4"> 
                    <label> Prix  </label>
                    <input readOnly={true} id="price" className="form-control" ></input>
                </div>
                <div className="col-5"> 
                    <div className='form-group'>   
                        <label>Mode Payement</label>
                        <select  onChange={(e)=>{ setInfos({...infos,paymentMode:e.target.value})}}  className="form-control">
                            <option value="PostPay">PostPay </option> 
                            <option value="Virement">Virement  </option>
                            <option value="Orange Money">Orange Money  </option>
                            <option value="Mobile Money">Mobile Money  </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className = 'form-group'>   
                <label>Description du colie*</label>
                <input type="text"  onChange={(e)=>{ setInfos({...infos,coliDescription:e.target.value})}}  className="form-control"></input>
            </div>
             {/*infos expediteur*/}
             <div className='row  mt-5 '> 
                <h3>Informations  Expediteur</h3>
             </div>
             <div className='form-group'>   
                <label>Nom et Prémon</label>
                <input type="text"  onChange={(e)=>{ setInfos({...infos,fullNameSen:e.target.value})}} className="form-control" ></input>
            </div>
            <div className='form-group'>   
                <label>Phone Number</label>
                <input type="text"  onChange={(e)=>{ setInfos({...infos,phoneNumSen:e.target.value})}} className="form-control" ></input>
            </div> 
            <div className = 'form-group'>   
                <label>Email address *</label>
                <input type="email"  onChange={(e)=>{ setInfos({...infos,emailSen:e.target.value})}}  className="form-control"></input>
            </div>
             {/*infos receveur*/}
             <div className='row  mt-5 '> 
                <h3>Informations Destinataire</h3>
             </div>
             <div className='form-group'>   
                <label>Nom et Prémon</label>
                <input type="text"  onChange={(e)=>{ setInfos({...infos,fullNameRec:e.target.value})}}  className="form-control" ></input>
            </div>
            <div className='form-group'>   
                <label>Phone Number</label>
                <input type="text"  onChange={(e)=>{ setInfos({...infos,phoneNumRec:e.target.value})}}  className="form-control" ></input>
            </div> 
            <div className = 'form-group'>   
                <label>Email address *</label>
                <input type="email"  onChange={(e)=>{ setInfos({...infos,emailRec:e.target.value})}} className="form-control"></input>
            </div>
            <div className="row">
                <div className="col-6"> 
                    <button className='my-5 btn btn-block btn-danger' onClick={()=>{Annuler()}}>Annuler</button>
                </div>
                <div className="col-6"> 
                    <button className='my-5 btn btn-block btn-warning' onClick={()=>{expedier()}}>Reserver</button>
                </div>
            </div>
           
        </div>
    </div> 
</div>
);
}



export default FormExpedition;
