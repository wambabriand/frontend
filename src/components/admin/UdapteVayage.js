import React, { useState, useEffect } from 'react';


function UpdateVoyage(props){

    const {voyageToUpdate, setVoyageToUpdate, executePut} = props;
    const [voyage, setVoyage] =  useState( {...voyageToUpdate, arrivals: voyageToUpdate.villeDepart, departures: voyageToUpdate.villeDarrive});    
    useEffect(()=>{setVoyage(voyageToUpdate); }, [voyageToUpdate])

  
return(<div>
    <div className='row'>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Date de depart</label>
                <input type="date" value={voyage.date} onChange={(e)=>{ setVoyage({...voyage, date:e.target.value}); } } className="form-control"></input>
            </div>
        </div>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Type de voyageur</label>
                <select value={voyage.typeTravaller} onChange={(e)=>{ setVoyage({...voyage, typeTravaller:e.target.value}) } } className="form-control">
                    <option value="JeGO"> JeGO</option>
                    <option value="prive"> Prive</option>
                </select>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Nombre de Kilogramme disponible</label>
                <input type="number" min='0' value={voyage.kgAvailable} onChange={(e)=>{ setVoyage({...voyage, kgAvailable:e.target.value}) } } className="form-control"></input>
            </div>
        </div>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Prix du Kilo</label>
                <input type="number" min='0' value={voyage.priceByKg} onChange={(e)=>{ setVoyage({...voyage, priceByKg:e.target.value}) } }  step='0.5' className="form-control"></input>
            </div>
        </div>
    </div>
    <div className = 'form-group'>   
        <label>Ville de depart(citer toutes les villes ou vous pouvez recuperer les colies)</label>
        <textarea rows="2" cols="40"  value={voyage.departures} onChange={(e)=>{ setVoyage({...voyage, departures: e.target.value}) } } ></textarea>
    </div>
    <div className = 'form-group'>   
        <label>Ville de d'arrivé(ou bien c'est a vous admin de le faire plus tard?)</label> 
        <textarea rows="2" cols="40"  value={voyage.arrivals} onChange={(e)=>{ setVoyage({...voyage, arrivals: e.target.value}) } } ></textarea>
    </div>
    <div className = 'form-group'>   
        <label>Y'a til des colis autre que ceux ceux de la <a target="_blank" href="/services"> (voir section service)</a> que vous nous voulez pas transporter? si oui cité les ici</label>
        <textarea rows="2" cols="40"  value={voyage.comment?voyage.comment:""} onChange={(e)=>{ setVoyage({...voyage, comment: e.target.value}) } } ></textarea>
    </div>
    <div className="row">
        <div className="col-6"> 
            <button className=' my-5 btn btn-block btn-danger' onClick={ ()=>{ setVoyageToUpdate(undefined) }}>Annuler</button>
        </div>
        <div className="col-6"> 
            <button className=' my-5 btn btn-block btn-warning' onClick={()=>{ executePut({data:voyage})  }}>Enregistrer </button>
        </div>
    </div>
</div>);
}

export default UpdateVoyage;

