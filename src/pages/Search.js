import React, {Component} from 'react';
import axios from 'axios';
import {Button,ToggleButtonGroup,ButtonGroup} from 'react-bootstrap';
import {Container,Col,Row} from 'react-bootstrap';
import $ from "jquery";
import {findDOMNode} from 'react-dom';
import './search.css';

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
  
     showID = (event) =>{
        $("#patientid").show();
        $("#patientname").hide();
    }
    
    showName = (event) =>{
       $("#patientname").show();
       $("#patientid").hide();
   }
    render(){
        return(
        <div>
            <hr/>
            <h1>Search Patiend Record</h1>
            <hr/>
            <br/>
        <form onSubmit={this.handleSubmit}>
        <ButtonGroup aria-label="Basic example">
          <Button variant="warning" onClick={this.showID}>Search by id</Button>
          <Button variant="danger" onClick={this.showName}>Search by name</Button>
        </ButtonGroup>
        <br/>
        <div className="form-group" id="patientid">
            <label>Patient ID</label>
            <input type="text" className="form-control"  name="id" value={this.state.id} onChange ={this.handleChange}/>
        </div>
        <div className="form-group" id="patientname">
            <label>Patient Name</label>
            <input type="text" className="form-control"  name="name" value={this.state.name} onChange ={this.handleChange}/>
        </div>
        <Button variant="dark">Search</Button>
        </form>
      </div>
)}
}

export default Search;
