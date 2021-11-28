import React from 'react';
import { Jumbotron, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { doGet } from '../../services/api';

function Welcome(){

    const history = useHistory();
    
    const [ {data, loading, error}] = doGet("/api/jego/unlock/get/journal");
    
    function openJournal(){
        if(data){
            const tmp = "data:application/pdf;base64,"+data.filebytes;
            window.open(tmp)
        }
        else{
            alert("Nous avons aucune infos à partager !!!");
        }
    }
   
    if(loading) return(<p>Loading...</p>);
    if(error) return(<p>Nos services sont indispo!</p>);

    return (<div className="container-fluid ">
        <div className="row  bg-light text-dark"> 
            <div className="col-lg-5">
                <div className="row  mt-5">
                    <div className="col-lg-3"></div>
                    <Card  className="text-center">
                        <Card.Body>
                            <Card.Title className="text-danger"> <b> Journal Je Go </b> </Card.Title>
                            <Card.Text>
                                Suivez l'actualite grace au journal Je Go <br></br>
                            </Card.Text>
                            <Button onClick={()=>{openJournal()}} variant="secondary"> Lire le journal</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="row p-5 mt-5">
                    <h1 className="text-center"> 
                        <b>
                            Utilise les services JE GO O PAYS pour
                            facilement recevoir et renvoyer des colis
                            entre le Camroun et L'Italie
                        </b>
                    </h1>
                </div>
            </div>
            <div className="col-lg-1"> </div>
            <div className="col-lg-4"> 
                <div className="row mt-5">
                    <Jumbotron>
                        <h4 className="text-center">Vous voulez envoyer un colis du Cameroun pour L'italie ou de l'Italie au Cameroun? </h4> 
                        <p>
                            <button className="btn btn-lg btn-block btn-warning" onClick={()=>{history.push("/expedie");}}>
                                Envoyer un colis
                            </button>
                        </p>
                    </Jumbotron>
                </div>
                <div className="row"> 
                    <Jumbotron>
                        <h4 className="text-center"> Vous voyagez du Cameroun vers l'Italie ou de l'Italie vers le cameroun 
                            et vous voulez vendre une partie ou la totalité de vos kilogrammes? </h4>
                        <p>
                            <button className="btn btn-lg btn-block btn-warning" onClick={()=>{history.push("/vendreBagage");}}>
                                Vendre mes kilogrammes
                            </button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    </div>)
}

export default Welcome;