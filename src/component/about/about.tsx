import React from "react";
import ProfilePicture from "../../assets/42579052.png";
import "./about.css";
import { FaGraduationCap, FaBookOpen, FaSchool } from "react-icons/fa";

const about = (props: any) => {
    const downloadResume = () => {

    }
    return (
        <div className="about">
            <img src={ProfilePicture} className="profile-picture" alt=""/>
            <div className="right-half">
                <div className="about-text">
                    <h1 className="about-heading">About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede</p>
                    <button onClick={downloadResume}>My Resume</button>
                    <h3>Education</h3>
                </div>
                <div className="education">
                    <div className="education-icons">
                        <div className="education-line"></div>
                        <div className="education-text">
                            <div className="education-icon-background">
                                <FaGraduationCap className="fa-graduation-cap" color="black" size="28px"/>
                            </div>
                            <div className="education-detail">
                                <p className="education-institute">B.Tech Computer Science and Engineering</p>
                                <p className="education-location">ABES Engineering College, Ghaziabad: 2017 - Present</p>
                            </div>
                        </div>
                        <div className="education-line"></div>
                        <div className="education-text">
                        <div className="education-icon-background">
                            <FaBookOpen className="fa-book-open" color="black" size="25px"/>
                        </div>
                        <div className="education-detail">
                            <p className="education-institute">Higher Secondary Education</p>
                            <p className="education-location">RRK Sr. Sec. School, Chandausi: 2015 - 2017</p>
                        </div>
                        </div>
                        <div className="education-text">
                        <div className="education-icon-background">
                            <FaSchool className="fa-school" color="black" size="28px"/>
                        </div>
                        <div className="education-detail">
                            <p className="education-institute">High School</p>
                            <p className="education-location">Sacred Heart Sr. Sec. School, Chandausi: 2017 - Present</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;