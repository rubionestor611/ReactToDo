import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItemContainerStyle from '../css/ToDoItemContainerStyle.css';
import toDoList from '../ToDoItemsData/ToDoList';

class ToDoItemContainer extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    let toDoItems = toDoList.map(item => <ToDoItem key = {item.itemTitle} item = {item}/>);
    return (
      <div className = "ToDoItemContainer">
        {toDoItems}
      </div>
    );
  }
}

export default ToDoItemContainer;

//export default function ToDoItemContainer(){
//
//  const toDoItems = toDoList.map(item => <ToDoItem key = {item.itemTitle} item = {item}/>)
//
//  return (
//    <div className = "ToDoItemContainer">
//      {toDoItems}
//    </div>
//  );
//}
//  <ToDoItem 
    //    itemTitle = "Learn React"
    //    notes = "Take your time"
    //    dueDate = "02/25/2022"
    //  />
    //  <ToDoItem 
    //    itemTitle = "Big Discrete HW4"
    //    notes = "Wait for lecture examples"
    //    dueDate = "03/14/2022"
    //  />
    //  <ToDoItem 
    //    itemTitle = "Physics modules out on 3/16"
    //    notes = "It sucks..."
    //    dueDate = "03/16/2022"
    //    />