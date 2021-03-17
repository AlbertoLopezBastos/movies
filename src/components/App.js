import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import MovieCard from './MovieCard';
import MovieDatabase from '../apis/MovieDatabase';
import Modal from './Modal';
import '../styles/main.scss';

class App extends React.Component {

    state = {
        movies: [],
        open: false,
        modalMovie: [],
    };  

    handleOpenModal = (movie) => {
        this.setState({ open: true });
        this.setState({modalMovie: movie});
    };

    handleCloseModal = (e) => {
        e.stopPropagation();
        this.setState({ open: false });
    };

    async componentDidMount() {
        const response = await MovieDatabase.get('/4/list/1');
        this.setState({ movies: response.data.results })
    };

    handleSearch = async (searchValue) => {
        const response = await MovieDatabase.get(`/3/search/movie/?query=${searchValue}`);
        this.setState({ movies: response.data.results })
    };

    renderMovies = () => {
        return this.state.movies && (

            this.state.movies.length === 0 ?
                (
                    <MovieCard />
                ) :
                (
                    this.state.movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} handleOpenModal={() => this.handleOpenModal(movie)} />             
                        )
                    })
                )
        )
    };

    render() {
        return (
        <div>
            <Header />
            <Modal open={this.state.open} onCloseModal={this.handleCloseModal} movie={this.state.modalMovie}/>
            <SearchBox handleSearch={this.handleSearch}/>
            <div className="container">
                {this.renderMovies()}
            </div>
        </div>
    )
    };
}

export default App;