import React from "react";
import ItemMovie from "./ItemMovie";
import "./Movies.css";
import { actFetchDataApi } from './../../../actions/action';
import callApi from "../../../utils/ApiCaller";
import { connect } from "react-redux";

class Movies extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Movies : [],

    };
  }
 
  componentDidMount () {
    callApi ('movie','GET',null).then(res => {
      this.props.fetchAllData(res.data);
      
    })
  }

  render() {
    let linksStyle = {
      color: "black",
      textTransform: "uppercase"
    };
    let { Movies } = this.props;
    let dataMovies = Movies.map((movie,index) => {
      return (
        <ItemMovie
          key={index}
          movie={movie}
        />
      );
    });
    return (
      <div className="container mb-5">
        <div className="row nav-tabs">
          <div className="col-md-12">
          <ul className="nav movie-home link-cout">
            <li className=" mr-3 link-wrapper">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Phim đang chiếu
              </a>
            </li>
            <li className=" mr-3 link-wrapper">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Phim sắp chiếu
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div className="row">
          {dataMovies}
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
            <a href="/phim-dang-chieu" className="btn secondary btn-outline-orange">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Movies: state
  }
}
const mapDispatchToProps = (dispatch,props) => {
        return {
          fetchAllData: (data) => {
            dispatch(actFetchDataApi(data));
          }
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
