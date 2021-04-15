import React from "react";
import "./skills.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaGitSquare,
    FaJsSquare,
    FaReact,
    FaAws,
    FaJava,
    FaPython, SiCplusplus, SiDart, SiFirebase,
} from "react-icons/all";

import TypeScriptImage from "../../assets/download (3) 1.png";

const skills = () => {
    return (
        <div className="skills">
            <h1>My Skills</h1>
            <div className="all-skills">
                <div className="skills-first-line">
                    <div className="skill-box">
                        <FaHtml5 color="red" size="130px"/>
                    </div>
                    <div className="skill-box">
                        <FaCss3Alt color="blue" size="130px"/>
                    </div>
                    <div className="skill-box">
                        <FaJsSquare color="#edef00" size="125px"/>
                    </div>
                    <div className="skill-box">
                        <FaJava color="#f89820" size="120px"/>
                    </div>
                    <div className="skill-box">
                        <FaPython color="#306998" size="130px"/>
                    </div>
                    <div className="skill-box">
                        <SiCplusplus color="black" size="125px"/>
                    </div>
                </div>
                <div className="skills-second-line">
                    <div className="skill-box">
                        <SiDart color="#4597ce" size="120px"/>
                    </div>
                    <div className="skill-box">
                        <SiFirebase color="#F5820D" size="120px"/>
                    </div>
                    <div className="skill-box">
                        <img src={TypeScriptImage} className="typescript-image" alt="TSImage"/>
                    </div>
                    <div className="skill-box">
                        <FaGitSquare color="black" size="125px"/>
                    </div>
                    <div className="skill-box">
                        <FaReact color="#61DBFB" size="130px"/>
                    </div>
                    <div className="skill-box">
                        <FaAws color="#FF9900" size="125px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;