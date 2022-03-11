import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItemContainerStyle from '../css/ToDoItemContainerStyle.css';
import toDoList from '../ToDoItemsData/ToDoList';
import ToDoItemForm from './ToDoItemForm';

class ToDoItemContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: toDoList
    }
    this.handleChange=this.handleChange.bind(this);
    this.writetoFile=this.writetoFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(id, state){
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(toDo => {
        if(toDo.itemTitle === id){
          toDo.completed = !state;
        }
        return toDo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  writetoFile(){
    let newlist = "const ToDoList = [\n";
    this.state.todos.forEach(obj => {
      newlist += JSON.stringify(obj);
      newlist += ",\n"
    });
    newlist += "];\nexport default ToDoList;"
    console.log(newlist);
    /*const fs = require('fs');
    fs.writeFileSync('../ToDoItemsData/ToDoList.js', newlist, err =>{
      if(err){
        console.log(err);
        return;
      }
    });
    */
  }
  handleSubmit(data){
    this.setState(prevState =>{
      let updatedTodos = [];
      prevState.todos.forEach(item =>{
        updatedTodos.push(item);
      })
      updatedTodos.push(data);
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    if(this.props.isLoading) return (<h1>Loading ToDoItemContainer...</h1>);
    console.log("state ",this.state)
    let toDoItems = this.state.todos.map(item =>
      <ToDoItem key = {item.itemTitle} 
        item = {item}
        handleChange={this.handleChange}
      />)
    return (
      <div>
        <ToDoItemForm handleSubmit = {this.handleSubmit}/>
        <div className = "ToDoItemContainer">
          {toDoItems}
        </div>
      </div>
    );
  }
}

export default ToDoItemContainer;