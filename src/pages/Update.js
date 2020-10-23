import React,{Component} from 'react';
import './Update.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';


class UpdateComponent extends Component {
    render(){
  return (
    <div>
      <Container>
        
        <Col>
        <hr/>
        <h1>Update Patient Record</h1>
        <hr/>
        </Col>
        <form>
          
     <Col> <h3>Enter Patient Id:</h3><input type="text" id="fname" name="fname"></input></Col><br/>

      <Col><Button variant="dark">Submit</Button></Col>
      
        </form>
        </Container>
    
    </div>
  );
    }
}

export default UpdateComponent;