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
          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Name 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="text" placeholder="Patient Name" />
          </Col>
          </Form.Group>
         
          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          DOB 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="date" placeholder="DateofBirth" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Address 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="text" placeholder="Address" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Contact 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="text" placeholder="Mobile Number" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Email 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Doc Name 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="text" placeholder="Doctor's Name" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Date 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="date" placeholder="Appointment Date" />
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
          Time 
          </Form.Label>
          <Col sm={10}>
          <Form.Control type="time" placeholder="Appointment Time" />
          </Col>
          </Form.Group>


  <Button variant="dark" type="submit">
    Submit
  </Button>
  </Form>

</div>

      
      
)}
}

export default Register;
