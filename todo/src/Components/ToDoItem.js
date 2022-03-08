import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'

class ToDoItem extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "",
      notes: "",
      dueDate: "",
      checked: false
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  setStateCustom(){
    this.state.title = this.props.item.itemTitle;
    this.state.notes = this.props.item.notes;
    this.state.dueDate = this.props.item.dueDate;
    this.state.checked = this.props.item.checked;
  }

  //handleClick(){
  //  console.log("handleclick")
  //  this.setState((prevState)=>{
  //    return {
  //      title: prevState.title,
  //      notes: prevState.notes,
  //      dueDate: prevState.dueDate,
  //      checked: prevState.checked ? false:true
  //    }
  //  })
  //}

  render(){
    this.setStateCustom()
    return (
      <div className = "ToDoItem" >
        <input type = "checkbox"
          checked={this.state.checked}
          onChange={() => this.props.handleChange(this.props.item.itemTitle)}
        />
        <p><b>{this.state.title}</b></p>
        <p style = {{display: (this.state.notes && this.state.notes.length > 0) ? "" : "none"}}><i>{this.state.notes}</i></p>
        <p>Due: {this.state.dueDate}</p>
      </div>
    );
  }
}
export default ToDoItem;