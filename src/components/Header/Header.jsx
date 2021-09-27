import { NavLink, withRouter } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/User/userOperation'
import { getTokenState, getUserName } from '../../redux/User/userSelectors'
import styles from './header.module.css'
import phonebook from '../../img/phonebook.svg'

function Header({ islogin, name, onLogout }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NavLink className={styles.link} to="/">
          <ReactSVG
            src={phonebook}
            beforeInjection={(svg) => {
              svg.classList.add(styles.phonebookIcon)
              svg.setAttribute('style', 'width: 170px')
            }}
          />
        </NavLink>
        <div className={styles.themeContainer}>
          {islogin ? (
            <div className={styles.authname}>
              <span className={styles.name}>
                Welcome, {name && name.toUpperCase()}
              </span>
              <div>
                <NavLink className={styles.login} to="/shows">
                  <span>Shows</span>
                </NavLink>
              </div>
              <button
                className={styles.logoutBtn}
                type="button"
                onClick={onLogout}
              >
                <IconContext.Provider value={{ className: styles.loginIcon }}>
                  <AiOutlineLogout />{' '}
                </IconContext.Provider>
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className={styles.nav}>
                {islogin && <div></div>}

                <NavLink className={styles.login} to="/login">
                  <IconContext.Provider value={{ className: styles.loginIcon }}>
                    <AiOutlineLogin />{' '}
                    <span className={styles.loginTitle}>Log in</span>
                  </IconContext.Provider>
                </NavLink>
                <NavLink className={styles.registration} to="/registr">
                  <span>Sign up</span>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  islogin: getTokenState(state),
  name: getUserName(state),
})

const mapDispatchToProps = {
  onLogout: logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
