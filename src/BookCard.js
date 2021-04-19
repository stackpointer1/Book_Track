import React from 'react'

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>Title:{props.title}</h2>
                <h3>Author:{props.author}</h3>
                <h4>published Date:{props.published ==='0000'?'Not available' :props.published}</h4>
            </div>
        </div>
    )
}

export default BookCard
