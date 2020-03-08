import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OpenVideo from "./pages/HomePage/Movies/OpenVideo";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="Container">
          <Header />
          {this.showContentMenus(routes)}
        </div>
        <Footer/>
      </Router>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        console.log('main:', route.main)
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component= {route.main}
          />
        );
      });
    }
    console.log('result:', result)
    return <Switch> {result} </Switch>;
  };
}

export default App