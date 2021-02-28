import React from 'react';
import { Link } from 'react-router-dom';
import "./Thumbnail.css";
 
function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="index">{props.index}</div>
        <div className="image">
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="category"><b>{props.category}</b></div>
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;