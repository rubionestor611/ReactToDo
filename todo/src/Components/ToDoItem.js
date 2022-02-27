import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'

export default function ToDoItem(props){
  return (
    <div class = "ToDoItem">
      <input type = "checkbox" />
      <p><b>{props.itemTitle}</b></p>
      <p style = {{display: (props.notes && props.notes.length > 0) ? "" : "none"}}><i>{props.notes}</i></p>
      <p>Due: {props.dueDate}</p>
    </div>
  );
}