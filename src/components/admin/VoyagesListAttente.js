import React, { useContext } from 'react';
import DetailVoyage from '../home/expedier/DetailVoyage';

import useAxios from 'axios-hooks';
import { doGetWithToken } from '../../services/api';


/**
 * POUR LE MOMENT CE COMPOSANT N4EST PAS UTILISE
 **/


function VoyagesListAttente(props){
    const {voyages, dispatcher} = props;

    const { token } = useContext();
    const [{data,loading,error},refetch] =  doGetWithToken("/api/jego/get/voyages", token);

    //const [{data,loading,error}] = useAxios("http://localhost:8080/api/jego/get/voyages");

  

    function setVisibility(i){
        const element = document.getElementById(i).style.display;
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }
   
    if(loading){
        return (<div> <p> data loading...........</p></div>);
    }
    if(error){
        console.log(error);
        return (<div> <p> error loadin</p></div>);
    }
    console.log(data);

return(
<div className="container-fluid">
    <div className="row"> 
        <div className="col-md-2 col-12"></div>
        
        <div className="col-md-8 col-12"> 
            { 
                voyages.map( (v,i)=>{
        return <div key={i}>
                    <div className="row my-1">  
                        <div className="col-md-6 col-8">
                            <a href='#/'   onClick={ (e)=>{ setVisibility(i)  }} >
                                <div className="row"> 
                                    <div className="col-md-5 col-5"> {v.data} </div> 
                                    <div className="col-md-3 col-3"> {v.kgDispo}kg</div>  
                                    <div className="col-md-3 col-3"> {v.prix_kg}€/kg</div> 
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-3">  
                            <div className="row"> 
                                <button className="btn btn-lg btn-warning" onClick={()=>{dispatcher({type:"ACCEPTER",voyage:v})} }>Confirmer</button> 
                            </div>
                        </div>
                        <div className="col-md-1 col-3">  
                            <div className="row"> 
                                <button className="btn btn-lg btn-danger" onClick={()=>{dispatcher({type:"REFUSER",voyage:v})} }>Refuser</button> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="row" id={i} style={{display:"none"}}> 
                        <DetailVoyage voyage={v}></DetailVoyage>
                    </div>
                    
                </div>})
            }    
        </div>
    </div>
    

</div>
);        
}
export default VoyagesListAttente;
