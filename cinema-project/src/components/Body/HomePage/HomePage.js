import React from "react";
import "./styleHomePage.css";
import CarouselBanner from "./Carousel/CarouselBanner";
import Movies from "./Movies/Movies";

class HomePage extends React.Component {
    render() {
        return (
            <div>
               <CarouselBanner/>
               <Movies/> 
            </div>
        )
    }
}
export default HomePage

