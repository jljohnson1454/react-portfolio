import React from "react";

function Projects() {
    return (
    <main id="Work">    
            
            <div class="intro-headers">
                <h2>Work</h2>
            </div>

                <section class="work-container">

                    <div class="first-row">
                    <div class="work-item">
                        <a href="https://github.com/project-2-Glampers/RVnG/tree/main"><img src="assets/images/homepage.jpg" alt="an application to adopt animals"></img><span>RVnG</span></a>
                    </div>
                    </div>

                    <div class ="second-row">
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/Challenge-1-Git-Refactor/"><img src="./assets/images/Horiseon.png" alt="a website about search engine optimization"></img><span>Horiseon</span></a>
                        </div>
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/run-buddy/"><img src="assets/images/RunBuddy.png" alt="a website for healthy living"></img><span>Run Buddy</span></a>
                        </div>
                    </div>

                    <div class="third-row">
                        <div class="work-item">
                            <a href="https://wagsnwhiskers.github.io/wags-n-whiskers/"><img src="assets/images/Wags.jpg" alt="a podcast about horror movies"></img><span>Wags n Whiskers</span></a>
                        </div>
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/robot-gladiators/"><img src="./assets/images/robotgladiators.jpg" alt="a web game where the player fights robots"></img><span>Robot Gladiators</span></a>
                        </div>
                    </div>

                </section>
        </main>

    )
}

export default Projects;