import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ItemTypoSupport from "./ItemTypoSupport";

class ItemSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkColor: false
    };
  }

  handlerChange = () => {
    let Bool = this.state.checkColor === true ? false : true ;
    console.log(Bool);
    
    this.setState({ checkColor: Bool });
  }

  render() {
    let { support } = this.props;
    let DataItemSupport = support.content.map((content, index) => {
      return <ItemTypoSupport key={index} content={content} />;
    });
    let bgColorTrue = {
      backgroundColor: "#f26b38",
      color: "white"
    }
    let bgColorFalse = {
      backgroundColor: "white",
      color: "black"
    }
    return (
      <div>
        <ExpansionPanel className="mt-3">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={this.handlerChange}
            style={this.state.checkColor === true ? bgColorTrue : bgColorFalse }
          >
            <Typography><i className="fas fa-bookmark mr-2 "></i> {support.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{DataItemSupport}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default ItemSupport;
