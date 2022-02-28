import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import Header from './Components/Header';
import ToDoItemContainer from './Components/ToDoItemContainer';
import React from 'react';

//function App() {
//  return (
//    <div className="App">
//      <Header />
//      <ToDoItemContainer />
//    </div>
//  );
//}

// class version
class App extends React.Component{
  myMethod(){
    console.log('method call');
  }
  render() {
    this.myMethod();
    return (
      <div className="App">
        <Header />
        <ToDoItemContainer />
      </div>
    );
  }
}


export default App;
