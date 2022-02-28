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
  render(){
    return (
      <div className = "ToDoItem">
        <input type = "checkbox"/>
        <p><b>{this.props.item.itemTitle}</b></p>
        <p style = {{display: (this.props.item.notes && this.props.item.notes.length > 0) ? "" : "none"}}><i>{this.props.item.notes}</i></p>
        <p>Due: {this.props.item.dueDate}</p>
      </div>
    );
  }
}
export default ToDoItem;