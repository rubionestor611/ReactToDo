import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'

export default function ToDoItem(props){
  if(props.notes.length > 0)
  {
    return (
      <div class = "ToDoItem">
        <input type = "checkbox" />
        <p><b>{props.itemTitle}</b></p>
        <p><i>{props.notes}</i></p>
        <p>Due: {props.dueDate}</p>
      </div>
    );
  }
  return (
    <div class = "ToDoItem">
      <input type = "checkbox" />
      <p><b>{props.itemTitle}</b></p>
      <p>Due: {props.dueDate}</p>
    </div>
  );
}