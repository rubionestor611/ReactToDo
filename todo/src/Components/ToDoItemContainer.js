import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItemContainerStyle from '../css/ToDoItemContainerStyle.css';
import toDoList from '../ToDoItemsData/ToDoList';
import ToDoItemForm from './ToDoItemForm';

class ToDoItemContainer extends React.Component {
  state = {
    todos: []
  }
  constructor(){
    super();
    
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.savetoLocalState=this.savetoLocalState.bind(this);
    this.addItem=this.addItem.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  savetoLocalState(){
    localStorage.setItem('state', JSON.stringify(this.state.todos))
    //console.log(localStorage.getItem('state'));
  }

  getLocalState(){
    let data = localStorage.getItem('state');
    this.setState({todos: JSON.parse(data)})
  }

  clearCompleted(){
    this.setState(prevState=>{
      let newlist = prevState.todos.filter(item=>!item.completed);
      return{
        todos: newlist
      }
    })
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
  
  handleSubmit(data, item){
    data.preventDefault();
    this.addItem(item);
    this.savetoLocalState();
    this.getLocalState();
  }

  addItem(data){
    if(data.itemTitle.length == 0 &&
        data.notes.length == 0 &&
        data.dueDate.length == 0){
      return;
    }
    let newtodolist = this.state.todos;
    let add = true;
    newtodolist.forEach(item=>{
      if(item.itemTitle == data.itemTitle){
        add = false;
        return;
      }
    })
    if(add){
      newtodolist.push(data);
    }
    this.setState({
      todos: newtodolist
    })
  }

  componentDidMount(){
    this.getLocalState();
  }

  render() {
    if(this.props.isLoading) return (<h1>Loading ToDoItemContainer...</h1>);

    let toDoItems = this.state.todos.map(item =>
      <ToDoItem key = {item.itemTitle} 
        item = {item}
        handleChange={this.handleChange}
      />)
    return (
      <div>
        <ToDoItemForm
          handleSubmit = {this.handleSubmit}
          clearCompleted = {()=>{
            this.clearCompleted();
          }}
        />
        <div className = "ToDoItemContainer">
          {toDoItems}
        </div>
      </div>
    );
  }
}

export default ToDoItemContainer;