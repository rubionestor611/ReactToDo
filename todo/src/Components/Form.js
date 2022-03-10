import React from "react";
import FormStyle from "../css/FormStyle.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value,type, checked} = event.target
    if(type === "checkbox"){
      this.setState({[name]: checked})
    }else{
      this.setState({ [name]: value });
    }
  }
  render(){
    return(
      // onSubmit can be used to handle the submission of forms
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
        <hr />
        <textarea value ={"default textarea text"} onChange={this.handleChange}/>
        <hr />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly?
        </label>
        <hr />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value= "Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Non-Binary"
            checked={this.state.gender === "Non-Binary"}
            onChange={this.handleChange}
          /> Non-Binary
        </label>
        <h1>You chose {this.state.gender}</h1>
        <hr />
        <label>Favorite Color: </label>
        <select
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor">
          <option value ="blue">blue</option>
          <option value ="green">green</option>
          <option value ="black">black</option>
          <option value ="pink">pink</option>
          <option value ="red">red</option>
        </select>
        <p>You chose {this.state.favColor}</p>
        <button>Submit</button>
      </form>
    )
  }
}
export default Form;