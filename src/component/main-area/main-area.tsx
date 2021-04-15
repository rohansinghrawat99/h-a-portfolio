import React from "react";
import "./main-area.css";

const mainArea = (props: any) => {
    return (
        <div className="main-area">
            {props.section}
        </div>
    );
}

export default mainArea;