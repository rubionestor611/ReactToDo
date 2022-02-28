import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'

export default function ToDoItem(props){
  console.log(props);
  return (
    <div className = "ToDoItem">
      <input type = "checkbox" />
      <p><b>{props.item.itemTitle}</b></p>
      <p style = {{display: (props.item.notes && props.item.notes.length > 0) ? "" : "none"}}><i>{props.item.notes}</i></p>
      <p>Due: {props.item.dueDate}</p>
    </div>
  );
}