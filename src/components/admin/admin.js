import React from 'react';
import AdminNavBar from './AdminNavBar';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import VoyageList from './VoyageList.js';
import ReservationList from './Resevation/ReservationList';
import Compte from './compte/Compte';
import CreateVoyage from './CreateVoyage';
import ConfirmReservation from './Resevation/ConfirReservation';

    

      
function Admin(){

    const { path } = useRouteMatch();
   
    return(
    <div>
        <AdminNavBar> </AdminNavBar>
            <Switch>
                <Route path={`${path}/voyages`}> <VoyageList> </VoyageList>  </Route>
                <Route path={`${path}/attenReservations`}> <ReservationList> </ReservationList></Route>
                <Route path={`${path}/confirReservations`}> <ConfirmReservation></ConfirmReservation> </Route>
                <Route path={`${path}/compte`}> <Compte> </Compte></Route>
                <Route path={`${path}/createVoyage`}> <CreateVoyage></CreateVoyage></Route>
                <Route path={`${path}/`}> <VoyageList></VoyageList>  </Route>
            </Switch>
    </div>
    );
}
export default Admin;
