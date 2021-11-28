import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorMessage = () => {
    const history = useHistory();

    const goToContactUs = () => {
        history.push('/conatcts');
    }

    return (
    <div className='container-fluid'>
        <div className='row mt-5 pt-5 '>
            <div className='col-md-3 col-12'></div>
            <div className='col-md-6 col-12 text-center bg-danger border p-3 m-3'>
                <p>Une erreur s'est produite dans le système! <br></br>
                Contacter directement le service support<br></br>
                </p>
                <button className='btn btn-success' onClick={()=>{goToContactUs()}}> Contacter le support </button>
                
            </div>
            <div className='col-md-3 col-12'></div>
        </div>
    </div>);
}
export default ErrorMessage;