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
  myMethod(value){
    console.log(value);
  }
  constructor(){
    super();
    this.state = {title : "Nestor's React Project"};
  }
  render() {
    this.myMethod(this.state.title);
    return (
      <div className="App">
        <Header />
        <ToDoItemContainer />
      </div>
    );
  }
}


export default App;
