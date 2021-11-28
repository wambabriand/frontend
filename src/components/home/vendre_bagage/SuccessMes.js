import React from 'react';

const SuccessMes = props => {
    const { Annuler } = props;
    return (
    <div className='text-center'>
        <p> 
            Votre message demande a ete pris en compte. <br /> 
            Notre equipe vous recontacterons
        </p>
        <button onClick={() => Annuler()} className='btn btn-success'> Retour </button>
    </div>);
}

export default SuccessMes;
