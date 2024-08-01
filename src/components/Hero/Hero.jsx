import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {

    const onButtonClick = () => {
        const pdfUrl = "frida_mattsson_cv_website.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "frida_mattsson_cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome! I’m Frida Mattsson</h1>
            <p className={styles.description}>A Software Engineer and MSc student in IT Project Management.</p>
            <div className={styles.buttonsContainer}>
                <a href="mailto:frida_mattsson97@hotmail.com" className={styles.contactBtn}>Get in touch</a>
                <button onClick={onButtonClick} className={styles.contactBtn}>Download CV</button>
            </div>
        </div>
        <img src={getImageUrl("hero/hero_image_2.png")} alt="hero image of me" className={styles.heroImg} />
    </section>;
};