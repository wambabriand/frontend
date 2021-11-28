import React from 'react';
import { doPut } from '../../../services/api';
import { useHistory } from 'react-router-dom';

function Password(){
    
    const [{data, loading, error}, executePut] =  doPut("/api/jego/lock/admin/put/password");

    const history = useHistory();

    function onModifierPassword(){
        console.log("Il faut prendre l'email dans le context");

        let pwd1 = document.getElementById("pwd1").value ;
        let pwd2 = document.getElementById("pwd2").value ;
        let pwd3 = document.getElementById("pwd3").value ;
        if(pwd1 === ""){
            alert("Vous devez inserer le mot de passe actuel");
            return;
        }
        if(pwd2 !== pwd3 || pwd2 === ""){
            alert("La valeur du nouveau mot de passe doit etre la meme");
            return;
        }
        executePut({data:{email:"dfdf@dfdf", pwd_old:pwd1, pwd_new:pwd2}});
    }



    if(loading) return(<p> updating...</p>);
    if(error) return(<p> une erreur s'est produite! ressayez plus tard!</p>);
    if(data) return(<p className="py-5 m-5"> Modification reussite!  <button onClick={()=>{history.goBack();}}> retour</button> </p>);

return(<div className="row mt-5">
    <div className="col-lg-2"> </div>
    <div className="col-lg-5">
        <div className="form-group">
            <label>Ancien Password</label>
            <input className="form-control" id="pwd1" type="password"></input>
        </div>
        <div className="form-group">
            <label>Nouveau mot de passe</label>
            <input className="form-control"  id="pwd2" type="password"></input>
        </div>
        <div className="form-group">
            <label>Confirmer le nouveau mot de passe</label>
            <input className="form-control"  id="pwd3" type="password"></input>
        </div>
        <button className="btn btn-primary" onClick={()=>{onModifierPassword()} }> Modifier</button>
    </div>
</div>);
}
export default Password;
