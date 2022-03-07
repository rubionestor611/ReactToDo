import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'

//export default function ToDoItem(props){
//  console.log(props);
//  // for checkbox consider adding:  checked = {props.item.completed}
//  return (
//    <div className = "ToDoItem">
//      <input type = "checkbox"/>
//      <p><b>{props.item.itemTitle}</b></p>
//      <p style = {{display: (props.item.notes && props.item.notes.length > 0) ? "" : "none"}}><i>{props.item.notes}</i></p>
//      <p>Due: {props.item.dueDate}</p>
//    </div>
//  );
//}
class ToDoItem extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "",
      notes: "",
      dueDate: ""
    };
  }
  setState(){
    this.state.title = this.props.item.itemTitle;
    this.state.notes = this.props.item.notes;
    this.state.dueDate = this.props.item.dueDate;
  }
  render(){
    this.setState()
    return (
      <div className = "ToDoItem">
        <input type = "checkbox"/>
        <p><b>{this.state.title}</b></p>
        <p style = {{display: (this.state.notes && this.state.notes.length > 0) ? "" : "none"}}><i>{this.state.notes}</i></p>
        <p>Due: {this.state.dueDate}</p>
      </div>
    );
  }
}
export default ToDoItem;