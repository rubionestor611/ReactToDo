import React from 'react';
import Headerstyles from '../css/Headerstyles.css';

class Header extends React.Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    return (
      <div className = "header" onClick={()=>console.log("Nestor's React App Header")}>
        <div className = "headercontainer">
          <h1 className = "header1">Nestor's React To-Do List App!</h1>
          <p className = "headerparagraph">Even though it might be pretty basic...let's see if I can spice it up</p>
        </div>
      </div>
    );
  }
}

export default Header;

// export default function Header(){
//   return (
//     <div className = "header">
//       <div className = "headercontainer">
//         <h1 className = "header1">Nestor's React To-Do List App!</h1>
//         <p className = "headerparagraph">Even though it might be pretty basic...let's see if I can spice it up</p>
//       </div>
//     </div>
//   );
// }