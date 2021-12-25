import React from "react";
import resume from "../../assets/Jacob_Johnson_Resume.pdf"


function Header() {
    return (
        <header>
        <h1><a href="./index.html">Jacob Johnson</a></h1>
        <nav>
            <ul>
                <li>
                    <a href="#About-Me">About Me</a>
                </li>
                <li>
                    <a href="#Work">Work</a>
                </li>
                <li>
                    <a href="#Contact-Me">Contact Me</a>
                </li>
                <li>
                    <a href={resume}>Resume</a>
                </li>
            </ul>
        </nav>
        
        </header>
        
        
    )
}

export default Header;