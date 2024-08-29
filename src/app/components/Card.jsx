import React from "react";
import "./Card.css";
import parse from 'html-react-parser';


const Card = ({ title, description, onClick ,key}) => {
  return (
    <div className="card" onClick={onClick}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description"> {parse(description)}</p>
      <p>{key}</p>
    </div>
  );
};

export default Card;
