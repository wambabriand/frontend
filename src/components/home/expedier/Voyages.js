import React, { useState } from 'react';
import DetailVoyage from './DetailVoyage.js';

import { doGet } from '../../../services/api.js';
import { isNonExpiredDate } from './utils.js';


function Voyage(props){

    const {dispatcher, actionType} = props;

    const [{data,loading,error}, ] =  doGet("/api/jego/unlock/get/voyages");

    function  setSelectedVoyage(selectedVoyage){
        const action = {type: actionType.do_reservation, selectedVoyage: selectedVoyage}
        dispatcher(action);
    }

    const [choixVoyage, setChoixVoyage] = useState("CMR->IT");
    // je me fais une get de liste de voyage

    function onChangeDirection(direction){
        setChoixVoyage(direction); 
    }
    function setVisibility(i){
        const element = document.getElementById(i).style.display;
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }
   
    const showVoyages = voyages => {
        const voyagesFilter = voyages.filter( v => isNonExpiredDate(v.date))
                                    .map( v => { return {...v, 
                                            villeDepart:    v.arrivals.split(",")
                                                                    .filter(s => s.trim !== ""), 
                                            villeDarrive:   v.departures.split(",").filter(s=>s.trim!=="") } 
                                    });
        if( voyagesFilter.length <1 ){
            return <p> IL n'y a pas de voyage disponible  pour cette direction!!! </p>
        }

        return (
            voyagesFilter.filter( (v)=>{ return v.direction === choixVoyage })
                .map( (d, i) => { 
                    return (
                        <div key={i} >
                            <div className="row mt-2"> 
                                <div className="col-md-8 col-8">
                                    <a href='#/'   onClick={ (e)=>{ setVisibility(i+d.id)  }} >
                                        <div className="row"> 
                                            <div className="col-md-5 col-5"> {d.date} </div> 
                                            <div className="col-md-3 col-3"> {d.kgAvailable}kg</div>  
                                            <div className="col-md-3 col-3"> {d.priceByKg}€/kg</div> 
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-3">  
                                    <div className="row"> 
                                        <button className="btn btn-lg btn-warning" onClick={()=>{setSelectedVoyage(d)} }>Reserver</button> 
                                    </div>
                                </div>
                            </div>
                            <div id={i+d.id} style={{display:"none"}}> 
                                <DetailVoyage voyage={d}></DetailVoyage>
                            </div>
                    </div>)
                })
        )  
    }
    
   
   
    if(loading) return (<p>loading...</p>);
    if(error) return (<p> error...</p>);
                  
   

return (
<div className="container-fluid">
    <div className="row my-5"> 
        <div className='col-md-3 col-12'></div>
        <div className="col-md-6 col-12"> 
            <h2>Transport des colies Cameroun {"<->"} Italie </h2>
            <div className="form-group row mt-3">
                <label className="col-md-4 col-6 col-form-label">Direction du Voyage </label>
                <div className="col-md-4  col-6">
                    <select className="form-control" onChange={ (e)=>{onChangeDirection(e.target.value)} }>
                        <option value="CMR->IT"> CMR {'->'} IT</option>
                        <option value="IT->CMR"> IT {'->'} CMR</option>
                    </select>
                </div>
            </div>
            { showVoyages(data) }
        </div>
        <div className='col-md-3 col-12'></div>
    </div>    
</div>
);}

export default Voyage;

