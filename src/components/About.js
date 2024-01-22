import React from "react";
import AboutImg from "../assets/images/About.svg"
import "../css/About.css"

export default function About () {
    return (
        <>
            <div className="about-container">
                <h2>ABOUT</h2>
                <div className="about-content">
                    <img src={AboutImg} alt="Manuel Flores"/>
                    <div className="about-info">
                        <p>Manuel, often referred to as a "Renaissance man" by both teachers and peers, has an insatiable passion for acquiring new skills. His journey led him to the world of coding, where he found a love for the constant challenges and the endless opportunities to learn and conquer.</p>
                        <p>After years in the food service industry, Manuel took a decisive step into the tech world, focusing on front-end development. He is dedicated to crafting responsive and visually stunning web applications. Leveraging the power of HTML, CSS, JavaScript, and the React Framework, Manuel believes that nothing is beyond his reach. When confronted with complex problems, his adept problem-solving skills enable him to navigate and overcome obstacles with ease.</p>
                        <p>Beyond coding, Manuel channels his creativity through various mediums. His diverse range of hobbies includes dancing, video editing, graphic design, sound design, garment design, and more. This multifaceted approach to life reflects his intrinsic curiosity and the drive to explore and master new domains.</p>
                    </div>
                </div>
            </div>
        </>
    )
};