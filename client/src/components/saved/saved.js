import React from "react";

const Saved = props => (
    <span className = "savedArticles" >
    <h3>{props.title}</h3>
    <a href={props.url}> {props.url} </a><p> Written on: {props.date}</p>
    <button onClick ={() => props.deleteButton(props.id)}>Delete</button>
    </span>
);
export default Saved;