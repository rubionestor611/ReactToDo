import React from "react";

export default function SubFormComponent(props){
  return (
      // onSubmit can be used to handle the submission of forms
      <form className = "wrapper">
        <h1>Form Practice</h1>
        <input type = "text"
        value={props.data.firstName}
          name = "firstName"
          placeholder = "First Name" 
          onChange={props.handleChange}/>
        <br />
        <input type = "text"
          value={props.data.lastName}
          name = "lastName"
          placeholder = "First Name" 
          onChange={props.handleChange}/>
        <hr />
        <h1>{props.data.firstName} {props.data.lastName}</h1>
        <hr />
        <textarea value ={"default textarea text"} onChange={props.handleChange}/>
        <hr />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.data.isFriendly}
            onChange={props.handleChange}
          /> Is Friendly?
        </label>
        <hr />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value= "Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Non-Binary"
            checked={props.data.gender === "Non-Binary"}
            onChange={props.handleChange}
          /> Non-Binary
        </label>
        <h1>You chose {props.data.gender}</h1>
        <hr />
        <label>Favorite Color: </label>
        <select
        value={props.data.favColor}
        onChange={props.handleChange}
        name="favColor">
          <option value="--please choose a color--">--please choose a color--</option>
          <option value ="blue">blue</option>
          <option value ="green">green</option>
          <option value ="black">black</option>
          <option value ="pink">pink</option>
          <option value ="red">red</option>
        </select>
        <p>You chose {props.data.favColor}</p>
        <hr/>
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isVegan}
            /> Vegan?
        </label>
        <label>
          <input
            type="checkbox"
            name="isPescatarian"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isPescatarian}
            /> Pescatarian?
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseIntolerant"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isLactoseIntolerant}
            /> Lactose-Intolerant?
        </label>
        <label>
          <input
            type="checkbox"
            name="isAllergictoPeanuts"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isAllergictoPeanuts}
            /> Allergic to Peanuts?
        </label>
        <button>Submit</button>
      </form>
  )
}