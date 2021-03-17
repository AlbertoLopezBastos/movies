import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ movie, onCloseModal, open }) {
    if(!open) return null;
    return ReactDOM.createPortal(
    <div>   
        <div className="overlay" onClick={onCloseModal}></div>
            <div className="modal">
            <div className="modal__header">
                <div className="modal__title"> 
                    {movie.original_title}
                </div>           
                <div className="modal__rating">
                    {movie.vote_average}
                </div>
            </div>
            <img className="modal__img" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="Movie" />
            <p className="modal__overview">
                {movie.overview}
            </p>
            <button className="modal__btn" onClick={onCloseModal}>
                Close
            </button>
        </div>
    </div>, document.getElementById('modal')
    )
}

