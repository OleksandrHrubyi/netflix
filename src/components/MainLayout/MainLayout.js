
import styles from './mainLayout.module.css'
import Footer from 'components/Footer/Footer'
import Header from "../Header/Header";

function MainLayout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout