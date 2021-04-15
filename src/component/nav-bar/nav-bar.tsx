import React from "react";
import "./nav-bar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Screenshot 2020-12-28 at 9.44 1.png";

const navBar = (props: any) => {
    return (
            <div className="side-nav-bar">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={Logo} className="logo" alt="Logo" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
    );
}

export default navBar;