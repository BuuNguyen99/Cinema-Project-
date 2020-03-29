import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ItemTypoSupport extends React.Component {
  render() {
    let { content } = this.props;    
    return (
      <div>
        <Typography className="mb-2"><i className="fab fa-ethereum ml-2 mr-3" ></i> {content}</Typography>
      </div>
    );
  }
}

export default ItemTypoSupport;
