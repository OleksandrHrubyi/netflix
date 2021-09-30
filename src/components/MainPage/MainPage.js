import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getFilm } from '../../service'
import Navigation from "components/Navigation/Navigation";
import styles from './mainPage.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import Preloader from 'components/Preloader/Preloader'

function MainPage({ arr }) {
    const [film, setFilm] = useState(null)
    const [isPreloader, setisPreloader] = useState(null)
    const curPath = window.location.href.split('/')
    const filmId = curPath[curPath.length - 1]

    useEffect(() => {
        setisPreloader(true)
        getFilm(filmId).then((resp) => {
            setFilm(resp)
            setisPreloader(false)
        })
    }, [filmId])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {isPreloader && <Preloader />}
                    {!isPreloader && film && <div className={styles.page}>
                        <div className={styles.imgContainer}>
                            <LazyLoadImage className={styles.img} src={film.image.original} alt={film.name} />
                            <div className={styles.infoContainer}>
                                {film.network.country.name && <div className={styles.network}>
                                    <strong className={styles.strongTitle}>Network:</strong>
                                    <p className={styles.networkTitle}>{film.network.country.name}</p>
                                </div>}
                                <div className={styles.genres}>
                                    <strong className={styles.strongTitle}>Genres:</strong>
                                    <ul className={styles.list}>
                                        {film.genres.map((el, i) => <li className={styles.item} key={i}>{el}</li>)}
                                    </ul>
                                </div>
                                <div className={styles.schedule}>
                                    <strong className={styles.strongTitle}>Schedule:</strong>
                                    <p>{film.schedule.days.map((el) => <span key={el}>{el}: </span>)}
                                        <span>{film.schedule.time}</span>
                                    </p>

                                </div>
                                <div className={styles.status}>
                                    <strong className={styles.strongTitle}>Status:</strong>
                                    <p>{film.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.filmInfo}>
                            <div className={styles.navContainer}><Navigation /></div>
                            <h2 className={styles.title}>{film.name}</h2>
                            <div className={styles.summary} dangerouslySetInnerHTML={{ __html: film.summary }}></div>
                            <div className={styles.socialContainer}>
                                <p className={styles.shareTitle}>Share this on:</p>
                                <ul className={styles.socialList}>
                                    <li>
                                        <a id="facebook" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${film.url}`} title="facebook"><FacebookIcon fontSize="large" /> </a>
                                    </li>
                                    <li>
                                        <a id="twitter" target="_blank" rel="noreferrer" href={`https://twitter.com/home?status=${film.url}`} title="twitter"><TwitterIcon fontSize="large" /></a>
                                    </li>
                                    <li>
                                        <a id="reddit" target="_blank" rel="noreferrer" href={`//www.reddit.com/submit?url=${film.url}`} title="reddit"><RedditIcon color="success" fontSize="large" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}
export default MainPage;



