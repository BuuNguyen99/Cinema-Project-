import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import { Switch, Route, Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/themes'
import history from './commons/history'

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
          <ThemeProvider theme={theme}>
          <div className="Container">
            <Header />
            {this.showContentMenus(routes)}
          </div>
          <Footer/>
        </ThemeProvider>
      </Router>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
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
    return <Switch> {result} </Switch>;
  };
}

export default App