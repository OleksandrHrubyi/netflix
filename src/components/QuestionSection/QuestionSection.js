import React, { useState, useEffect } from "react";
import styles from "../QuestionSection/questionSection.module.css";
import { dataQuestion } from '../../data/question'


function QuestionSection() {
    const [showInfo, setShowInfo] = useState(false)
    const [showBox, setShowBox] = useState(false)


    const handleClick = (e) => {
        console.log(e.target.dataset.id)
        setShowInfo(e.target.dataset.id)
        setShowBox(!showBox)

    }


    return <div className={styles.QuestionSection}>
        <div className={styles.box}>
            <div className={styles.questionContainer}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
            </div>
            <div>
                <ul className={styles.list}>
                    {dataQuestion.map(el => {
                        return <li key={el.title} className={styles.item}>
                            <button data-id={el.title} className={styles.btn} onClick={handleClick}>{el.title}
                                <svg className={showInfo === el.title && showBox ? styles.svgOpen : styles.svgIcon} id="thin-x" viewBox="0 0 26 26" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                </svg>
                            </button>
                            <div className={showInfo === el.title && showBox ? styles.open : styles.close}>
                                <span>{el.info}
                                </span>
                            </div>

                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}


export default QuestionSection