import React from "react";
import SubFormComponent from "./SubFormComponent";
class SubForm extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "--please choose a color--",
      dietaryRestrictions: {
        isVegan: false,
        isPescatarian: false,
        isLactoseIntolerant: false,
        isAllergictoPeanuts: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value,type, checked} = event.target
    if(this.state.dietaryRestrictions.hasOwnProperty(name)){
      this.setState(prevState=>{
        return {
          dietaryRestrictions:{
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      })
    }else if(type === "checkbox"){
      this.setState({[name]: checked})
    }else{
      this.setState({ [name]: value });
    }
  }
  render(){
    return(
      <SubFormComponent 
        handleChange = {this.handleChange}
        data = {this.state}
      />
    )
  }
}
export default SubForm;