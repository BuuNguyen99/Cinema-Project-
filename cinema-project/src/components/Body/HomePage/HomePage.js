import React from "react";
import "./HomePage.css";
import CarouselBanner from "./Carousel/CarouselBanner";
import Movies from "./Movies/Movies";
import Promotion from "./Promotion/Promotion"
import ReviewMovie from './ReviewMovie/ReviewMovie'

class HomePage extends React.Component {
    render() {
        return (
            <div>
               <CarouselBanner/>
               <Movies/> 
               <ReviewMovie/>
               <Promotion/>
            </div>
        )
    }
}
export default HomePage

