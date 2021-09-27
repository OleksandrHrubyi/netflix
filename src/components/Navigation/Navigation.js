import styles from './navigation.module.css'
import { NavLink } from 'react-router-dom'

function Navigation({ name }) {
    return <div className={styles.navigation}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <NavLink to='/' className={styles.link}>Home</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to='/shows' className={styles.link}>Shows</NavLink>
            </li>
        </ul>
    </div>
}

export default Navigation