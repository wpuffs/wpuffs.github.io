import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './Thumbnail.css';
 
function Thumbnail(props) {
  return (
    <div className="page">
      <Link to={props.link}>
        <div className="project-image">
          <img src="" alt="Project Image"/>
        </div>
        <div className="project-title">""</div>
        <div className="project-category">""</div>
        <div className="project-description"></div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;