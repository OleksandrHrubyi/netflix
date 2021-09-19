import styles from './home.module.css'
// import Login from "../Login/Login";
import MainForm from 'components/MainForm/MainForm'
import InfoSection from 'components/InfoSection/InfoSection'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.searchForm}>
          <MainForm />
        </div>
        {/* <Login /> */}
      </div>
      <InfoSection />
    </div>
  )
}

export default Home
