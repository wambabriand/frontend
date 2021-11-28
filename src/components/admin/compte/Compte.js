import React, { useReducer, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Password from './Password';
import ChangeEMail from './Email';
import { Card, Button } from 'react-bootstrap';
import { doPutWithAuth } from '../../../services/api';
import { useAuthContext } from '../../authentication/AuthContext';

const mycompte ={id:1, nom:"admin", email:'jego@yahoo.fr',  };

function reducer(state, action){
    switch(action.type){
        case '':
            return state;
        
        case 'ddd':
            return state;

        default:
            return state;
    }
}

function Compte(){
    const { token } = useAuthContext();
    const [compte, dispatcher] = useReducer(reducer,mycompte);
    const [journal, setJournal] =  useState(null);
    const [{ loading, error },executePut] = doPutWithAuth("/api/jego/lock/admin/put/journal", token);
    const {url, path} = useRouteMatch();

    function onUpdateJournal(){
        if(journal === null){
            return ;
        }
        const formdata = new FormData();
        formdata.append('journal', journal,'journal.pdf');
        executePut({data:formdata});
    }
    if(loading) return (<p className='my-5 py-5'>Loading..........</p>);
    if(error){
        console.log(error)
        return (
            <div className='my-5 py-5'>
                errorrr    signaler a briand
            </div>
        );
    }


return(<div className="row">
    <div className="col-md-2 col-12"></div>
    
    <div className="col-md-3 col-12">
        <Card className="text-center  my-5">
            <Card.Title className="mt-2 text-warning">Mettre à jour le journal Je Go</Card.Title>
            <Card.Body>
                <Card.Text>
                    Pour mettre à jour le journal Je Go <br></br>
                    il faut Chosir le nouveau journal à publié
                </Card.Text>
                <input   className="my-3" type="file" onChange={(e)=>{setJournal(e.target.files[0])}} accept="application/pdf"></input>
                <Button onClick={()=>{onUpdateJournal()}}>Mettre à Jour</Button>
            </Card.Body>
        </Card>
        <div className="my-2"> 
            <Link to={`${url}/password`} > Modifier le mot de passe</Link>
        </div>
    </div>
    <div className="col-md-7 col-12" >
        <Switch>
            <Route path={`${path}/password`}> <Password dispatcher={dispatcher} compte={compte}></Password></Route>
            <Route path={`${path}/email`}> <ChangeEMail dispatcher={dispatcher} compte={compte}></ChangeEMail></Route>
            <Route path={`${path}/emailJeGO`}> <ChangeEMail dispatcher={dispatcher} compte={compte}></ChangeEMail></Route>
        </Switch>
    </div>
</div>);
}

export default Compte;
