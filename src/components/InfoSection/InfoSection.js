import React, { useState, useEffect } from "react";
import styles from "../InfoSection/infoSection.module.css";
import tvIcon from '../../img/tvlogo.png'

function InfoSection() {
    const videoSource = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
    return <div className={styles.infoSection}>
        <div className={styles.box}>
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>Enjoy on your TV.</h2>
                <p className={styles.subtitle}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={tvIcon} alt="tv icon" />
                <div className={styles.animation}>
                    <video>
                        <source src={videoSource} type="video/mp4"></source>
                    </video>

                </div>

            </div>
        </div>
    </div>
}


export default InfoSection