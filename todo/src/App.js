import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem';

function App() {
  return (
    <div className="App">
      <ToDoItem 
        itemTitle = "Learn React"
        notes = "Take your time"
        dueDate = "02/25/2022"
      />
      <ToDoItem 
        itemTitle = "Big Discrete HW4"
        notes = "Wait for lecture examples"
        dueDate = "03/14/2022"
      />
      <ToDoItem 
        itemTitle = "Physics modules out on 3/16"
        notes = "It sucks..."
        dueDate = "03/16/2022"
      />
    </div>
  );
}

export default App;
