import logo from './logo.svg';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import Header from './Components/Header';
import ToDoItemContainer from './Components/ToDoItemContainer';
import React from 'react';
import Form from './Components/Form'

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
    this.state = {
      isLoading: true,
      object: {}
    }
  }
  // usually used for api calls or loading
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading: false
      })
    }, 1500);
    //this.setState({loading: true});
    // look for ways to circumvent this
    /*fetch("https://swapi.co/api/people/1")
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        this.setState({
          loading: false,
          object:{data}
        });
      });*/
    /*this.setState({
      loading: false
    });*/
  }
  render() {
    return (
      <div className="App">
        <Header isLoading={this.state.isLoading}/>
        <ToDoItemContainer isLoading={this.state.isLoading}/>
        <Form />
      </div>
    );
  }
  // initial call once component is "mounted"
  // might use to make api calls
  //componentDidMount(){
  //}
  // decision on whether to change or not
  // determine whether to consider updating or not
  //shouldComponentUpdate(nextProps, nextstate){
      // true if plans to update
      // false if not
  //}
  // will the component disappear?
  //componentWillUnmount(){
    // remove event listeners
    // teardown or cleanup component before it disappears
  //}
  // when component needs to set state based on props; rare case
  //static getDerivedStateFromProps(props,state){
  //}
  // create back up of current way things are
  //getSnapshotBeforeUpdate(){
  //}

}


export default App;
