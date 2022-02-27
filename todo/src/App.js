import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import Header from './Components/Header';
import ToDoItemContainer from './Components/ToDoItemContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoItemContainer />
    </div>
  );
}

export default App;
