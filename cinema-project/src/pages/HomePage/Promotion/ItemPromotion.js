import React, { Component } from "react";
import './ItemPromotion.css';
import { Link } from 'react-router-dom';
class ItemPromotion extends Component {
  render() {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="box1">
                <img src= {this.props.promotion.imagePro} alt=""/>
                <div className="box-content">
                  <Link to={`/promotion/${this.props.promotion.links}`}>
                <button type="button" class="btn btn-outline-warning">CHI TIẾT</button>
                </Link>
                </div>
            </div>
    </div>
    )
  }
}

export default ItemPromotion;
