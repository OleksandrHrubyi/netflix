import styles from './themeSwitch.module.css'
import React, { useEffect } from 'react'

const LIGHT = 'lightTheme'
const DARK = 'darkTheme'
const bodyRef = document.querySelector('body')

function ThemeSwitch() {
  useEffect(() => {
    const toogleRef = document.querySelector('#theme-switch-toggle')
    if (localStorage.getItem('theme') === 'dark') {
      bodyRef.classList.add(DARK)
      toogleRef.checked = true
    } else {
      bodyRef.classList.add(LIGHT)
      toogleRef.checked = false
    }
  }, [])

  const changeToggleTheme = function (event) {
    if (event.target.checked) {
      bodyRef.classList.add(DARK)
      bodyRef.classList.remove(LIGHT)
      localStorage.setItem('theme', 'dark')
    } else {
      bodyRef.classList.add(LIGHT)
      bodyRef.classList.remove(DARK)
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="toolbar">
      <div className="themeSwitch">
        <div className={styles.themeSwitchControl}>
          <input
            onChange={changeToggleTheme}
            className={styles.themeSwitchToggle}
            type="checkbox"
            name="theme"
            id="theme-switch-toggle"
            aria-label="Переключить между тёмной и светлой темой"
          />
          <label
            aria-hidden="true"
            className={styles.themeSwitchTrack}
            htmlFor="theme-switch-toggle"
          ></label>
          <div aria-hidden="true" className={styles.themeSwitchMarker}></div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitch
