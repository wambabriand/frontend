import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

function NavBar (){
  
  return (<div >
      <Navbar bg="success"  className="p-3 fixed-top" variant="dark"  expand="lg">
        <Navbar.Brand  href="/"><h3>JE GO O PAYS</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to='expedie' className="nav-link"> <h5>  Voyages Disponibles </h5>  </NavLink>
            <NavLink to='vendreBagage' className="nav-link"><h5>vendre Bagage</h5> </NavLink>
            <NavLink to='services' className="nav-link"> <h5>services</h5>  </NavLink>
            <NavLink to='conatcts' className="nav-link"><h5>Nous Contacter</h5> </NavLink>
            <NavLink to='apropos' className="nav-link"> <h5>A Propos</h5> </NavLink>
            <NavLink to='partners' className="nav-link"> <h5>Nos partenaires</h5> </NavLink>
          </Nav>
         {/*  <Nav inline>
            <NavLink to='register' className="nav-link"> <h5>  Register </h5></NavLink>
            <NavLink to='login' className="nav-link"> <h5>Login</h5>  </NavLink>
          </Nav>*/} 
        </Navbar.Collapse>
      </Navbar>
    </div>);
}

export default NavBar;

