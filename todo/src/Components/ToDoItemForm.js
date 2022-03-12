import React from "react";

class ToDoItemForm extends React.Component{
  constructor(props){
    super();
    this.state={
      titleField:"",
      notesField:"",
      dueDateField:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.prepareSubmission = this.prepareSubmission.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }
  prepareSubmission(target){
    let obj = {
      itemTitle: this.state.titleField,
      notes: this.state.notesField,
      dueDate: this.state.dueDateField,
      completed: false
    }
    this.props.handleSubmit(target,obj);
    this.state.dueDateField = this.state.notesField = this.state.titleField = "";
  }
  render(){
    return(
      <form 
        onSubmit={this.prepareSubmission}
        className="ToDoItemForm"
      >
        <div>
        <input type="text"
          className="textfield"
          name="titleField"
          value={this.state.titleField}
          onChange={this.handleChange}
          placeholder="Item Title"
        />
        <input type="text"
          className="textfield"
          name="notesField"
          value={this.state.notesField}
          onChange={this.handleChange}
          placeholder="Item Notes"
        />
        <input type="text"
          className="textfield"
          name="dueDateField"
          value={this.state.dueDateField}
          onChange={this.handleChange}
          placeholder="Item Due Date"
        />
        </div>
        <input type="submit" value="Add Item" className="button" />
        <button onClick={this.props.clearCompleted} className="button">Clear Completed</button>
      </form>
    )
  }
}
export default ToDoItemForm;