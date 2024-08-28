import React from "react";
import "./Card.css";
import parse from 'html-react-parser';


const Card = ({ title, description }) => {
  return (
    <div className="card" >
      <h1 className="card-title">{title}</h1>
      <p className="card-description"> {parse(description)}</p>
    </div>
  );
};

export default Card;
