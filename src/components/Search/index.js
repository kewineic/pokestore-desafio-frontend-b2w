import React from 'react';
import { useSearch } from '../../context/Search';
import Icon from '../../assets/search_icon.png';
import './style.css';

const Search = () => {
    const { search, setSearch } = useSearch({ search: "" });

    const handleInputChange = async (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value.toLowerCase()
        });
    }

    return (
        <div className="search-container">
            <label htmlFor="search-input">
                <input
                    className="search-input"
                    id="search-input" type="text"
                    placeholder="Filtrar pokemon ..."
                    name="search"
                    onChange={handleInputChange}
                />
                <img className="search-icon" alt="Search Icon" src={Icon} />
            </label>
        </div>
    );
};

export default Search;