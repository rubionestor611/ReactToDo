import React from 'react';
import Headerstyles from '../css/Headerstyles.css';

export default function Header(){
  return (
    <div className = "header">
      <div className = "headercontainer">
        <h1 className = "header1">Nestor's React To-Do List App!</h1>
        <p className = "headerparagraph">Even though it might be pretty basic...let's see if I can spice it up</p>
      </div>
    </div>
  );
}