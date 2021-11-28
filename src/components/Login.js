import React from 'react';
import{ useHistory, useRouteMatch } from 'react-router-dom';
import { doPost } from '../services/api';
import { useAuthContext } from './authentication/AuthContext';


function Login(){
    const history = useHistory();
    const [{data,loading,error},executePost] = doPost("/login");
    
    const { url } = useRouteMatch();

    

    
    const { onLogin } = useAuthContext();
   
    function fakeLogin(){
        executePost({data:{username:'admin', password:'admin'}});
    
    }
    if(data){
       if(data && data.token){
            onLogin({username:'admin', role: 'role', token: data.token});
            localStorage.setItem('username', 'admin');
            localStorage.setItem('role', 'admin');
            localStorage.setItem('token', data.token);
            console.log(data);
            if(url === '/login')
                history.push("/admin");
            else
                history.push(url);
            console.log(url)
        }
        // http://localhost/phpmyadmin/doc/html/config.html#server-connection-settings
        // http://165.22.75.26/phpmyadmin/index.php?
        
    }


    if(error){
        return <div>
            errroorrrrrrrrrrrrrrrrrrrr
            {console.log(error)}
        </div>
    }
    if(loading){
        return(<div>
            loading..............
        </div>)
    }
    
    return(
    <div>
        <div className="container">
            <div className="row  mt-5 ">
                <div className='col-md-3'></div>
                <div className='col-md-5 bg-dark'>
                    <div className = 'form-group mt-5 '>   
                        <label className ="text-white">Email address</label>
                        <input type="email" className="form-control"></input>
                    </div> 
                    <div className = 'form-group'>   
                        <label className ="text-white">Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button onClick={()=>{fakeLogin()}} className='my-5 btn btn-block btn-primary' >Login</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;