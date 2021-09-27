import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTokenState, getUserName } from '../../redux/User/userSelectors'
import MainForm from 'components/MainForm/MainForm'
import InfoSection from 'components/InfoSection/InfoSection'
import DownloadSection from 'components/DownloadSection/DownloadSection'
import KidSection from 'components/KidSection/KidSection'
import QuestionSection from 'components/QuestionSection/QuestionSection'
import styles from './home.module.css'

function Home({ islogin, name }) {
  return (
    <>
      {' '}
      <div className={styles.box}>
        <div className={styles.searchForm}>
          <MainForm condition />
        </div>
      </div>
      <InfoSection />
      <DownloadSection />
      <KidSection />
      <QuestionSection />
      {!islogin && <MainForm />}
    </>
  )
}

const mapStateToProps = (state) => ({
  islogin: getTokenState(state),
  name: getUserName(state),
})

export default connect(mapStateToProps)(withRouter(Home))
