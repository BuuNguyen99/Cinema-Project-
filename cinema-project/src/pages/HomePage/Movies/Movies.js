import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TabControl from "../../../components/Tab/TabControl";
import { actFetchDataMovieRequest } from './../../../actions/action';
import "./Movies.css";

class Movies extends React.Component {
  constructor(props){
    super(props)
    this.href = '/now-showing'
  }
  
  componentDidMount () {
   this.props.fetchAllDataMovie();
  }

  render() {
    let { movies } = this.props;
    let movieShowing = [], movieComingSoon = [];
    if(Object.keys(movies).length > 0) {
      movieShowing = movies.movieShowing.slice(0, 6);
      movieComingSoon = movies.movieComingSoon.slice(0, 6)
    }
    return (
      <div className="container p-0 mb-5">
        <TabControl tab1='phim đang chiếu'
                    tab2='phim sắp chiếu'
                    data1={movieShowing}
                    data2={movieComingSoon}
                    tabDefault={0}
                    path={'/'}/>
        <div className="row mt-3">
          <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                <Link to='/now-showing' className="btn secondary btn-outline-orange">
                  Xem thêm
                </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.reducerMovie.movie
  }
}
const mapDispatchToProps = (dispatch) => {
        return {
          fetchAllDataMovie: () => {
            dispatch(actFetchDataMovieRequest())
          }
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
