import React from "react"
import Thumbnail from "../components/Thumbnail"

import "./Home.css";

import catlas1 from "../assets/catlas1.png";
import ufa1 from "../assets/ufa1.png";
import pca1 from "../assets/pca1.png";
import survey9 from "../assets/survey9.png";
import ntfgh from "../assets/ntfgh.png";
 
function Home() {
  return (
    <div className="main">
        <div className="header">Nadia is a Computer Science graduate with a year of
        business analyst & developer experience, 
        is now aspiring to pursue a career in User Experience.</div>
        
        <div className="projects">
        <div className="project-container">
          <Thumbnail 
                link="/emergency-department-app"
                index="01"
                image={ntfgh}
                category="University Project"
                title="Emergency department app"
                desc="Collaboration with Ng Teng Fong Hospital to tackle real problems in healthcare"
                />
            </div>

          <div className="project-container">
          <Thumbnail 
                link="/catlas"
                index="02"
                image={catlas1}
                category="University Project"
                title="Community cat tracking app"
                desc="Won 3rd Prize in Huawei Future Interaction Design Award. Designed an app to track community cats"
                />
            </div>
            
            <div className="project-container">
            <Thumbnail 
                link="/pet-caring-app"
                index="03"
                image={pca1}
                category="University Project"
                title="Pet caretaking web app"
                desc="Developing a pet caretaking web application for a database module"
                />
            </div>
          
            <div className="project-container">
            <Thumbnail 
                link="/university-finder-app"
                index="04"
                image={ufa1}
                category="University Project"
                title="University course comparator mobile app"
                desc="Developing a university course comparator mobile application for a mobile user experience module"
                />
            </div>

            <div className="project-container">
            <Thumbnail 
                link="/redesign-gv-website"
                index="05"
                image={survey9}
                category="University Project"
                title="Redesigning Golden Village Website"
                desc="Redesigning an existing website for a human-computer interaction module"
                />
            </div>
        </div>
    </div>
  )
}
 
export default Home;
