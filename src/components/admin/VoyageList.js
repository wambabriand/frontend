import React, { useState, useEffect } from 'react';
import DetailVoyage from '../home/expedier/DetailVoyage';
import UpdateVoyage from './UdapteVayage';
import {doGet, doDeleteWithAuth, doPutWithAuth} from '../../services/api.js'
import { useAuthContext } from '../authentication/AuthContext';




function VoyagesConfirm({update}){

    const { token } = useAuthContext();
    
    const [voyageToUpdate, setVoyageToUpdate] = useState(undefined);

    const [{data,loading,error},refetch] =  doGet("/api/jego/unlock/get/voyages");
    const [{data:deleteData, loading:deleteLoading, error: deleteError}, executeDelete] = doDeleteWithAuth("/api/jego/lock/delete/voyage", token);
    const [{data:putData, loading:putLoading,  error:putError}, executePut] = doPutWithAuth("/api/jego/lock/admin/put/voyage", token);
    
    const [direction, setDirection] = useState("IT->CMR");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( ()=>{ refetch(); setVoyageToUpdate(undefined); } , [deleteData , putData]);

 
    function showVoyageToUpdate(){
        if(voyageToUpdate === undefined) return;
        return  <UpdateVoyage voyageToUpdate={voyageToUpdate} setVoyageToUpdate={setVoyageToUpdate} executePut={executePut} > </UpdateVoyage>
    }

    function setVisibility(i){
        const element = document.getElementById(i).style.display;
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }
  

    function showView(){
        const voyages = data.filter(v=>{return v.direction===direction})
                            .map( v => { return {...v,
                                villeDepart: v.departures.split(",").filter(s=>s.trim!==""), 
                                villeDarrive: v.arrivals.split(",").filter(s=>s.trim!=="") }
                            });
        if(voyages.length<1){
            return (<p> Il n'y a pas de voyage disponible pour cette direction !!!</p>);
        }
        else{
            return voyages.map( (v,i)=>{
                return <div key={i} className='my-3'>
                    <div className="row">  
                        <div className="col-7">
                            <a href='#/'   onClick={ (e)=>{ setVisibility(i)  }} >
                                <div className="row"> 
                                    <div className="col-md-5 col-5"> {v.date} </div> 
                                    <div className="col-md-3 col-3"> {v.kgAvailable}kg</div>  
                                     <div className="col-md-3 col-3"> {v.priceByKg}€/kg</div> 
                                </div>
                            </a>
                        </div>
                        <div className="col-2">  
                            <div className="row">
                                <button className="btn  btn-warning" onClick={()=>{ setVoyageToUpdate(v); } }>Modifier</button> 
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">  
                            <div className="row">
                                <button className="btn  btn-danger" onClick={()=>{ executeDelete({data:v});} }>Delete</button> 
                            </div>
                        </div>
                    </div>
                    <div className="row" id={i} style={{display:"none"}}> 
                        <DetailVoyage voyage={v}></DetailVoyage>
                    </div>
                </div>})
            }
    }
   
    
    
    if(loading || deleteLoading || putLoading ) return (<p>loading...</p>);
    if(error || deleteError || putError) return (<p> error...</p>);
  

return(  <div className="container-fluid">
<div className="row"> 
    <div className="col-lg-6 col-12">     
        {showVoyageToUpdate()}
    </div>
    <div className="col-lg-6 col-12">  
            <div className=" row my-3">
                <div className="col-5">
                   <p>Direction du voyage</p>
                </div>
                <div className="col-5">
                    <select onChange={(e)=>{ setDirection(e.target.value); }} className="form-control">
                        <option value="IT->CMR"> {"IT->CMR"} </option>
                        <option value="CMR->IT"> {"CMR->IT"} </option>
                    </select>
                </div>
            </div>
        {showView()}
    </div>
</div>
</div>)
}

export default VoyagesConfirm;
