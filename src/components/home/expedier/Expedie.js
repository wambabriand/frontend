import React, { useReducer } from 'react';
import FormExpedition from './FormExpedi.js';
import Voyage from './Voyages.js';

const componentList = {voyage:"VOYAGE_LIST",formReservation:"FORM_RESERVATION"};

const initialState = { listVoyages:[], selectedVoyage:undefined, selectedComponent:componentList.voyage };

const action = {
    do_reservation: 'WANT_TO_DO_RESERVATION',
    finish_reservation: 'FINISH_TO_DO_RESERVATION',
    cancel_resevation : 'CANCEL_TO_DO_RESERVATION'
}


function reducer(state, action){
    switch(action.type){
        case 'WANT_TO_DO_RESERVATION':
            return {...state, selectedComponent:'FORM_RESERVATION', selectedVoyage: action.selectedVoyage};
        case 'FINISH_TO_DO_RESERVATION':
            // send data to server
            return {...state, selectedComponent:'VOYAGE_LIST', selectedVoyage:undefined };
        case 'CANCEL_TO_DO_RESERVATION':
            return {...state, selectedComponent:'VOYAGE_LIST', selectedVoyage:undefined };
        default:
            return state;
    }
}

function Expedie (){
  
    const [state, dispatcher] = useReducer(reducer,initialState);

    if( state.selectedComponent === componentList.formReservation){
        return <FormExpedition  dispatcher = {dispatcher} actionType = {action}  voyage = {state.selectedVoyage}  > </FormExpedition>
    }
    else 
        return <Voyage dispatcher = {dispatcher} actionType = {action}> </Voyage>
 
}

export default Expedie;

