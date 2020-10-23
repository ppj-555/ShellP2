import React, {Component} from 'react';
import axios from 'axios';
import './register.css';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Container,Col,Row} from 'react-bootstrap';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            dob:"",
            address:"",
            contact:"",
            email:"",
            diagnosis:"",
            appointmentdate:"",
            appointmenttime:""
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleSubmit = event =>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/Patient' , {patient_name:this.state.name,DOB:this.state.dob,
    address:this.state.address,contact:this.state.contact,email:this.state.email,
    diagnosis_reason:this.state.diagnosis, appointment_date:"None",appointment_time:"None"})
    .then(json => {
        if(json.data.Status === "Success")
        console.log("success");
    })
    .catch(error =>{
        console.log(error);
    })
    }

    handleChange(event){
        this.setState({
                [event.target.name]: event.target.value
            });
     }
    
  

    render(){
        return(
            
        <div>
           <hr/>
            <h1>Patient Registration</h1><hr/>
  <Form>
  <Form.Row>
    <Form.Group as={Col } controlId="formGridName">
      <Form.Label><h3>Name</h3></Form.Label>
      <Form.Control type="name" placeholder="Enter patient's name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridDOB">
      <Form.Label><h3>DOB</h3></Form.Label>
      <Form.Control type="DOB" placeholder="Enter Dob" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label><h3>Address Line 1</h3></Form.Label>
    <Form.Control size="lg" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label><h3>Address Line 2</h3></Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridContact">
      <Form.Label><h3>Contact</h3></Form.Label>
      <Form.Control placeholder="Enter mobile number"/>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label><h3>Email</h3></Form.Label>
      <Form.Control placeholder="Enter email"/>
    </Form.Group>
  </Form.Row>


  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</div>

      
      
)}
}

export default Register;