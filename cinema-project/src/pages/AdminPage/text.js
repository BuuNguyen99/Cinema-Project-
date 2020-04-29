import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quản Lý Users</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="row">
            <div className="col-md-12 my-2">
            <Typography>
                Thêm Users
          </Typography>
            </div>
            <div className="col-md-12 my-2">
            <Typography>
              List Users
          </Typography>
            </div>
            <div className="col-md-12 my-3">
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}