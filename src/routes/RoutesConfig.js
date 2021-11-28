import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/user/User';
import Admin from '../components/admin/admin';
import PrivateRoutes from '../components/authentication/PrivateRoutes';

function RoutesConfig(){
    return(<div>
    <BrowserRouter>
        <Switch>
            <PrivateRoutes  path='/admin' component={Admin}/>
            <PrivateRoutes  path='/user' component={User}/>
            <Route path="/"> <Home></Home> </Route>
        </Switch>
    </BrowserRouter>
    </div>);
}

export default RoutesConfig;

/*

            <Route path="/admin"> <Admin> </Admin></Route>
            <Route path="/user"> <User></User> </Route>
*/