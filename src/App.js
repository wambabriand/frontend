import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesConfig from './routes/RoutesConfig';
import { StateProvider } from './components/State';
import AuthProvider from './components/authentication/AuthContext';
function App() {

  const reducer = (state,action)=>{
    switch(action.type){
      case 'LOGIN':
        return {...state, logIn:true}
      case 'LOGOUT':
        return {...state, logIn:false}
      
      default :
      return state;
    }
  }

  const initialState = {logIn:false};

  return (
  <div> 
    <StateProvider reducer={reducer} initialState={initialState}>
      <AuthProvider>
        <RoutesConfig></RoutesConfig>
      </AuthProvider>
    </StateProvider>
  </div>
  );
}

export default App;
//<!--<RoutesConfig></RoutesConfig>
//<Test1></Test1> 
    //  <RoutesConfig></RoutesConfig>