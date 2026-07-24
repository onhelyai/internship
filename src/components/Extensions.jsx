import { useState } from "react";


function Extensions({isDark, Theme}){
    return (
    <div className= "Extensions">
        <h2 className="Extensions_title">
        <img src="/assets/images/logo1.png" alt=""></img>
            Extensions
        </h2>
        <div className={!isDark ? "Moon_Button" : "Sun_Button"}>
            <img src={!isDark ? "/assets/images/icon-moon.svg" : "/assets/images/icon-sun.svg"} 
                alt="" className="moon" onClick={Theme}></img>
        </div>
    </div>
    );
}

export default Extensions;