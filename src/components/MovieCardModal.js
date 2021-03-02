import React from 'react';
import Modal from 'react-modal';

const MovieCardModal = ({ movie, onCloseModal, isOpen }) => (
    <Modal isOpen={isOpen} contenLabel="Movie Details" closeTimeoutMS={200} className="modal">
        <h1 className="modal-title">
            {movie.original_title}
            <span>
                {movie.vote_average}
            </span>
        </h1>
        <img className="modal-img" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="" />
        <p className="modal-overview">
            {movie.overview}
        </p>
        <button className="button" onClick={onCloseModal}>
            Close
        </button>
    </Modal>
);


export default MovieCardModal;