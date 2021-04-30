import React from 'react';
import './Search.css';
import glasses from '../../Assets/glasses.png';


function Search({ searchInfo, setSearchInfo, setQueryInfo }) {

    const handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        let info = e.target.value
        setSearchInfo(info)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        setQueryInfo(searchInfo);
        setSearchInfo("");
    }

    return (
        <form className="search-bar">
            <input className="search-bar__input" aria-label="search" type="text" onChange={handleInput} value={searchInfo} />
            <button className="search-bar__icon" aria-label="submit search" onClick={handleSubmit} type="submit">
                <img src={glasses} alt="magnifying-glass"></img>
            </button>
        </form>
    )
}

export default Search;
