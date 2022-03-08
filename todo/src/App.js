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
function myMethod(value){
  console.log(value);
}
// class version
class App extends React.Component{
  constructor(){
    super();
    this.state = {title : "Nestor's React Project"};
    //this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoItemContainer />
      </div>
    );
  }
}


export default App;
