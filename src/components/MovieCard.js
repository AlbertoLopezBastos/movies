import React from 'react';

export default function MovieCard({movie, handleOpenModal}) {
    
    function renderMovieCard(movie, handleOpenModal) {
        return movie ?
        (
            <div className="card" onClick={handleOpenModal}>
                <img className="card__img" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie" />
                <div className="card__title">
                 <h1 className="title">{movie.original_title}</h1>
                </div>
                <div className="card__rating">
                    <h2 className="rating">{movie.vote_average}</h2>
                </div>
                </div>
        ) :
        (
            <div className="card">
                <h1 className="card-title">No movies found</h1>
            </div>
        )
    };

    return (
        <div>
            {renderMovieCard(movie, handleOpenModal)}
        </div>
    ) 
};
