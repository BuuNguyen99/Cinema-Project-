import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import ShowMovie from '../ShowMovie/ShowMovie';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #ddd'
  },
  indicator: {
    backgroundColor: '#f26b38',
    '&:hover': {
      backgroundColor: '#f26b38',
    }
  },

})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    outline: 'none !important',
    fontSize: '20px',
    fontWeight: theme.typography.fontWeightNormal,
    marginRight: theme.spacing(4),
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      color: '#333333',
      opacity: 1
    },
    indicator: {
      '&:hover': {
        backgroundColor: '#f26b38',
      }
    },
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    color: '#333333',
    backgroundColor: '#ffffff'
  }
}));

function TabControl({ tab1, tab2, data1, data2, path, tabDefault, history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(tabDefault);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(path !== '/') {
      const path = value === 0 ? './coming-soon' : './now-showing';
      history.push(path)
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('tab', value)
  // })

  return (
    <div>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label={tab1} />
          <AntTab label={tab2} />
        </AntTabs>
      </div>

      <TabPanel value={value} index={0}>
        <ShowMovie movies={data1}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowMovie movies={data2}/>
      </TabPanel>
    </div>
  );
}

export default withRouter(TabControl);
