import React from 'react';
import MovieCardModal from '../components/MovieCardModal.js';

class MovieCard extends React.Component {
    state = {
        isOpen: false
    };

    handleOpenModal = () => {
        this.setState({ isOpen: true });
    };

    handleCloseModal = (e) => {
        e.stopPropagation();
        this.setState({ isOpen: false });
    };

    renderMovieCard = (movie) => {
        return movie ?
            (
                <div className="card" onClick={this.handleOpenModal}>
                    <img className="card-img" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                    <h1 className="card-title">{movie.original_title}</h1>
                    <h2 className="card-rating">{movie.vote_average}</h2>
                    <MovieCardModal key={movie.id} movie={movie} appElement={movie.id} isOpen={this.state.isOpen} onCloseModal={this.handleCloseModal} />
                    {console.log(movie.video)}
                </div>
            ) :
            (
                <div className="card">
                    <h1 className="card-title">No movies found</h1>
                </div>
            )
    };

    render() {
        return (
            <div>
                {this.renderMovieCard(this.props.movie)}
            </div>
        );
    };
};

export default MovieCard;