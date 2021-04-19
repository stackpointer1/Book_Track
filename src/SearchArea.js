import React from 'react'

const SearchArea = (props) => {
    return (
        <div className="search-area">
        <form onSubmit={props.searchBook}  action="">
            <input type="text" onChange={props.handleSearch}/>
            <button type="submit">Search</button>
            <select className="sort-container" defaultValue="sort" onChange={props.handleSort}>
                <option disabled value="sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
            
        </div>
    )
}

export default SearchArea
