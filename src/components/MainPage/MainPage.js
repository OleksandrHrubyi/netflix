import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'
import { getFilm, getAllEpisod } from '../../service'
import MainLayout from 'components/MainLayout/MainLayout'
import Navigation from "components/Navigation/Navigation";
import ThemeSwitch from '../themeSwitch/ThemeSwitch'
import Footer from 'components/Footer/Footer'
import styles from './mainPage.module.css'
import { FiVolume } from "react-icons/fi";

function MainPage({ arr }) {
    const [film, setFilm] = useState(null)
    const bodyRef = document.querySelector('body')
    const curPath = window.location.href.split('/')
    const filmId = curPath[curPath.length - 1]

    useEffect(() => {
        getFilm(filmId).then((resp) => {
            console.log(resp.summary, 'resp.summary');
            setFilm(resp)
            console.log(resp);
        })
    }, [filmId])

    const handleClick = () => {
        console.log(film.name, 'film')
    }

    return (
        <>
            <MainLayout page>

                <div className={styles.wrapper}>
                    <div className={styles.navContainer}><Navigation /></div>

                    {film && <div className={styles.page}>
                        <div className={styles.imgContainer}>
                            <img className={styles.img} src={film.image.original} alt={film.name} />
                            <div>
                                <p>Genres</p>
                                <ul>
                                    {film.genres.map((el, i) => <li key={i}>{el}</li>)}
                                </ul>
                            </div>
                            <div>
                                <span>Share this on:</span>
                                <span className={styles.facebook}>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tvmaze.com%2Fshows%2F8%2Fglee" title="facebook">facebook</a>
                                </span>
                            </div>
                            {film.network.country.name && <div>
                                <strong>Network: </strong>
                                <p>{film.network.country.name}</p>
                            </div>}
                            <div>
                                <strong>Schedule:</strong>
                                <p>{film.schedule.days.map((el) => <span key={el}>{el}</span>)}</p>
                                <p>{film.schedule.time}</p>
                            </div>

                            <div>
                                <strong>Status:</strong>
                                <p>{film.status}</p>
                            </div>

                        </div>
                        <div className={styles.filmInfo}>
                            <div><ThemeSwitch bodyRef={bodyRef} /></div>
                            <h2 className={styles.title}>{film.name}</h2>
                            <div className={styles.summary} dangerouslySetInnerHTML={{ __html: film.summary }}></div>

                        </div>
                        <div>

                        </div>
                    </div>}
                </div>
            </MainLayout>

        </>
    )
}
export default MainPage;



