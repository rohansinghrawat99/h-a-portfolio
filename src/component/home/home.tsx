import React from "react";
import "./home.css";
const home = () => {
    return (
        <div className="home">
            <div className="description">
                <h2>Hi there,</h2>
                <div className="name">
                    <h1>I'm</h1><h1 className="harsh">Harsh</h1>
                </div>
                <h2>I'm a Web/Application Developer!</h2>
            </div>
        </div>
    );
}

export default home;