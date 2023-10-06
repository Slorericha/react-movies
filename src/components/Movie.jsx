import React from 'react'

function Movie(props) {
    const {
        imdbId: id,
        Title: title,
        Poster: poster,
        Year: year,
        Type: type,
    } = props

    return <div className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={poster} alt={"poster"}/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
                {title}
            </span>
            <p>
                {year} <span className={"right"}>{type}</span>
            </p>
        </div>
    </div>
}

export {
    Movie
}