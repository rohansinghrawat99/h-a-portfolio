import React from "react";
import "./experience.css";
import ExperienceImage from "../../assets/1664 1.png";
import {SiFlutter, SiReact} from "react-icons/all";

const experience = () => {
    return (
        <div className="experience">
            <h1 className="experience-header">Experience</h1>
            <div className="experience-box">
                <div className="experience-text">
                    <h2 className="experience-tech-header">ESCECION TECHNOLOGIES</h2>
                    <h3 className="experience-role">Software Developer Intern</h3>
                    <div className="experience-tech">
                        <div className="experience-tech-icon">
                            <SiFlutter color="#42C0FB" />
                            <h4 className="experience-tech-name">FLUTTER</h4>
                        </div>
                        <p className="experience-responsibilities">Worked on UI dashboards, API & Firebase Integration, Error Tracking using Sentry and on State Management pattern (Redux and Mobx).</p>
                    </div>
                    <div className="experience-tech">
                        <div className="experience-tech-icon">
                            <SiReact color="#61DBFB" />
                            <h4 className="experience-tech-name">FLUTTER</h4>
                        </div>
                        <p className="experience-responsibilities">Worked on UI dashboards, API & Firebase Integration, Error Tracking using Sentry and on State Management pattern (Redux and Mobx).</p>
                    </div>
                </div>
                <img src={ExperienceImage} className="experience-image" alt="ExperienceImage"/>
            </div>
        </div>
    );
}

export default experience;