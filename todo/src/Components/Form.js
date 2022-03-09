import React from "react";
import FormStyle from "../css/FormStyle.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }
  render(){
    return(
      <form className = "wrapper">
        <h1>Form Practice</h1>
        <input type = "text"
        value={this.state.firstName}
          name = "firstName"
          placeholder = "First Name" 
          onChange={this.handleChange}/>
        <br />
        <input type = "text"
          value={this.state.lastName}
          name = "lastName"
          placeholder = "First Name" 
          onChange={this.handleChange}/>
        <hr />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}
export default Form;