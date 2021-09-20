import React, { useState, useEffect } from "react";
import styles from "../KidSection/kidSection.module.css";
import tvIcon from '../../img/tvlogo.png'

function KidSection() {

    return <div className={styles.kidSection}>
        <div className={styles.box}>
            <div className={styles.kidContainer}>
                <h2 className={styles.title}>Create profiles for kids.</h2>
                <p className={styles.subtitle}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            <div>
                <img className={styles.img} alt="icon" src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd">
                </img>
            </div>
        </div>
    </div>
}


export default KidSection