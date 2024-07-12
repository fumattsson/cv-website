import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section id="about" className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/about_me.png")} 
                alt="Temporary image"
                className={styles.aboutImage} 
            />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/mobile.png")} alt="mobile phone" />
                <div className={styles.aboutItemText}>
                    <h3>Mobile Developer</h3>
                    <p>I'm an experienced mobile developer</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/communication.png")} alt="people talking" />
                <div className={styles.aboutItemText}>
                    <h3>Communicator</h3>
                    <p>I'm skilled in effective cross-functional communication</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/frontend.png")} alt="frontend development" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend developer</h3>
                    <p>I have experience in frontend development</p>
                </div>
            </li>
        </ul>
        </div>
    </section>;
}