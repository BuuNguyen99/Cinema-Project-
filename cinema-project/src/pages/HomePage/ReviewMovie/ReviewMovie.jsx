import React, { Component } from 'react';
import ItemReviewMovie from "./ItemReviewMovie";
class ReviewMovie extends Component {
    render() {
        let linksStyle = {
            color: "black",
            textTransform: "uppercase",
            fontSize: "18px"
          };
        return (
            <div className="container">
                <div className="row pb-2">
                    <div className="col-md-12">
                        <div className="nav-tabs ml-4">
                            <a
                            className="link hover-2"
                            href="#tab_default_1"
                            data-toggle="tab"
                            aria-expanded="true"
                            style={linksStyle}
                            >
                            Giải đáp
                            </a>
                        </div>
                    </div>
                </div>
                <ItemReviewMovie/>
            </div>
        );
    }
}

export default ReviewMovie;