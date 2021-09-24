import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from 'react-router-dom'
import Header from 'components/Header/Header'
import { getAllEpisod } from '../../service'
import styles from './mainList.module.css'

function MainList({ arr }) {
    const [shows, setShows] = useState([])

    useEffect(() => {
        getAllEpisod().then((resp) => {
            console.log(resp)
            return setShows(resp)
        }
        )
    }, [])
    const handleClick = (e) => {
        console.log('hi', shows)
        if (e.target.dataset.id === 'rating') {
            const a = shows.sort((a, b) => b.rating.average - a.rating.average)
            setShows(a)
        }
        if (e.target.dataset.id === 'ganre') {
            const a = shows.sort((el) => el === e.target.dataset.ganre)
            setShows(a)
        }
        // setShows(sortArr)
    }



    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <ul className={styles.list}>{shows.map((el) => {
                    return <li key={el.id} className={styles.item}>
                        <NavLink to={`/shows/${el.id}`}>
                            <img src={el.image.medium} alt={el.name} />
                            <div className={styles.titleContainer}>
                                <h2 className={styles.title}>{el.name}</h2>
                                <div>
                                    <p>Rating: {el.rating.average}</p>
                                    <div>
                                        <span>Genres: {el.genres[0]}</span>



                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </li>

                })}</ul>
            </div>
        </>
    )
}
export default MainList;



