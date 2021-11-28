import React, { useState } from 'react';
import { doPostWithToken } from '../../services/api.js';
import { useAuthContext } from '../authentication/AuthContext.js';

function CreateVoyage(props){

    const [voyage, setVoyage] = useState({direction:"CMR->IT", typeTravaller:"JeGo"});
    const [isResponse, setIsResponse] =  useState(false);
    const { token } = useAuthContext();
   const [{data,loading,error},executePost] = doPostWithToken("/api/jego/lock/admin/post/voyage", token);

    function expedier(){
        if(voyage.date===undefined ||voyage.typeTravaller===undefined ||voyage.priceByKg===undefined ||voyage.kgAvailable===undefined ||
           voyage.departures===undefined ||voyage.arrivals===undefined){
            alert("il faut remplir tout les champs obligatoires")
            return;
        }
        if(isNaN(voyage.priceByKg) || isNaN(voyage.kgAvailable) || voyage.departures.trim()==="" || voyage.arrivals.trim()===""){
             alert("La valeur de certains champs sont incorrectes")
             return;
        }
        executePost({data:voyage});
        setIsResponse(true);
    }

    if(loading) return (<p>loading...</p>);
    if(error) return (<p> error...</p>);
    if(isResponse){
        if(data){
            return (<p> Un nouveau voyage a été ajouté avec succes <button onClick={()=>{ setIsResponse(false)}}>Retour</button></p>);
        }
        else{
            return (<p> Il ya eu erreur  
                    <button onClick={()=>{ setIsResponse(false)}} >Retour</button>
                </p>);
        }
    } 

return(
<div className="container-fluid">
    <div className="row">
        <div className="col-md-3 col-12"></div>
        <div className="col-md-6 col-12">
            <div className='alert alert-success py-3 my-5 text-center'>
                <h4>Créer un Voyage </h4>
                les Champs contenant le symbole * sont optionnels
            </div>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div className='form-group'>
                            <label>Date</label> 
                            <input  onChange={(event)=>{ setVoyage({...voyage, date:event.target.value})}} type="date" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Voyageur JEGO</label>
                            <select onChange={(event)=>{ setVoyage({...voyage, typeTravaller:event.target.value})}} className="form-control">
                                <option value="JeGo"> OUI</option>
                                <option value="Prive"> NON</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className='form-group'>
                            <label>Direction</label>
                            <select onChange={(event)=>{ setVoyage({...voyage, direction: event.target.value})}} className="form-control">
                                <option value="CMR->IT"> {"CM->IT"}</option>
                                <option value="IT->CMR"> {"IT->CM"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='form-group'>
                            <label>prix du kg(euro)</label>
                            <input type="number" onChange={(event)=>{ setVoyage({...voyage, priceByKg: event.target.value})}} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label> kg disponible</label>
                            <input type="number" onChange={(event)=>{ setVoyage({...voyage, kgAvailable: event.target.value})}} className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Villes de departs (ville1,ville2,...)</label>
                    <input onChange={(event)=>{ setVoyage({...voyage, departures:event.target.value.replace(new RegExp(/,+/g),',')})}} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>villes d'arrivées (ville1,ville2,...)</label>
                    <input onChange={(event)=>{ setVoyage({...voyage, arrivals:event.target.value.replace(new RegExp(/,+/g),',')})}} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Note (*)</label>
                    <input onChange={(event)=>{ setVoyage({...voyage, comment:event.target.value})}} className="form-control"></input>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className='form-group'>
                            <label>Nom du voyageur (*)</label>
                            <input onChange={(event)=>{ setVoyage({...voyage, fullName:event.target.value})}} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label> Numéro de telephone (*)</label>
                            <input onChange={(event)=>{ setVoyage({...voyage, phoneNumber:event.target.value})}} className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Email (*)</label>
                    <input onChange={(event)=>{ setVoyage({...voyage, email:event.target.value})}} className="form-control"></input>
                </div>
                <div className="row">
                    <div className="col-6"> 
                        <button  type="reset" className=' my-5 btn btn-block btn-danger'>Reset</button>
                    </div>
                    <div className="col-6"> 
                        <button type="button" className=' my-5 btn btn-block btn-warning' onClick={()=>{expedier()}}>Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
);}

export default CreateVoyage;