import React from "react";
import Glampers from "../../assets/images/homepage.jpg";
import Horiseon from "../../assets/images/Horiseon.png";
import RunBuddy from "../../assets/images/RunBuddy.png";
import Wags from "../../assets/images/Wags.jpg";
import robotGladiators from "../../assets/images/robotgladiators.jpg";

const altTexts = {
    workItem: "an application to find RVs",
    workItem2: "a website about search engine optimization",
    workItem3: "a website for healthy living",
    workItem4: "an applicataion for finding dogs",
    workItem5: "a web game where a player fights robots"
}

function Projects() {
    return (
    <main id="Work">    
            
            <div class="intro-headers">
                <h2>Work</h2>
            </div>

                <section class="work-container">

                    <div class="first-row">
                    <div class="work-item">
                        <a href="https://github.com/project-2-Glampers/RVnG/tree/main"><img src={Glampers} alt={altTexts.workItem} ></img><span>RVnG</span></a>
                    </div>
                    </div>

                    <div class ="second-row">
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/Challenge-1-Git-Refactor/"><img src={Horiseon} alt={altTexts.workItem2}></img><span>Horiseon</span></a>
                        </div>
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/run-buddy/"><img src={RunBuddy} alt={altTexts.workItem3}></img><span>Run Buddy</span></a>
                        </div>
                    </div>

                    <div class="third-row">
                        <div class="work-item">
                            <a href="https://wagsnwhiskers.github.io/wags-n-whiskers/"><img src={Wags} alt={altTexts.workItem4}></img><span>Wags n Whiskers</span></a>
                        </div>
                        <div class="work-item">
                            <a href="https://jljohnson1454.github.io/robot-gladiators/"><img src={robotGladiators} alt={altTexts.workItem5}></img><span>Robot Gladiators</span></a>
                        </div>
                    </div>

                </section>
        </main>

    )
}

export default Projects;