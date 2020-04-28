import React from "react";
import "./HomePage.css";
import CarouselBanner from "./Carousel/CarouselBanner";
import Movies from "./Movies/Movies";
import ReviewMovie from "./ReviewMovie/ReviewMovie";
import Pro from "./Promotion/Pro"
import InforCinema from "./Promotion/InforCinema";


class HomePage extends React.Component {
    render() {
        return (
            <div>
               <CarouselBanner/>
               <Movies/> 
               <ReviewMovie/>
               <Pro/>
               <InforCinema/>
            </div>
        )
    }
}
export default HomePage

