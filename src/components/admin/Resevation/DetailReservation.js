import React from 'react';

function DetailReservation(props){
    const {reservation} = props;
return(
<div>
    <div>
        <b> ID VOYAGE </b> {reservation.voyage.id} 
    </div>
    <div>
        <b> Date: </b> {reservation.voyage.date} 
    </div>
    <div>
        <b> Ville Depart :</b> {reservation.departCity}
    </div>
    <div>
        <b> Ville Arrive : </b> {reservation.arrivalCity}   
    </div>
    <div>
        <b> Numero Telephone:</b> {reservation.phoneNumSen}
    </div>
    <div>
        <b> Nom Expetiteur:</b> {reservation.fullNameSen} 
    </div>
    <div>
        <b> Email Expetiteur:</b> {reservation.emailSen} 
    </div>
    <div>
        <b> Mode Payement:</b> {reservation.paymentMode} 
    </div>
    <div>
        <b> prix: </b> { reservation.numberKg*reservation.voyage.priceByKg } euro 
    </div>
    <div>
        <b> Kilo : </b> {reservation.numberKg} kg  
    </div>
    <div>
        <b> Nom destinatair:</b> {reservation.fullNameRec}
    </div>
    <div>
        <b> Telphne destinatair:</b> {reservation.phoneNumRec}
    </div>
    <div>
        <b> Email destinatair:</b> {reservation.emailRec}
    </div>

</div>);
}

export default DetailReservation;