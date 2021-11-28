import React, { useState } from 'react';
import DetailReservation from './DetailReservation';
import {  doGetWithToken, doDeleteWithAuth, doPutWithAuth } from '../../../services/api.js';
import { useAuthContext } from '../../authentication/AuthContext';


function ReservationList(props){

    const { token } = useAuthContext();
    //const [{data:reservations,loading:loadingGet,error:errorGet},refetch] = doGet("/api/jego/lock/admin/get/reservations");
    
    const [{data:reservations,loading:loadingGet,error:errorGet},refetch] = doGetWithToken("/api/jego/lock/admin/get/reservations", token);
    const [{data:dataDelete, loading:loadingDelete, error:errorDelete}, executeDelete] =  doDeleteWithAuth("/api/jego/lock/admin/delete/reservation", token);
    const [{data:dataPut, loading:loadingPut, error:errorPut}, executePut] =  doPutWithAuth("/api/jego/lock/admin/put/confirmReservation", token);
    const [isRefetch,setIsRefetch] = useState(false);
    const [direction, setDirection] = useState("IT->CMR");

    function onDeleteReservation(reservation){
        setIsRefetch(false)
        executeDelete({data:reservation});
    }
    function confirmReservation(reservation){
        setIsRefetch(false)
        executePut({data:reservation});
    }
    function setViewDetailReservation(i){
        const element = document.getElementById(i).style.display;
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }

    function ShowView(){
        let tmp_reser = reservations.filter(v=>{return (!v.confirm && v.voyage.direction===direction);  });
        if( tmp_reser.length <1 ){
            return <p> il n'y a pas de voyage disponible  pour cette direction!!! </p>
        }
        else{
            return tmp_reser.map( (r,i)=>{
                  return<div key={i} className="my-1">
                          <div className="row"> 
                              <div className="col-md-3 col-4"> {r.voyage.date}</div>    
                              <div className="col-md-7 col-8"> {r.fullNameSen} </div>
                          </div>
                          <div className="row"> 
                              <div className="col-md-3 col-4"> 
                                  <button className="btn btn-info" onClick={ ()=>setViewDetailReservation(i)}> detail </button>
                              </div>
                              <div className="col-md-4 col-4">       
                                  <button className="btn btn-warning" onClick={()=>{confirmReservation(r)}}> Confirmer </button>
                              </div>
                              <div className="col-md-3 col-4"> 
                                  <button className="btn btn-danger" onClick={()=>{onDeleteReservation(r)}}> Supprimer </button>
                              </div>
                          </div>
                          <div id={i} style={{display:"none"}}>
                              <DetailReservation reservation={r}></DetailReservation>
                          </div>
                      </div>
              })
        }
    }

    if(loadingDelete || loadingPut || loadingGet) return(<p>Loading...</p>);
    if(errorDelete || errorPut || errorGet) {
        console.log(JSON.stringify(errorDelete || errorPut|| errorGet))
        return(<p>error...</p>)
    }
    if(dataDelete || dataPut){
       if(!isRefetch){
        return(<div className="row">
            <p>Votre confirmation s'est bien passée. cliquer ici pour retourner 
                <button className="btn btn-lg btn-primary" onClick={()=>{setIsRefetch(true); refetch();}} >Go Back</button>
            </p>
        </div>);
       }
    }


    
   
    


return (<div className="container-fluid">
    <div className="row">
        <div className="col-lg-3 col-12"></div>
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
            { ShowView() }
        </div>
    </div>
</div>);
}

export default ReservationList;