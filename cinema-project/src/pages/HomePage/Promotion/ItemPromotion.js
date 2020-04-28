import React, { Component } from "react";
import './ItemPromotion.css'
class ItemPromotion extends Component {
  render() {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="box1">
                <img src= {this.props.promotion.imagePro} alt=""/>
                <div className="box-content">
                <button type="button" class="btn btn-outline-warning">CHI TIẾT</button>
                </div>
            </div>
    </div>
    )
  }
}

export default ItemPromotion;
