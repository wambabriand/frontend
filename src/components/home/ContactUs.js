import React, { useState } from 'react';
import { doPost } from '../../services/api';

function ContactUs (){

    const [message, setMessage] = useState({});
    const [{data,loading, error}, executePost] = doPost("/api/jego/unlock/post/contactUs");
    

    function validateEmail(email) {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function onSendToServer(){
        if( !validateEmail(message.email1)){
            alert("email non valid");
            return;
        }
        if(message.email1!== message.email2){
            alert("email doit etre le meme");
            return;
        }
        executePost({data:message});
    }
    function clean_form(){
        
        if(data && data.result) {
            return(<p> Merci de nous avoir contacté! Nous avons reçu votre message</p>);
        }
        else if(data && !data.result) {
            return(<p> Nous rencontrons un probleme! Veillez ressayer plus tard ou par telephone!</p>);
        }
    }

    if(loading) return(<p>Loading....</p>)
    if(error) return(<p>error! Nous rencontrons un probleme! Veillez ressayer plus tard ou par telephone!</p>)
    
    return (<div className="container">

        <div className="row  pt-5">
            <div className="col-md-2"> </div>
            <div className="col-md-8"> 
                <h2 style={{textAlign:'center'}}> Contactez Nous </h2>
                <div className='alert alert-success'>
                    <p>   Nous pouvons vous aider
                    T’chat, email, réseaux sociaux, téléphone... Contactez-nous à tout moment, 
                    nous répondrons avec plaisir. Retrouvez nous rapidemment grâce à la 
                    bulle présente sur tout votre parcours !
                    </p>
                </div> 
                <div>
                    <div>
                        <label>Nom </label>
                        <input id="nom" className="form-control" onChange={(e)=>{ setMessage({...message, nom:e.target.value}) }} type="text"></input>
                    </div>
                    <div>
                        <label>Email </label>
                        <input id="email1"  className="form-control" onChange={(e)=>{ setMessage({...message, email1:e.target.value}) }} type="email"></input>
                    </div>
                    <div>
                        <label>Email confirm</label>
                        <input  id="email2"  className="form-control" onChange={(e)=>{ setMessage({...message, email2:e.target.value}) }} type="email"></input>
                    </div>
                    <div>
                        <label>Phone number </label>
                        <input id="phoneNumber"  className="form-control" onChange={(e)=>{ setMessage({...message, phoneNumber:e.target.value}) }} type="text"></input>
                    </div>
                    <div>
                        <label>Objet </label>
                        <input id="objet" className="form-control"  onChange={(e)=>{ setMessage({...message, objet:e.target.value}) }} type="text"></input>
                    </div>
                    <div>
                        <label>Message </label>
                        <textarea id="content"   className="form-control" onChange={(e)=>{ setMessage({...message, content:e.target.value}) }}></textarea>
                    </div>
                    <div className="mt-2">
                        <button className="btn btn-primary" onClick={()=>{onSendToServer()}}> Envoyer</button>
                        {clean_form()}
                    </div>

                </div>
                <div className='alert alert-success mt-5'>
                    <p>Par appel ou WhatSapp </p>
                    <p>Depuis le Cameroun au (+237) 697979687 ou </p>
                    <p>Depuis l'Italie au (+39) 327 978 2779   ou  (+39) 351 738 8242</p>
                </div>
                <div className='alert alert-success'>
                    <p>Réseaux Sociaux </p>
                    <div className='row'>
                        <div className='col-md-6'>  
                            <p>Facebook </p> 
                        </div>
                        <div className='col-md-6'>  
                            <p>Email: <b> Jegoopayscmr@gmail.com</b></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>  
                            <p>Instagram </p> 
                        </div>
                        <div className='col-md-6'>  
                            <p>Snapchat </p>
                        </div>
                    </div>
                       
                    
                       
                    
                    
                </div>
            </div>
            <div className="col-md-3"> </div>

        </div>
    </div>);
}

export default ContactUs;
