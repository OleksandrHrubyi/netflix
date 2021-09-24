import styles from './mainFilter.module.css'

function MainFilter({ handleClick }) {



    return <div>
        <ul>
            <li>
                <button className={styles.btn} data-id='rating' type="button" onClick={handleClick}>Rating</button>
            </li>
            <li>
                <p>Ganre</p>
                <ul>
                    <li>
                        <button className={styles.btn} data-ganre='action' type="button" onClick={handleClick}>Action</button>
                    </li>
                    <li>
                        <button className={styles.btn} data-ganre='crime' type="button" onClick={handleClick}>Crime</button>
                    </li>
                </ul>

            </li>
        </ul>
    </div>
}