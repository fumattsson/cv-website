import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section id="about" className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/tml_image_cropped.jpg")}
                alt="Temporary image"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>I was born and raised on a small island called Åland in Finland, where fishing and sauna are two of the most popular activities. I left the island at 19 and have since lived in five countries across three continents. Discovering new cultures has become a huge interest, and one of my favorite ways of doing so is through food. Cooking is also a way for me to connect with my home whenever I can't go back.</p>
                        <br />
                        <p>My studies in ICT at KTH in Stockholm led me to start a career in Software Engineering - a job that I really enjoyed. The job also helped spark my interest in project management, which led me to go back to school for a master's degree in IT Project Management. Now that the program is coming to an end, I'm growing increasingly excited to continute my career. I would be most excited about roles in the intersection between business and technology, but also frontend engineering or mobile development roles.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}