import React from 'react';

function About (){
    return (<div className="container">

    <div className="row pt-5">
        <div className="col-md-2"> </div>
        <div className="col-md-8"> 
            <h2 style={{textAlign:"center"}}> Qui sommes nous ? </h2>
            <div className='alert alert-success'>
                <p>       

                    Quand en 2017, Fandom Noubi Brunel lançait JE GO O PAYS, 
                    il ne savait pas qu'il allait révolutionner le monde du 
                    fret aérien dans la Communauté Camerounaise d'Italie.
                            
                </p>
            </div>

            <div className='alert alert-success'>
                <p>     
                    Aujourd'hui, JE GO O PAYS se positionne comme la Start-up 
                    Leader en Italie des services de transport et Logistique. 
                    Nos 60 collaborateurs dans 11 régions d'Italie et 3 régions 
                    du Cameroun travaillent chaque jour pour t'aider à te rapprocher 
                    de tes proches, développer tes business et trouver de nouveaux 
                    partenariats entre l'Italie et le Cameroun. Ou mieux, nous nous 
                    chargeons de te connecter avec les personnes qui te sont chères au Cameroun.            
                </p>
            </div>

            <div className='alert alert-success'>
                <p>       
                    Nous sommes une team Internationale (Italie et Cameroun), 
                    présents dans 11 régions d'Italie. Nos mots d'ordre sont: Détermination, Dynamisme, Honnêteté et Transparence.            
                </p>
            </div>

          
        </div>
        <div className="col-md-3"> </div>

    </div>
</div>);
}

export default About;