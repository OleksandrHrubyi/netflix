import styles from './navigation.module.css'
import { NavLink, withRouter } from 'react-router-dom'

function Navigation({ name }) {
    return <div className={styles.navigation}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to='/shows'>Shows</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to={`/shows/${name}`}>Shows</NavLink>
            </li>

        </ul>
    </div>
}

export default Navigation