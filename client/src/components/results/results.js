import React from "react";
//css

const Results = props => (
    <span >
    <h3>{props.title}</h3>
    <a href={props.url}>{props.url}</a>
     <h4>{props.date}</h4>
     <button  onClick= {() => props.saveButton(props.id)} className ="Save">save</button>
    </span>
)
export default Results;