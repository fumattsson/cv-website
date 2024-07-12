import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome! I’m Frida Mattsson</h1>
            <p className={styles.description}>A Software Engineer and MSc student in IT Project Management.</p>
            <a href="mailto:frida_mattsson97@hotmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("hero/hero_image.png")} alt="hero image of me" className={styles.heroImg} />
    </section>;
};