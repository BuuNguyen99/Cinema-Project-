import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ManageUsers from "./ManageUsers/ManageUsers";
import ManageMovies from "./ManageMovies";
import ManageRevenue from "./ManageRevenue/ManageRevenue";
import "./AdminPage.css";
import routeAdmin from "./ManageUsers/routeAdmin";
import { Switch, Route, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./../../constants/themes";
import history from "./../../commons/history";
// import {Row , Col , NavItem , Nav} from 'react-bootstrap';
class AdminPage extends React.Component {
  render() {
    return (
      <div className="container-fluid my-4">
        <VerticalTabs />
      </div>
    );
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    marginTop: "10px",
  },
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch> {result} </Switch>;
  };
  let border = {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    
  }
  return (
    <div className={classes.root}>
      <div className="row">
        <div className="col-md-3 col-lg-2" style = { border }>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Quản Lý Users" {...a11yProps(0)} />
            <Tab label="Quản Lý Phim" {...a11yProps(1)} />
            <Tab label="Quản Lý Doanh Thu" {...a11yProps(2)} />
          </Tabs>
        </div>
        <div className="col-md-9 col-lg-10">
          <TabPanel value={value} index={0}>
            <Router history={history}>
              <ThemeProvider theme={theme}>
                {showContentMenus(routeAdmin)}
              </ThemeProvider>
            </Router>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ManageMovies />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ManageRevenue />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
