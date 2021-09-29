import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { getAllEpisod, addFavorite, searchFilms, getAll } from '../../service'
import styles from './mainList.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Preloader from "components/Preloader/Preloader";
import { TrendingUpRounded } from "@mui/icons-material";
import nophoto from '../../img/nophoto.jpeg'

function MainList() {
    const [shows, setShows] = useState([])
    const [renderShows, setRenderShows] = useState(shows)
    const [pressedBtn, setPressedBtn] = useState(false)
    const [favorite, setFavorite] = useState([])
    const [page, setPage] = useState(0)
    const [showBtnUp, setShowBtnUp] = useState(false)
    const [isPreloader, setIsPreloader] = useState(true)
    const [renderPaginBtn, setRenderPaginBtn] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [isVisiblePagin, setIsVisiblePagin] = useState(TrendingUpRounded)
    const [isActive, setIsActive] = useState('all')



    useEffect(() => {
        setIsPreloader(true)
        getAllData(page)
        setIsActive('All')
        // document.addEventListener("scroll", () => {
        //     window.scrollY > 1000 ? setShowBtnUp(true) : setShowBtnUp(false)
        // })
    }, [])


    const handleSearch = (e) => {
        if (!e.target.value.length) {
            setPage('0')
            setIsActive('All')
            getAllData(page)
            return
        }
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFilms(searchValue).then(res => {
            if (res) {
                const result = res.map(el => el.show)
                setRenderShows(result)
                setIsVisiblePagin(false)

            }
        })

    }



    const handleFavorite = (e) => {
        if (!favorite.length) {
            setPressedBtn(true)
        }
        const favoriteFilm = Number(e.target.dataset.id)
        if (favorite.includes(favoriteFilm)) {
            setFavorite(favorite.filter(el => el !== favoriteFilm))
        }
        if (!favorite.includes(favoriteFilm)) {
            addFavorite(e.target.dataset.id)
            setFavorite([favoriteFilm, ...favorite])
        }
        localStorage.setItem('favorites', JSON.stringify(favorite))
    }

    const handleSortingFavorites = (e) => {
        setIsActive(e.target.dataset.id)
        if (e.target.dataset.id === 'Favorites') {
            if (favorite.length) {
                setRenderPaginBtn(false)
                const newArr = []
                shows.forEach(el => {
                    favorite.forEach(id => {
                        if (el.id === id) {
                            newArr.push(el)
                        }
                    })
                })
                setRenderShows(newArr)
            }
        }
        if (e.target.dataset.id === 'All') {
            setIsVisiblePagin(true)
            setRenderShows(shows)
            setRenderPaginBtn(true)
        }
        sortByGenres(e.target.dataset.id)
    }
    const sortByGenres = (genre) => {
        const arr = []
        getAll().then(resp => {
            resp.forEach(el => {
                if (el.genres.includes(genre)) {
                    arr.push(el)
                }
            })
            setRenderShows(arr)
        })

    }



    const handlePagin = (e) => {
        scrollTo(0, -200)
        if (e.target.dataset.id === 'next' && page < 4) {
            getAllData(page + 1)
            setPage(Number(page) + 1)
            return
        }
        if (e.target.dataset.id === 'prev' && page > 0) {
            getAllData(page - 1)
            setPage(Number(page) - 1)
            return
        }
    }

    const getAllData = (numberPage) => {
        getAllEpisod(numberPage).then((resp) => {
            setIsPreloader(false)
            if (resp && numberPage < 4) {
                setRenderShows(resp)
                return setShows(resp)
            }
        })
    }

    const handleUp = () => {
        scrollTo(0, -200)
        setShowBtnUp(false)
    }

    const scrollTo = (x, y) => {
        window.scrollTo(x, y)
    }


    return (
        <>
            <div className={styles.wrapper}>
                {showBtnUp && <button className={styles.btnUp} onClick={handleUp}>UP</button>}
                <div className={styles.listContainer}>
                    <div className={styles.sortContainer}>
                        <div className={styles.filterContainer}>
                            <button data-id="All" onClick={handleSortingFavorites} type="button" className={isActive !== 'All' ? styles.sortFav : styles.activeBtn}>All</button>
                            <button data-id="Drama" onClick={handleSortingFavorites} className={isActive !== 'Drama' ? styles.sortFav : styles.activeBtn}>Drama</button>
                            <button data-id="Action" onClick={handleSortingFavorites} className={isActive !== 'Action' ? styles.sortFav : styles.activeBtn}>Action</button>
                            <button data-id="Horror" onClick={handleSortingFavorites} className={isActive !== 'Horror' ? styles.sortFav : styles.activeBtn}>Horror</button>
                            <button data-id="Anime" onClick={handleSortingFavorites} className={isActive !== 'Anime' ? styles.sortFav : styles.activeBtn}>Anime</button>
                            <button data-id="Comedy" onClick={handleSortingFavorites} className={isActive !== 'Comedy' ? styles.sortFav : styles.activeBtn}>Comedy</button>
                            <button data-id="Adventure" onClick={handleSortingFavorites} className={isActive !== 'Adventure' ? styles.sortFav : styles.activeBtn}>Adventure</button>
                            <button disabled={!favorite.length} data-id="Favorites" onClick={handleSortingFavorites} type="button" className={isActive !== 'Favorites' ? styles.sortFav : styles.activeBtn}>Favorites</button>
                        </div>
                        <div>
                            <form className={styles.form}>
                                <input className={styles.input} type="text" onChange={handleSearch} />
                                <button onClick={handleSubmit} className={styles.formBtn} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    {isPreloader && <Preloader />}
                    {!isPreloader && <ul className={styles.list}>{renderShows.map((el, i) => {
                        return <li key={el.id} className={styles.item}>
                            <NavLink to={`/shows/${el.id}`}>
                                <LazyLoadImage alt={el.name} src={el && el.image && el.image.medium ? el.image.medium : nophoto}
                                />
                            </NavLink>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.title}>{el.name}</h2>
                                <div className={styles.allInfo}>
                                    <div className={styles.favContainer}>
                                        <p className={styles.rating}>Rating: {el.rating.average ? el.rating.average : 'No rating'}</p>
                                        <button data-id={el.id} data-type={el.id} onClick={handleFavorite} className={styles.btnFavorites}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                width="24px"
                                                fill={favorite.includes(el.id) ? "red" : '#fff'}
                                                data-id={el.id}
                                            ><path d="M0 0h24v24H0z" fill="none" data-id={el.id} /><path data-id={el.id}
                                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                                /></svg>
                                        </button>
                                    </div>
                                    {el.genres.length > 0 && <div>
                                        <span className={styles.genres}>Genres: {el.genres[0]}</span>
                                    </div>}
                                </div>
                            </div>
                        </li>
                    })}
                    </ul>}
                </div>
                {!isPreloader && isActive === 'All' && <div className={styles.paginContainer}>
                    <button className={styles.paginBtn} data-id="prev" type='button' onClick={handlePagin}>prev</button>
                    {page < 4 && isVisiblePagin && <button className={styles.paginBtn} data-id="next" type='button' onClick={handlePagin}>next</button>}
                </div>}
            </div >
        </>
    )
}
export default MainList;



