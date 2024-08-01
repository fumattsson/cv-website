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
                        <h3>Who am I?</h3>
                        <p>I was born and raised on a small island called Åland in Finland, where fishing and sauna are two of the most popular activities. I left the island at 19 and have since lived in five countries across three continents. Discovering new cultures has become a huge interest, and one of my favorite ways of doing so is through food. Cooking is also a way for me to connect with my home whenever I can't go back.</p>
                        <br />
                        <p>When I'm not in the kitchen experimenting with new recipes, you might find me at the gym, hiking, skiing, grabbing coffee with a friend, or at a festival. And like every person from the Nordics, you'll find me following the sun like a sunflower.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}