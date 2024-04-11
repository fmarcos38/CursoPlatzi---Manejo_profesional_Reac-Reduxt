import React from 'react';
import './search.css';
import { SearchOutlined } from '@ant-design/icons';


function Search({search, setSearch}) {
    

    return (
        <div className="search-container">
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
                placeholder='search'
            />
            <button className="search-button">
                <SearchOutlined />
            </button>

        </div>

    )
}

export default Search
