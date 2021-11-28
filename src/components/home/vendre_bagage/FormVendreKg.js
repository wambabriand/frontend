import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {doPost} from '../../../services/api.js';
import ErrorMessage from '../expedier/ErrorMessage.js';
import SuccessMes from './SuccessMes.js';

function FormVendreBagage(){
    const [infoVoyage, setInfoVoyage] = useState({});
    const [isSend, setIsSend] =  useState(false);
    
    const [{data,loading,error}, executePOST] = doPost("/api/jego/unlock/post/voyage");
    const history = useHistory();

    function Annuler(){
        setIsSend(false);
    }
    const goBack = () => {
        history.push('/');
    }
    function validateEmail(email) {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function expedier(){
        if(infoVoyage.file1===undefined || infoVoyage.file2===undefined|| infoVoyage.email===undefined|| infoVoyage.phoneNumber===undefined||
        infoVoyage.kgAvailable===undefined|| infoVoyage.priceByKg===undefined||infoVoyage.villesDeparture===undefined||infoVoyage.date===undefined){
            alert("Il faut remplir tous les champs");
            return;
        } 
        if(!validateEmail(infoVoyage.email)){
            alert("Adresse email invalid");
            return;
        }
        const formdata = new FormData();
        formdata.append('file1', infoVoyage.file1,'file1');
        formdata.append('file2', infoVoyage.file2,'file2');
        formdata.append('fileName', infoVoyage.email);
        formdata.append('email', infoVoyage.email);
        formdata.append('phoneNumber', infoVoyage.phoneNumber);        
        formdata.append('kgAvailable', infoVoyage.kgAvailable);
        formdata.append('priceByKg', infoVoyage.priceByKg);
        formdata.append('villesDeparture', infoVoyage.villesDeparture);
        formdata.append('villesArrival', infoVoyage.villesArrival);
        formdata.append('comment', infoVoyage.comment);
        formdata.append('date', infoVoyage.date);
        setIsSend(true);
        executePOST({data:formdata});
    }

    if(loading) return (<p> loading...</p>);
    if(error) return <ErrorMessage />

    if(data && isSend){
        if(data.result){
            return <SuccessMes Annuler={Annuler} />
        } 
        else {
            return <ErrorMessage />
        }
    } 

return (
<div className="container-fluid">
    <div className="row my-3">
        <h5 className="text-center">
        Vous etes voyageur et vous avez des kilos à vendre? Voici les informations que nous avons besoin pour confimrmer votre annonce.
        </h5>
    </div>
    <div className = 'form-group'>   
        <label> Nom et Prénom </label>
        <input type="text" onChange={(event)=>{ setInfoVoyage({...infoVoyage, fullName:event.target.value}) }} placeholder="Kenfack piere" className="form-control"></input>
    </div>
    <div className='row'>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Email</label>
                <input type="email" id="email" onChange={(event)=>{ setInfoVoyage({...infoVoyage, email:event.target.value}) }}   className="form-control"></input>
            </div>
        </div>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Numero de telephone</label>
                <input type="text" onChange={(event)=>{ setInfoVoyage({...infoVoyage, phoneNumber:event.target.value}) }}  placeholder="324544545445"  className="form-control"></input>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Nombre de Kilogramme disponible</label>
                <input type="number"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, kgAvailable:event.target.value}) }}   placeholder="En Kg" min='0' className="form-control"></input>
            </div>
        </div>
        <div className='col-md-6 col-12'> 
            <div className = 'form-group'>   
                <label>Prix du Kilo</label>
                <input type="number"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, priceByKg:event.target.value}) }}  placeholder="En euro" min='0' step='0.5' className="form-control"></input>
            </div>
        </div>
    </div>

    <div className = 'form-group'>   
        <label>Villes de collecte des colis</label>
        <input type="text"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, villesDeparture:event.target.value}) }}  className="form-control"></input>
    </div>
    <div className = 'form-group'>   
        <label>villes de livraisons</label>
        <input type="text"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, villesArrival:event.target.value}) }}  className="form-control"></input>
    </div>
    <div className = 'form-group'>   
        <label>Date de depart</label>
        <input type="date"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, date:event.target.value}) }}  className="form-control"></input>
    </div>
    <div className = 'form-group'>   
        <label>Y'a til des colies(voir section service) que vous nous voulez pas transporter? si oui cité les ici</label>
        <input type="text"  onChange={(event)=>{ setInfoVoyage({...infoVoyage, comment:event.target.value}) }}   className="form-control"></input>
    </div>
    <div className = 'form-group'>   
        <label>biellet de voyage(Nous voulons la confirmation de votre voyage)</label>
        <input type="file"  onChange={(event)=>{  setInfoVoyage( {...infoVoyage, file1:event.target.files[0]}) }  }className="form-control"></input>
    </div>
    <div className = 'form-group'>   
        <label>Document d'identité(Nous voulons nous s'assurer que vous etes c'est vrimanet vous)</label>
        <input type="file"  onChange={(event)=>{   setInfoVoyage( {...infoVoyage, file2:event.target.files[0]}) }}  className="form-control"></input>
    </div>
    <div className="row">
        <div className="col-6"> 
            <button className=' my-5 btn btn-block btn-danger' onClick={()=>{goBack()}}>Annuler</button>
        </div>
        <div className="col-6"> 
            <button className=' my-5 btn btn-block btn-warning' onClick={()=>{expedier()}}>Reserver</button>
        </div>
    </div>
</div>    
);}

export default FormVendreBagage;
