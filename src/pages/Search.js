import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Container,Col,Row} from 'react-bootstrap';
import $ from "jquery";
import {findDOMNode} from 'react-dom';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name:"",
            dob:"",
            address:"",
            contact:"",
            email:"",
            diagnosis:"",
            appointmentdate:"",
            appointmenttime:""
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        axios.get('http://localhost:5000/api/Patient' , {params: this.state.id})
    .then(json => {
        if(json.data.Status === "Success")
        console.log(json.data)
    })
    .catch(error =>{
        console.log(error);
    })
    }

     handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
     }
  
     handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        const el1 = findDOMNode(this.refs.toggle1);
        $(el).show();
        $(el1).hide();
        }

    handleToggle1 = () => {
        const el = findDOMNode(this.refs.toggle);
        const el1 = findDOMNode(this.refs.toggle1);
        $(el).hide();
        $(el1).show();    
        }
    render(){
        return(
        <div>
        <Container>
        <Col>
        <hr/>
        <h1>Search for Patient Records</h1>
        <hr/>
        </Col>
        <Button variant="dark" onClick={this.handleToggle}>Search by ID</Button>
        <Button variant="dark" onClick={this.handleToggle1}>Search by Name</Button>
        <br/>
        <br/>
        <form ref="toggle" onSubmit={this.handleSubmit}>
          
     <Col> <h3>Enter Patient Id:</h3><input type="text" id="fname" name="fname"></input></Col><br/>

      <Col><Button variant="dark">Submit</Button></Col>
      
        </form>

        <form ref="toggle1" onSubmit={this.handleSubmit}>
          
        <Col> <h3>Enter Patient Name:</h3><input type="text" id="fname" name="fname"></input></Col><br/>
     
        <Col><Button variant="dark">Submit</Button></Col>
           
        </form>
        </Container>
      </div>
)}
}

export default Search;