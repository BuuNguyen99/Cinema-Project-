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
import { actFetchDataBookingMovieRequest } from '../../../actions/action';
import { connect } from "react-redux";

class Deal extends Component {

  componentDidMount() {
    this.props.onFetchDataBookingMovie();
  }

  render() {
    let {account, bookingMovie } = this.props;
    if (Object.keys(account).length !== 0) {
			localStorage.setItem("account", JSON.stringify(account));
		} else {
      account = JSON.parse(localStorage.getItem("account"));
    }
      localStorage.setItem("bookingMovie", JSON.stringify(bookingMovie));
      bookingMovie = JSON.parse(localStorage.getItem("bookingMovie"));
    return (
        <div className="container my-4">
          <CustomizedTables account={account} bookingMovie={bookingMovie}/>
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
  let { account, bookingMovie } = props;
  let data = [];
  let arrayBooking = [];
  console.log(bookingMovie);
  data = bookingMovie;

  for (let i = 0 ; i < data.length ; i++) {
    
    if ( account.id === data[i].idUser) {
      arrayBooking.push(data[i]);
    }
  }

  let dataItemDeal = arrayBooking.map((myDeal, index) => {
    return <ItemDeal key={`movie ${index}`} myDeal={myDeal} />;
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ngày</StyledTableCell>
            <StyledTableCell align="center">Thời Gian</StyledTableCell>
            <StyledTableCell align="center">Mã Vé</StyledTableCell>
            <StyledTableCell align="center">Rạp</StyledTableCell>
            <StyledTableCell align="center">Phim</StyledTableCell>
            <StyledTableCell align="center">Ghế</StyledTableCell>
            <StyledTableCell align="center">Giá trị</StyledTableCell>
            <StyledTableCell align="center">Giá Combo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {dataItemDeal}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



const mapStateToProps = state => {
  return {
    bookingMovie: state.reducerMovie.bookingMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDataBookingMovie: () => {
      dispatch(actFetchDataBookingMovieRequest());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Deal);