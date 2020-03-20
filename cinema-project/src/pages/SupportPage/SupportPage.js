import React, { Component } from "react";
import ItemSupport from "./ItemSupport";
import "./SupportPage.css";
import { actFetchDataSupportRequest } from "./../../actions/action";
import { connect } from "react-redux";

class SupportPage extends Component {
  componentDidMount() {
    this.props.onFetchDataSupport();
  }
  render() {
    let { Support } = this.props;

    let DataSupport = Support.map((support, index) => {
      return <ItemSupport key={index} support={support} />;
    });

    let linksStyle = {
      color: "black",
      textTransform: "uppercase"
    };
    return (
      <div className="container mb-5">
        <div className="nav-tabs my-4">
          <div className="col-md-12">
            <ul className="nav movie-home link-cout">
              <li className="link-wrapper">
                <a
                  className="link hover-2"
                  href="#tab_default_1"
                  data-toggle="tab"
                  aria-expanded="true"
                  style={linksStyle}
                >
                  Giải đáp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {DataSupport}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Support: state.reducerSupport.support
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataSupport: () => {
      dispatch(actFetchDataSupportRequest());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SupportPage);
