import React from "react";
import "./HomePage.css";
import CarouselBanner from "./Carousel/CarouselBanner";
import Movies from "./Movies/Movies";
import Promotion from "./Promotion/Promotion"
class HomePage extends React.Component {
    render() {
        return (
            <div>
               <CarouselBanner/>
               <Movies/> 
               <Promotion/>
            </div>
        )
    }
}
export default HomePage

