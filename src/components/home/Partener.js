import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Partner (){

  function onPascal(){
  }
  function onParliamo(){
    window.open("http://parliamoitalianocamerun.net/");  
  }

return (
<div className="container-fluid">
    <div className="row py-2 my-5">
        <div className="col-lg-2"> </div>
        <div className="col-lg-8 col-12"> 
          <div className="text-center"> Nos partenaires </div>
          
          <div className="row"> 
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>PASCAL EXPRESS BUSINESS</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur Pascal </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>PARKER LOGISTIK</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur Parker </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>PARLIAMO ITALIANO</Card.Title>
                <Card.Body>
                  <Card.Text>
                   Il s’agit d’un lieu d’intermédiation linguistique et culturelle entre intaliens ...
                  </Card.Text>
                  <Button onClick={()=>{onParliamo()}} > Aller sur Parliamo </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>MODELLYS COUTURE</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur Modellys </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>ONE%SPEED</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur ONE%SPEED </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>PASSA L’INFO</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur passa l'info </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>AFRICAN SUCCESS UNIVERSITY</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur African... </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3"> 
              <Card className="text-center">
                <Card.Title>LAPERLE FASHION</Card.Title>
                <Card.Body>
                  <Card.Text>
                      C'est un group de ....
                  </Card.Text>
                  <Button onClick={()=>{onPascal()}} > Aller sur Laperle... </Button>
                </Card.Body>
              </Card>
            </div>
        
          </div>
    
        </div>

    </div>
</div>);
}

export default Partner;


/**
  function showfile(){
    if(image1){
      
    console.log(image1.name.split(".")[1])
      const tmp = `data:image/${image1.name.split(".")[1]};base64,${image1.filebytes}`;
      window.open(tmp)
    }
  }

  function tmpp(){
    if(image1){
      return (<img   alt="kjjk" src={`data:image/${image1.name.split(".")[1]};base64,${image1.filebytes}`}></img>);
    }
  }

  function getfile(){
    if(data){
      const tmp = "data:application/pdf;base64,"+data.filebytes;
      window.open(tmp)
      //return (<iframe src={"data:application/pdf;base64,"+data.filebytes} width="100%"></iframe>);
    }

  function getCard(){
    return ( <Card style={{width:'18rem'}}>
    <Card.img src={"data:image/"+ image1.name.split(".")[1]+";base64,"+image1.filebytes}> </Card.img>
    <Card.Body>
      <Card.Title>tttt</Card.Title>
      <Card.Text>voici le text</Card.Text>
    </Card.Body>
  </Card>);
  }
*/
