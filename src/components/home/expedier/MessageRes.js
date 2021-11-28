import React from 'react';

const MessageRes = props => {
    const { Annuler } = props;

    return (
    <div className='container-fluid'>
        <div className='row mt-5 pt-5 '>
            <div className='col-md-3 col-12'></div>
            <div className='col-md-6 col-12 text-center border p-3 m-3'>
                <p> Votre reservation s'est très bien passer! <br></br>
                Vous avez reçu un message de confirmation dans votre email.<br></br>
                Vous allez etre contacter par nos equipes.<br></br>
                Merci pour votre confiance!
                </p>
                <button className='btn btn-success' onClick={()=>{Annuler()}}> Retour </button>
                
            </div>
            <div className='col-md-3 col-12'></div>
        </div>
    </div>);
}
export default MessageRes;