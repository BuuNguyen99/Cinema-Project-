import React, { Component } from "react";
import ItemPromotion from "./ItemPromotion";
import { actFetchDataPromotionRequest } from "../../../actions/action";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
class Pro extends Component {
  componentDidMount() {
    this.props.onFetchDataPromotion();
  }
  render() {
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };

    let dataItemPromotion = this.props.promotion.map((promotion, index) => {
      return <ItemPromotion key={`promotion ${index}`} promotion={promotion} />;
    });
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <Link to="/event">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Tin khuyến mãi
            </p>
            </Link>
          </div>
        </div>
        <div className="row">{dataItemPromotion}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promotion: state.reducerMovie.promotion,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDataPromotion: () => {
      dispatch(actFetchDataPromotionRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pro);
