import styles from './mainLayout.module.css'
import Footer from 'components/Footer/Footer'
import Header from "../Header/Header";
import MainForm from 'components/MainForm/MainForm'
function MainLayout({ main, page, children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.box}>
                {main && <div className={styles.searchForm}>
                    <MainForm condition />
                </div>}
                {page && children}
            </div>
            {!page && children}
            <Footer />
        </div>
    )
}

export default MainLayout