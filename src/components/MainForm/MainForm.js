import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTokenState, getUserName } from '../../redux/User/userSelectors'
import styles from "../MainForm/mainform.module.css";

function MainForm({ islogin }) {
    return <>
        <div className={styles.mainForm}>
            <div>
                <h2 className={styles.title}>Unlimited movies, TV shows, and more.</h2>
                <p className={styles.subtitle}>Watch anywhere. Cancel anytime.</p>
            </div>
            {!islogin && <div>
                <span className={styles.info}>Ready to watch? Enter your email to log in your account.</span>
                <NavLink to="/login" className={styles.submitBtn}> Get Started</NavLink>
            </div>}
        </div>
    </>
}


const mapStateToProps = (state) => ({
    islogin: getTokenState(state),
    name: getUserName(state)
})

export default connect(mapStateToProps)(withRouter(MainForm))