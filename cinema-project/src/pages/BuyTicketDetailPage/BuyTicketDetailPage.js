import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  actFetchDataFoodRequest,
  actFetchDataTicketRequest
} from '../../actions/action';
import Table from '../../components/Table/Table';
import styles from './BuyTicketDetailStyle';
import SeatPickers from '../../components/SeatPicker/SeatPicker';
class BuyTicketDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketArr: [],
      foodArr: [],
      onNextPage: false
    };
  }

  componentDidMount() {
    this.props.fetchDataTicket();
    this.props.fetchDataFood();
  }

  countAllTotalTicket = (obj, indexTicket) => {
    let newTicket = this.state.ticketArr;
    newTicket[indexTicket] = obj;
    this.setState({
      ticketArr: newTicket
    });
  };

  countAllTotalFood = (obj, indexFood) => {
    let newFood = this.state.foodArr;
    newFood[indexFood] = obj;
    this.setState({
      foodArr: newFood
    });
  };

  countTotal = arr => {
    let totalArr = arr.map(item => item.total);
    return totalArr.reduce((a, b) => a + b, 0);
  };

  handleOnNextPage = (totalBoth) => {
    if(totalBoth > 0) {
      this.setState((prevState) => ({
        onNextPage: !prevState.onNextPage
      }))
    } else {
      alert('Vui long chon so luong ve!')
    }
  }

  render() {
    let { choosing, classes, tickets, foodCombo } = this.props;
    if (Object.keys(choosing).length !== 0) {
      localStorage.setItem('choosing', JSON.stringify(choosing));
    } else {
      choosing = JSON.parse(localStorage.getItem('choosing'));
    }
    const { movie, date, time } = choosing;
    const { ticketArr, foodArr, onNextPage } = this.state;
    let totalAllTicket = this.countTotal(ticketArr);
    let totalAllFood = this.countTotal(foodArr);
    let totalBoth = totalAllFood + totalAllTicket
    let title = onNextPage ? 'Chọn ghế' : 'Chọn vé/ thức ăn'
    return (
      <div className="container-fluid my-4">
        <div className="row no-gutters">
          <div className={`${classes.chooseMovie} col-md-8 p-2`}>
            <div className={`text-uppercase ${classes.header}`}>{title}</div>
            {!onNextPage && <div className={classes.body}>
                {
                  <Table
                    type="Loại vé"
                    arrData={tickets}
                    countAllTotal={(obj, index) =>
                      this.countAllTotalTicket(obj, index)
                    }
                    totalAll={totalAllTicket}
                  />
                }
                {
                  <Table
                    type="Combo"
                    arrData={foodCombo}
                    countAllTotal={(obj, index) =>
                      this.countAllTotalFood(obj, index)
                    }
                    totalAll={totalAllFood}
                  />
                }
              </div>}
            { onNextPage && <div className={classes.body}>
              <div className={`bg-white ${classes.wrap}`}>
                <SeatPickers className='w-100'/>
              </div>
              </div> }
          </div>
          <div className={`col-md-4`}>
            <div className={`${classes.movie} ml-3`}>
              <img className={classes.imageMovie} src={movie.image}></img>
              <div className="text-uppercase text-center font-weight-bold pt-1">
                {movie.name}
              </div>
              <div className="p-2">
                <strong>Rạp: </strong>RẠP 3
              </div>{' '}
              <hr className="m-0" />
              <div className="p-2">
                <strong>Suất chiếu: </strong>
                {time} | {date.name}
              </div>
              <hr className="m-0" />
              <div className="p-2">
                <strong>Ghế: </strong>
              </div>
              <hr className="m-0" />
              <h5 className={`${classes.total} p-2`}>
                Tổng: {totalBoth.toLocaleString()} VNĐ
              </h5>
              {!onNextPage && <button onClick={() => this.handleOnNextPage(totalBoth)} className={classes.button}>
                Tiếp tục <i className="pl-2 fas fa-arrow-right"></i>
              </button> }
              { onNextPage && <button onClick={() => this.handleOnNextPage(totalBoth)} className={classes.button}>
                Quay Lại <i className="pl-2 fas fa-arrow-left"></i>
              </button> }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    choosing: state.reducerMovie.choosing,
    tickets: state.reducerTickets.tickets,
    foodCombo: state.reducerFoods.foodCombo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataTicket: () => dispatch(actFetchDataTicketRequest()),
    fetchDataFood: () => dispatch(actFetchDataFoodRequest())
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(BuyTicketDetailPage);
