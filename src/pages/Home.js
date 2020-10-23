import React,{Component} from 'react';
import {Container,Col,Row,Button,Image} from 'react-bootstrap';
import './home.css';
import $ from "jquery";
import {findDOMNode} from 'react-dom';

class Home extends Component {

handleToggle = () => {

const el = findDOMNode(this.refs.toggle);
$(el).toggle();

}


  render(){
  return (
    <div>
      
      <button onClick={this.handleToggle}>click</button>
      <p ref="toggle">hghgjh</p>  
        
  
    </div>
  );
}
}

export default Home;