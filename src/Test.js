import React from 'react';

function Test(){
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Test;

/**
 * import React, { useState, useReducer } from 'react';
import FormExpedition from './FormExpedi.js';
import Voyage from './Voyages.js';

const voyages = [
    {data:"12/05/2020", prix_kg:"10", monaie:"euro", kgDispo:92, voyage:"CMR->IT", type:"JeGO", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"19/05/2020", prix_kg:"10", monaie:"euro", kgDispo:92, voyage:"CMR->IT", type:"Prive", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"52/45/2020", prix_kg:"10", monaie:"fcfa", kgDispo:92, voyage:"IT->CMR", type:"Prive", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"02/05/2020", prix_kg:"10", monaie:"fcfa", kgDispo:92, voyage:"IT->CMR", type:"JeGO",
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"10/11/2020", prix_kg:"8", monaie:"fcfa", kgDispo:92, voyage:"IT->CMR", type:"JeGO", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"12/02/2020", prix_kg:"15", monaie:"euro", kgDispo:92, voyage:"CMR->IT", type:"Prive", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]},

    {data:"11/10/2020", prix_kg:"6", monaie:"fcfa", kgDispo:92, voyage:"IT->CMR", type:"JeGO", 
    villeDepart:["Yaounde","douala","bafoussam"], villeDarrive:["bologne","rome","parma","turin"]}
];

const pages = {voyage:"VOYAGE",reservation:"RESERVATION"};

const initialState = {  page: pages.voyage, 
    listVoyages:[],
    selectedVoyage:undefined,
    selectedComponent:'VOYAGE_LIST'

};

function reducer(state, action){
    switch(action.type){
        case 'WANT_TO_DO_RESERVATION':
            // il faut lui presenter le form pour la reservation
            // il faut dire au composant pere de lui presenter le form pr la reservation

            return {...state, selectedComponent:'VOYAGE_LIST', selectedVoyage: action.voyage};

        case 'FINISH_TO_DO_RESERVATION':
            // il faut revenir sur la liste des reservation

            return {...state, selectedComponent:'VOYAGE_LIST', selectedVoyage:undefined };

        case 'CANCEL_TO_DO_RESERVATION':

            return {...state, selectedComponent:'VOYAGE_LIST', selectedVoyage:undefined };

        default:
            return state;
    }
}

const action = {
    do_reservation: 'WANT_TO_DO_RESERVATION',
    finish_reservation: 'FINISH_TO_DO_RESERVATION',
    cancel_resevation : 'CANCEL_TO_DO_RESERVATION'
}


function Expedie (){
  
    const [state, dispatcher] = useReducer(reducer,initialState);

    const [choixVoyage, setChoixVoyage] = useState("CMR->IT");
    // je me fais une get de liste de voyage
    const [choixReservation , SetchoixReservation] =  useState(undefined);

    const [page,setPage] = useState(pages.voyage);

    function showPage(){
        if(state.selectedComponent === 'VOYAGE_LIST'){
            return <Voyage dispatcher={dispatcher} actionType ={action} > </Voyage>
        }
        else if( state.selectedComponent === 'RESERVATION_FORM'){
            return <p> page Reservation</p>
            // <FormExpedition voyage={choixReservation} setPage={setPage}> </FormExpedition>
        }
    }

    function showFrom(d){
        // ca get les info du voyage 
        SetchoixReservation(d);
    }
    function onChangeDirection(direction){
        setChoixVoyage(direction); 
        SetchoixReservation(undefined);
    }
    function text(){
        if(choixReservation!== undefined){
            //  retourne le petit for 
            return <FormExpedition voyage={choixReservation}></FormExpedition>;
        }
    }
    function setVisibility(i){
        const element = document.getElementById(i).style.display;
        console.log(document.getElementById(i));
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }
    function showDetaile(voyage){
        return(  
        <div className="row">
            <div className="col-md-12 alert py-3">                    
                <div> 
                    <h3> Details du voyage</h3>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-12"> <b>Date du voyage: </b>{voyage.data} </div>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-8 col-12"> <b>Voyageur:</b> {voyage.type}</div>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-5 col-12"> <b>Disponible:</b>  {voyage.kgDispo} Kg</div>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-4 col-12"> <b>Prix/kg:</b> {voyage.prix_kg} {voyage.monaie}</div>
                </div>
                <div className="row my-1"> 
                    <div className="col-12"> <b>Departs:</b> {voyage.villeDepart.map( v => {return v +", ";})}</div>
                </div>
                <div className="row my-1"> 
                    <div className="col-12"> <b>Arrivées:</b> {voyage.villeDarrive.map( v => {return v +", ";})}</div>
                </div>
            </div>
        </div>    
        );
    }


    return(
    <div className="container-fluid">
        
        <div className="row"> 
            <div className='col-md-3 col-12'></div>
            <div className="col-md-6 col-12"> 
                <h2>Transport des colies Cameroun {"<->"} Italie </h2>
        
                <div className="form-group row mt-3">
                    <label className="col-md-4 col-6 col-form-label">Direction du Voyage </label>
                    <div className="col-md-4  col-6">
                        <select className="form-control" onChange={ (e)=>{onChangeDirection(e.target.value)} }>
                            <option value="CMR->IT"> CMR -> IT</option>
                            <option value="IT->CMR"> IT -> CMR</option>
                        </select>
                    </div>
                </div>

                {
                voyages.filter( (v)=>{ return v.voyage === choixVoyage})
                .map( (d,i)=>{ 
                return (
                    <div key={i} >
                        <div className="row mt-2"> 
                            <div className="col-md-8 col-8">
                                <a href='#/'   onClick={ (e)=>{ setVisibility(i+d.voyage)  }} >
                                    <div className="row"> 
                                        <div className="col-md-5 col-5"> {d.data} </div> 
                                        <div className="col-md-3 col-3"> {d.kgDispo}kg</div>  
                                        <div className="col-md-3 col-3"> {d.prix_kg}€/kg</div> 
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-3">  
                                <div className="row"> 
                                    <button className="btn btn-lg btn-warning" onClick={()=>{showFrom(d)} }>Reserver</button> 
                                </div>
                            </div>
                        </div>

                        <div id={i+d.voyage} style={{display:"none"}}> 
                                { showDetaile(d) }
                        </div>

                    </div>) ; 
                })
                }


            </div>
            <div className='col-md-3 col-12'></div>
        </div>
      

       
        {
          text()

        }
        {
            page
        }
        {
            
            showPage()
        }
       
    </div>);
}

export default Expedie;


 */