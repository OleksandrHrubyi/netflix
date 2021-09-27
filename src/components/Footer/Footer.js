import styles from "../Footer/footer.module.css";

function Footer() {
    return <div className={styles.footer}>
        <div className={styles.box}>
            <h3 className={styles.title}>Questions? Call 0800-000-7969</h3>
            <div className={styles.footerContainer}>
                <div className={styles.item}>
                    <ul>
                        <li><a className={styles.link} href="/">FAQ</a></li>
                        <li><a className={styles.link} href="/">Investor Relations</a></li>
                        <li><a className={styles.link} href="/">Ways to Watch</a></li>
                        <li><a className={styles.link} href="/">Impressum</a></li>
                        <li><a className={styles.link} href="/">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <ul>
                        <li><a className={styles.link} href="/">Help Center</a></li>
                        <li><a className={styles.link} href="/">Jobs</a></li>
                        <li><a className={styles.link} href="/">Terms of Use</a></li>
                        <li><a className={styles.link} href="/">Contact Us</a></li>

                    </ul>
                </div>
                <div className={styles.item}>
                    <ul>
                        <li><a className={styles.link} href="/">Account</a></li>
                        <li><a className={styles.link} href="/">Redeem Gift Cards</a></li>
                        <li><a className={styles.link} href="/">Privacy</a></li>
                        <li><a className={styles.link} href="/">Speed Test</a></li>

                    </ul>
                </div>
                <div className={styles.item}>
                    <ul>
                        <li><a className={styles.link} href="/">Media Center</a></li>
                        <li><a className={styles.link} href="/">Buy Gift Cards</a></li>
                        <li><a className={styles.link} href="/">Cookie Preferences</a></li>
                        <li><a className={styles.link} href="/">Legal Notices</a></li>

                    </ul>
                </div>
            </div>

        </div>
        <p className={styles.footerTitle}>©2021 Netflix. All rights reserved</p>
    </div>
}


export default Footer