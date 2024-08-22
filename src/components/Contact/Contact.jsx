import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <section id="contact" className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.content}>
            <ul className={styles.contactItems}>
                <li className={styles.contactItem}>
                    <div className={styles.contactItemText}>
                        <h3>Want to get in touch?</h3>
                        <p>Feel free to email me on <a href="mailto:frida_mattsson97@hotmail.com" className={styles.email}>frida_mattsson97@hotmail.com</a>, give me a call or message me on LinkedIn. I'll happily get back to you ASAP.</p>
                    </div>
                </li>
            </ul>
        </div>
        <a href="https://www.linkedin.com/in/fridamattsson/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedin.png")} alt="linkedin logo" className={styles.socialIcon} />
        </a>
        <a href="https://wa.me/6586695306" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/whatsapp.png")} alt="whatsapp logo" className={styles.socialIcon} />
        </a>
        <a href="https://github.com/fumattsson/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/github.png")} alt="github logo" className={styles.socialIcon} />
        </a>
    </section>;
}