import React from 'react';

function DetailVoyage(props){
    const {voyage} = props;
    
      
		/*this.comment = v.getComment();
		this.phoneNumber = v.getPhoneNumber(); 
		this.email = v.getEmail() ;  
		this.fullName = v.getFullName();
		this.cmIt = v.getCmIt();
		this.departures = v.getDepartures();
		this.arrivals = v.getArrivals();*/

    return(  
        <div className="row">
            <div className="col-md-12 alert pt-2">                    
                <div> 
                    <h3> Details du voyage</h3>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-12"> <b>Date du voyage: </b>{voyage.date} </div>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-12 col-12"> <b>Voyageur:</b> {voyage.typeTravaller}</div> 
                </div>
                <div className="row my-1"> 
                    <div className="col-md-12 col-12"> <b>Disponible:</b>  {voyage.kgAvailable} Kg</div>
                </div>
                <div className="row my-1"> 
                    <div className="col-md-12 col-12"> <b>Prix/kg:</b> {voyage.priceByKg}  euro</div>
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

export default DetailVoyage;