import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ColumnBlock from '../../components/ColumnBlock/ColumnBlock';
import styles from './BuyTicketStyle';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {actFetchDataMovieRequest, actFetchShowtimesRequest} from '../../actions/action'
import { Box } from '@material-ui/core';

class BuyTicketPage extends Component {
  constructor() {
    super()
    this.state = {
      timeOfMovie: [],
      isShow: false,
      active: ''
    }
  }

  componentDidMount() {
    this.props.fetchAllDataMovie();
    this.props.fetchShowTimes();
  }

  handleOnChooseMovie = (id, showtimes) => {
    let listTime = []
    showtimes.forEach(item => {
      let movie = item.movieIds.find(movie => movie.id === id)
      if (movie !== undefined) listTime.push({...item, session: movie.session})
    });
    this.setState({
      timeOfMovie: listTime,
      isShow: true,
      active: id
    })
  }

  showMovieToChoose = (arr, classes, showtimes) => {
    return arr.map((item, index) => {
      let active = this.state.active === item.id ? classes.active : ''
      return (
        <div key={index} className={`${classes.block}`} onClick={() => {this.handleOnChooseMovie(item.id, showtimes)}}>
          <div className={`${classes.link} ${active} row no-gutters p-3`}>
            <span className='col-3'><img className={classes.img} src={item.image}/></span>
            <p className={`${classes.title} col-9 pl-4`}>{item.name}</p>
          </div>
        </div>
      )
      })
  }

  showTimeOfMovie = (arr, classes) => {
    return arr.map((item, index) => {
      return (
        <div key={index} className={`${classes.block} p-4`} >
            <div>{item.name}</div>
            <div className='d-flex flex-wrap'>
              { item.session.map((item, index) => {
                  return <Box key={index} py={1} px={2} className={classes.session}>{item}</Box>
                })
              }
            </div>
        </div>
      )
      })
  }

  render() {
    const { classes, movies, showtimes } = this.props;
    const { timeOfMovie, isShow } = this.state;
    let movieShowing = [];
    if(Object.keys(movies).length > 0) {
      movieShowing = movies.movieShowing
    }
    console.log('showtimesss:', showtimes)
    return (
        <div className="container my-4">
          <div className="row">
            <ColumnBlock title='Chọn phim'>
              {this.showMovieToChoose(movieShowing, classes, showtimes)}
            </ColumnBlock>

            <ColumnBlock title='Chọn suất'>
              { isShow && this.showTimeOfMovie(timeOfMovie, classes)}
            </ColumnBlock>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducerMovie.movie,
    showtimes: state.reducerShowtimes.showtime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDataMovie: () => {
      dispatch(actFetchDataMovieRequest())
    },
    fetchShowTimes: () => {
      dispatch(actFetchShowtimesRequest())
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withStyles(styles), withConnect)(BuyTicketPage);

