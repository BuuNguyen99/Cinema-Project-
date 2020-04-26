import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ItemDeal from './ItemDeal';


class Deal extends Component {
  render() {
    return (
        <div className="container my-4">
          <CustomizedTables account= {this.props.account}/>
        </div>
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


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

  

 function CustomizedTables(props) {
  const classes = useStyles();
  console.log('props:', props)
  let dataItemDeal = props.account.map((myDeal, index) => {
    return <ItemDeal key={`movie ${index}`} myDeal={myDeal} />;
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ngày</StyledTableCell>
            <StyledTableCell align="right">Số giao dịch</StyledTableCell>
            <StyledTableCell align="right">Mã Vé</StyledTableCell>
            <StyledTableCell align="right">Rạp</StyledTableCell>
            <StyledTableCell align="right">Phim</StyledTableCell>
            <StyledTableCell align="right">Số lượng</StyledTableCell>
            <StyledTableCell align="right">Giá trị</StyledTableCell>
            <StyledTableCell align="right">Sao tích lũy</StyledTableCell>
            <StyledTableCell align="right">Điểm đã dùng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {dataItemDeal}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Deal;