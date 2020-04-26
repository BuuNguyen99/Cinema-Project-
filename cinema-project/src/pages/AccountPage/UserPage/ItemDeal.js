import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


class ItemDeal extends Component {
  render() {
    console.log(this.props.myDeal);

    return (
      <>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            {this.props.myDeal.dayTrading}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.tranNumber}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.tickCode}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.room}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.movie}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.numberOfTicks}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.price}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.star}
          </StyledTableCell>
          <StyledTableCell align="right">
            {this.props.myDeal.targets}
          </StyledTableCell>
        </StyledTableRow>
      </>
    );
  }
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default ItemDeal;
