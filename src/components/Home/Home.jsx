import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTokenState, getUserName } from '../../redux/User/userSelectors'
import styles from './home.module.css'
import MainForm from 'components/MainForm/MainForm'
import InfoSection from 'components/InfoSection/InfoSection'

const DownloadSection = React.lazy(() =>
  import('../DownloadSection/DownloadSection'),
)
const KidSection = React.lazy(() => import('../KidSection/KidSection'))
const QuestionSection = React.lazy(() =>
  import('../QuestionSection/QuestionSection'),
)

function Home({ islogin, name }) {
  return (
    <>
      {' '}
      <div className={styles.box}>
        <div className={styles.searchForm}>
          <MainForm condition />
        </div>
      </div>
      <section>
        <InfoSection />
      </section>
      <section>
        {' '}
        <DownloadSection />
      </section>
      <section>
        {' '}
        <KidSection />
      </section>
      <section>
        {' '}
        <QuestionSection />
      </section>
      {!islogin && <MainForm />}
    </>
  )
}

const mapStateToProps = (state) => ({
  islogin: getTokenState(state),
  name: getUserName(state),
})

export default connect(mapStateToProps)(withRouter(Home))
