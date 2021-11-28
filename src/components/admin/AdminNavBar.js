import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function AdminNavBar(){
const {url} = useRouteMatch();
const Logout = () => {
  localStorage.setItem('username', '');
  localStorage.setItem('role', '');
  localStorage.setItem('token', '');
}

return (<div >
  <Navbar bg="primary"  className="p-3" variant="dark"  expand="lg">
    <Navbar.Brand href="#"><h3>JE GO O PAYS</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink to={`${url}/voyages`} className="nav-link"> <h5>  Liste des Voyages </h5>   </NavLink>
        <NavLink to={`${url}/createVoyage`} className="nav-link"><h5>  Ajouter un Voyage  </h5> </NavLink>
        <NavLink to={`${url}/attenReservations`} className="nav-link"><h5>  Reservations en Attentes </h5>  </NavLink>
        <NavLink to={`${url}/confirReservations`} className="nav-link"><h5>  Reservations Confirmées </h5></NavLink>
      </Nav>
      <Nav inline="true">
        <NavLink to={`${url}/compte`} className="nav-link"><h5>  Parametres Compte  </h5></NavLink>
        <NavLink to='/login' onClick={() => Logout()} className="nav-link"><h5>  Logout </h5>   </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>);

}


export default AdminNavBar;
