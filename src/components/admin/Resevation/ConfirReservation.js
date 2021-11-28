import React, { useState } from 'react';
import DetailReservation from './DetailReservation';
import { doDeleteWithAuth,  doGetWithToken} from '../../../services/api.js';
import { useAuthContext } from '../../authentication/AuthContext';



function ConfirmReservation(props){

    const { token } = useAuthContext();
    
    //const [{data:reservations,loading:loadingGet,error:errorGet},refetch] = doGet("/api/jego/lock/admin/get/reservations");
    const [{data:reservations,loading:loadingGet,error:errorGet},refetch] = doGetWithToken("/api/jego/lock/admin/get/reservations", token);
    const [{data:dataDelete, loading:loadingDelete, error:errorLoading}, executeDelete] =  doDeleteWithAuth("/api/jego/lock/admin/delete/reservation", token);
 
    const [isRefetch,setIsRefetch] = useState(false);
    const [direction, setDirection] = useState("IT->CMR");

    function onDeleteReservation(reservation){
        setIsRefetch(false);
        executeDelete({data:reservation});
    }
    function setViewDetailReservation(i){
        const element = document.getElementById(i).style.display;
        if( element === "") document.getElementById(i).style.display = "none";
        else document.getElementById(i).style.display = "";
    }

    function ShowView(){
        let tmp_reser = reservations.filter(v=>{return (v.confirm && v.voyage.direction===direction);  });
        if( tmp_reser.length <1 ){
            return <p> IL n'y a pas de voyage disponible  pour cette direction!!! </p>
        }
        else{
            return tmp_reser.map( (r,i)=>{
                return<div key={i} className="my-1">
                        <div className="row"> 
                            <div className="col-md-3 col-4"> {r.voyage.date}</div>    
                            <div className="col-md-7 col-8"> {r.fullNameSen} </div>
                        </div>
                        <div className="row"> 
                            <div className="col-md-4 col-4"></div>
                            <div className="col-md-3 col-4"> 
                                <button className="btn btn-info" onClick={ ()=>setViewDetailReservation(i)}> Detail </button>
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


    if(loadingDelete || loadingGet) return(<p>Loading...</p>);
    if(errorLoading || errorGet) {
        console.log(JSON.stringify(errorLoading||errorGet))
        return(<p>error...</p>)
    }
    if(dataDelete) {
        if(!isRefetch){
            return(<div>
                <p>La suppression c'est bien passée s'est bien passée. cliquer ici pour retourner 
                    <button className="btn btn-success btn-lg" onClick={()=>{setIsRefetch(true); refetch();}} > Go Back </button>
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
                    <select  onChange={(e)=>{ setDirection(e.target.value); }} className="form-control">
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
export default ConfirmReservation;