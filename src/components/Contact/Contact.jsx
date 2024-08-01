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
                        <p>Feel free to send me an email, give me a call or message me on LinkedIn. I'll happily get back to you ASAP.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}