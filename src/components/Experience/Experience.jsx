import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <ul className={styles.experienceItems}>
                <li className={styles.experienceItem}>
                    <img src={getImageUrl("about/mobile.png")} alt="mobile phone" />
                    <div className={styles.experienceItemText}>
                        <h3>Software Engineer</h3>
                        <p>I'm experienced in a range of languages and frameworks, including Flutter, React and .NET</p>
                    </div>
                </li>
                <li className={styles.experienceItem}>
                    <img src={getImageUrl("about/communication.png")} alt="people talking" />
                    <div className={styles.experienceItemText}>
                        <h3>Communicator</h3>
                        <p>I'm skilled in effective cross-functional communication between developers, product owners and other stakeholders</p>
                    </div>
                </li>
                <li className={styles.experienceItem}>
                    <img src={getImageUrl("about/frontend.png")} alt="frontend development" />
                    <div className={styles.experienceItemText}>
                        <h3>Project Management</h3>
                        <p>My Master's degree has provided me with a comprehensive understanding up PM practices and SDLC concepts</p>
                    </div>
                </li>
            </ul>
            <img
                src={getImageUrl("experience/headshot_bw.jpg")}
                alt="Temporary image"
                className={styles.experienceImage}
            />
        </div>
    </section>;
}