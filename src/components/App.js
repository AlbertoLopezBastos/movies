import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import MovieCard from './MovieCard';
import MovieDatabase from '../apis/MovieDatabase';
import '../styles/main.scss';

class App extends React.Component {

    state = {
        movies: []
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
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })
                )
        )
    };

    render() {
        return (
        <div>
            <Header />
            <SearchBox handleSearch={this.handleSearch}/>
            <div className="container">
                {this.renderMovies()}
            </div>
        </div>
    )
    };
}

export default App;