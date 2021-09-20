import styles from './home.module.css'
// import Login from "../Login/Login";
import MainForm from 'components/MainForm/MainForm'
import InfoSection from 'components/InfoSection/InfoSection'
import DownloadSection from 'components/DownloadSection/DownloadSection'
import KidSection from 'components/KidSection/KidSection'
import QuestionSection from 'components/QuestionSection/QuestionSection'
import Footer from 'components/Footer/Footer'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.searchForm}>
          <MainForm condition />
        </div>
        {/* <Login /> */}
      </div>
      <InfoSection />
      <DownloadSection />
      <KidSection />
      <QuestionSection />
      <MainForm />
      <Footer />
    </div>
  )
}

export default Home
