import React from "react";


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
                    <a href="./assets/images/Jacob_Johnson_Resume.pdf">Resume</a>
                </li>
            </ul>
        </nav>
        </header>
        
    )
}

export default Header;