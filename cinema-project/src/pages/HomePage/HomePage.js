import React from "react";
import "./HomePage.css";
import CarouselBanner from "./Carousel/CarouselBanner";
import Movies from "./Movies/Movies";
import ReviewMovie from "./ReviewMovie/ReviewMovie";
import Pro from "./Promotion/Pro"


class HomePage extends React.Component {
    render() {
        return (
            <div>
               <CarouselBanner/>
               <Movies/> 
               <ReviewMovie/>
               <Pro/>
            </div>
        )
    }
}
export default HomePage

