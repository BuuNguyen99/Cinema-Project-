import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import "./AdminPage.css";
import { connect } from "react-redux";
import ManageUsers from "./ManageUsers";
import ManageMovies from "./ManageMovies";
import ManageRevenue from "./ManageRevenue";


class AdminPage extends React.Component {
  
  render() {

    return (
      <div className="container">
        <FullWidthTabs />
      </div>
    );
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function FullWidthTabs(props) { 
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  let color = {
    color: "#b9b9b9",
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <span>
            <Link to="/" href="#" title="trang chủ " className="links">
              Trang Chủ
            </Link>
            <span style={color}> > </span>
            <Link to="/" href="#" title="thành viên" className="links">
              Thành Viên
            </Link>
            <span style={color}> ></span>
            <span> Admin</span>
          </span>
        </div>
      </div>
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Quản lý user" {...a11yProps(0)} />
            <Tab label="Quản lý phim" {...a11yProps(1)} />
            <Tab label="quản lý doanh thu" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ManageUsers/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ManageMovies/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ManageRevenue/>
            </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default AdminPage;

