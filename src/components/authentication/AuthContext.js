import React, { createContext, useContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {

    const [authData, setAuthData] =  useState({});
    const onLogout = () => setAuthData({});
    const onLogin = newAuthData => setAuthData(newAuthData);
    const authValue = useMemo( () => { return {...authData, onLogin, onLogout}; }, [authData]);

    return (<AuthContext.Provider value={authValue} {...props} />);
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;