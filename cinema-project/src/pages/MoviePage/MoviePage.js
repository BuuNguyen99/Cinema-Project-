import React, { Component } from 'react';
import TabControl from '../../components/Tab/TabControl';
import { connect } from "react-redux";
import {actFetchDataMovieRequest} from '../../actions/action'

class MoviePage extends Component {
  componentDidMount () {  
    this.props.fetchAllDataMovie();
   }
  render() {
    let { movieShowing, movieComingSoon } = this.props;
    const { match } = this.props;
    const tabDefault = match.path === '/now-showing' ? 0 : 1;
    return (
      <div className="container p-0 mt-3 mb-5">
        <TabControl tab1='phim đang chiếu'
                    tab2='phim sắp chiếu'
                    data1={movieShowing}
                    data2={movieComingSoon}
                    tabDefault={tabDefault}
                    path={match.path}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieShowing: state.reducerMovie.movieShowing,
    movieComingSoon: state.reducerMovie.movieComingSoon
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDataMovie: () => {
      dispatch(actFetchDataMovieRequest())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
