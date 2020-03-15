import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';

class ShowMovie extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { movies } = this.props;
        return (
            <div className='row'>
                {this.showMovieContent(movies)}
            </div>
        );
    }

    showMovieContent = (movies = []) => {
        let dataMovies = movies.map((movie,index) => {
            return (
              <MovieItem
                key={index}
                movie={movie}
              />
            );
          });
        return dataMovies
      }
}

export default ShowMovie;