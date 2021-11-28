import React from 'react';
import {Switch  , BrowserRouter, Route} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import NavBar from './NavBar';


function HomeRouter (){
    return (<div>
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>  
                <Route path='/login'>  <Login> </Login> </Route>
                <Route path='/register'>  <Register> </Register> </Route>
                <Route path='/'>  <Login> </Login> </Route>
            </Switch>
        </BrowserRouter>
    </div>);
}

export default HomeRouter;