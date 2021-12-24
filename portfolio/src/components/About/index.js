import React from "react";
import headShot from "../../assets/images/ProfilePicture.jpeg"

function About() {
    return (
<section class="intro" id="About-Me">
        
        <div class="intro-headers">
            <h2>About Me</h2>
        </div>
        
        <div class="info">
            <img src={headShot} alt="Young man taking a selfie in the woods"></img>
            <p>Full stack web developer with experience building web applications using HTML, CSS, and Javascript. The following section contains the work I've performed using those languages. If you would like to reach out to me or see my previous job history, see the contact section along the bottom and my resume attached at the top.</p>
        </div>
    </section>

    )
}

export default About;