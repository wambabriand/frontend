import React from 'react';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import {Switch  , Route} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import About from './About';
import ContactUs from './ContactUs';
import Partner from './Partener';
import Expedie from './expedier/Expedie.js';
import VendreBagage from './vendre_bagage/VendreBagage.js';
import Services from './services/services';
import Welcome from './Welcome';



function Home (){
    return (
    <div>     
        <NavBar></NavBar>
        <div className='py-5'>
            <Switch> 
                <Route path='/login'> <Login />  </Route>
                <Route path='/register'> <Register />  </Route>
                <Route path='/apropos'> <About /> </Route>
                <Route path='/conatcts'><ContactUs />     </Route>
                <Route path='/partners'><Partner />     </Route>
                <Route path='/expedie'><Expedie /> </Route>
                <Route path='/services'><Services /></Route>
                <Route path='/vendreBagage'><VendreBagage /> </Route>
                <Route exact path='/'> <Welcome /> </Route>
            </Switch>
        </div>
            <FooterBar></FooterBar>
    </div>);
}

export default Home;