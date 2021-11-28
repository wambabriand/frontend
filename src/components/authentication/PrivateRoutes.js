import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login';
import { useAuthContext } from './AuthContext';

const PrivateRoutes = ({component, ...options}) => {
    
    //const {username} = useAuthContext();
    const username1 = localStorage.getItem('username');

    const finalComponent  = username1 === '' ? Login : component;

    return (<Route component={finalComponent} {...options}/>);
}
export default PrivateRoutes;