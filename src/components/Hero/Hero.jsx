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
            <img src={getImageUrl("hero/hero_image_2.png")} alt="hero image of me" className={styles.heroImgSmall} />
            <p className={styles.description}>A Software Engineer and MSc student in IT Project Management.</p>
            <div className={styles.buttonsContainer}>
                <button onClick={onButtonClick} className={styles.cvBtn}>Download CV</button>
                <div className={styles.socialIconsContainer}>
                    <a href="https://www.linkedin.com/in/fridamattsson/" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/linkedin.png")} alt="linkedin logo" className={styles.socialIcon} />
                    </a>
                    <a href="https://wa.me/6586695306" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/whatsapp.png")} alt="whatsapp logo" className={styles.socialIcon} />
                    </a>
                    <a href="https://github.com/fumattsson/" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/github.png")} alt="github logo" className={styles.socialIcon} />
                    </a>
                </div>
            </div>
        </div>
        <img src={getImageUrl("hero/hero_image_2.png")} alt="hero image of me" className={styles.heroImg} />
    </section>;
};