import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/User/userOperation'
import { getTokenState, getUserName } from '../../redux/User/userSelectors'
import styles from './header.module.css'
import phonebook from '../../img/phonebook.svg'
import ThemeSwitch from '../themeSwitch/ThemeSwitch'

function Header({ islogin, name, onLogout }) {
  useEffect(() => {
    console.log(window.location.pathname)
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NavLink className={styles.link} to="/">
          {/* <span className={styles.title}> Netflix</span>{' '} */}
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
                <NavLink className={styles.login} to="/login">
                  <IconContext.Provider value={{ className: styles.loginIcon }}>
                    <AiOutlineLogin />{' '}
                    <span className={styles.loginTitle}>Sign in</span>
                  </IconContext.Provider>
                </NavLink>
                <NavLink className={styles.registration} to="/registr">
                  <span>Sign up</span>
                </NavLink>
              </div>
            </>
          )}
          <div>{window.location.pathname !== '/' && <ThemeSwitch />}</div>
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