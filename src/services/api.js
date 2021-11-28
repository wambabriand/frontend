/* eslint-disable react-hooks/rules-of-hooks */
import useAxios from 'axios-hooks';

const baseUrl = "http://localhost:80";

//const baseUrl = "http://192.168.43.222:8081";

// const baseUrl = "http://51.68.225.207:80";
// pour la production il faut utiliser cette url 51.68.225.207

//const baseUrl = "http://165.22.75.26:8081";
// http://165.22.75.26:8081/api/jego/unlock/get/voyages



const headers = {
    'Content-Type': 'application/json; charset=utf-8',
};
const headers1 = {
    'Content-Type': 'text/plain',
};

function doGet(url){
    return useAxios(
        { 
           url: baseUrl+url,
           headers: headers1
        });
}
function doGetWithToken(url, token){
    const token1 = localStorage.getItem('token');
    console.log(token1);
    return useAxios({ 
        url: baseUrl+url,
        headers: {
            'Authorization': 'Bearer '+ token1,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Authorization',
        }
    });
}


function doPost(url){
    return useAxios( {
            url:baseUrl+url,
            method:'POST',
            headers
        },
        {manual:true}
);}
const doPutWithAuth = (url, token) => {
    const token1 = localStorage.getItem('token');
    console.log(token1);
    return useAxios( {
        url:baseUrl+url,
        method:'PUT',
        headers: {
            'Authorization': 'Bearer '+ token1,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'PUT',
            'Access-Control-Request-Headers': 'Authorization',
        }
    },
    {manual:true} );
}

const doDeleteWithAuth = (url, token) => {
    const token1 = localStorage.getItem('token');
    console.log(token1);
    return useAxios( {
        url:baseUrl+url,
        method:'DELETE',
        headers: {
            'Authorization': 'Bearer '+ token1,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'DELETE',
            'Access-Control-Request-Headers': 'Authorization',
        }
    },
    {manual:true} );
}

const doPostWithToken = (url, token) => {
    const token1 = localStorage.getItem('token');
    console.log(token1);
    return useAxios( {
        url:baseUrl+url,
        method:'POST',
        headers: {
            'Authorization': 'Bearer '+ token1,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Authorization',
        }
    },
    {manual:true} );
}

function doPut(url){
    return useAxios( {
        url:baseUrl+url,
        method:'PUT',
        headers
    },
    {manual:true}
); }

function doDelete(url){
    return useAxios({   
        url:baseUrl+url,
        method:'delete',
        headers
    },{   
        manual:true
    } 
);}


const doAuthentication = data => {
    return useAxios({
        url: baseUrl+'login',
        method: 'POST'
    },{
       manual: true 
    }
    );
}

export  { doGet, doPost, doDelete, doPut,doPostWithToken, doPutWithAuth, doDeleteWithAuth, doAuthentication, doGetWithToken };
