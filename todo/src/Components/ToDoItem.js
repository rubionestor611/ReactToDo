import React from 'react';
import ToDoItemStyle from '../css/ToDoItemStyle.css'
import ToDoItemContainer from './ToDoItemContainer';

export default function ToDoItem(props) {
  return (
    <div style={{
      backgroundColor: props.item.color
    }} 
    className = {props.item.completed ? "completedItem" : "ToDoItem"}
    >
      <label className='checkbox'>
        <input type = "checkbox"
          checked={props.item.completed}
          onChange={()=>{props.handleChange(props.item.itemTitle, props.item.completed);}
          }
        />
      </label>
      <p><b>{props.item.itemTitle}</b></p>
      <p style = {{display: (props.item.notes && props.item.notes.length > 0) ? "" : "none"}}><i>{props.item.notes}</i></p>
      <p>Due: {props.item.dueDate}</p>
    </div>
  );
}

/*class ToDoItem extends React.Component{
  constructor(){
    super();
    this.state = {
      title: "",
      notes: "",
      dueDate: "",
      checked: false
    };
  }
  setStateCustom(){
    this.state.title = this.props.item.itemTitle;
    this.state.notes = this.props.item.notes;
    this.state.dueDate = this.props.item.dueDate;
    // this lets me check and uncheck but it's not mapped right
    this.state.checked = this.props.item.completed;
  }
  render(){
    console.log(this.props.item.completed);
    this.setStateCustom();
    return (
      <div className = "ToDoItem" >
        <input type = "checkbox"
          checked={this.state.checked}
          onChange={() => {
            this.props.handleChange(this.props.item.itemTitle);
          }}
        />
        <p><b>{this.state.title}</b></p>
        <p style = {{display: (this.state.notes && this.state.notes.length > 0) ? "" : "none"}}><i>{this.state.notes}</i></p>
        <p>Due: {this.state.dueDate}</p>
      </div>
    );
  }
}
export default ToDoItem;*/