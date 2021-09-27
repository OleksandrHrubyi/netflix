import styles from "../DownloadSection/downloadSection.module.css";
import tvIcon from '../../img/loadIcon.jpeg'

function DownloadSection() {
    return <div className={styles.downloadSection}>
        <div className={styles.box}>
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>Download your shows to watch offline.</h2>
                <p className={styles.subtitle}>Save your favorites easily and always have something to watch.</p>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={tvIcon} alt="app icon" />
                <div className={styles.animation}>
                    <div className={styles.animationImage}>
                        <img className={styles.icon} alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png">
                        </img>
                    </div>
                    <div className={styles.animationText}>
                        <div>Stranger Things</div>
                        <div id="" className={styles.download} data-uia="">Downloading...</div></div></div>
            </div>
        </div>
    </div >
}


export default DownloadSection