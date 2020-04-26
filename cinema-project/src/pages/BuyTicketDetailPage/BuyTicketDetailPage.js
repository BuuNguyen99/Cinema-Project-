import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	actFetchDataFoodRequest,
	actFetchDataTicketRequest,
	actCreateBookingRequest,
} from "../../actions/action";
import Table from "../../components/Table/Table";
import styles from "./BuyTicketDetailStyle";
import SeatPickers from "../../components/SeatPicker/SeatPickers";
class BuyTicketDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ticketArr: [],
			foodArr: [],
			onNextPage: false,
			arrSeatChoosing: [],
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
			ticketArr: newTicket,
		});
	};

	countAllTotalFood = (obj, indexFood) => {
		let newFood = this.state.foodArr;
		newFood[indexFood] = obj;
		this.setState({
			foodArr: newFood,
		});
	};

	countTotal = (arr) => {
		let totalArr = arr.map((item) => item.total * item.price);
		return totalArr.reduce((a, b) => a + b, 0);
	};

	handleOnNextPage = (totalAllTicket) => {
		if (totalAllTicket > 0) {
			this.setState((prevState) => ({
				onNextPage: !prevState.onNextPage,
			}));
		} else {
			alert("Vui long chon so luong ve!");
		}
	};

	handleOnPreviouPage = () => {
		this.setState((prevState) => ({
			onNextPage: !prevState.onNextPage,
			ticketArr: [],
			foodArr: [],
		}));
	};

	showNameSeatArr = (arr) => {
		const nameSeat = arr.map((item) => {
			return `${String.fromCharCode(item / 10 + 65)}${item % 10}`;
		});
		console.log("nameSeat:", nameSeat);
		this.setState({
			arrSeatChoosing: nameSeat,
		});
	};

	handleSubmit = (choosing, roomId, amountTicket) => {
		if (this.state.arrSeatChoosing.length === amountTicket) {
			let data = {
				idUser: choosing.idUser,
				idRoom: roomId,
				idMovie: choosing.movie.id,
				idDate: choosing.date.id,
				time: choosing.time,
				seat: this.state.arrSeatChoosing,
			};
			this.props.createBooking(data);
		} else if (this.state.arrSeatChoosing.length === 0) {
			alert("Vui lòng chọn ghế!");
		} else {
			alert("Vui lòng chọn đủ số ghế!");
		}
	};
	render() {
		let room = {
			id: "room2",
			name: "Rap 2",
			numberSeat: 80,
			seatReserved: [34, 35, 67, 68, 78],
		};
		let { choosing, classes, tickets, foodCombo } = this.props;
		console.log("choosing:", choosing);
		if (Object.keys(choosing).length !== 0) {
			localStorage.setItem("choosing", JSON.stringify(choosing));
		} else {
			choosing = JSON.parse(localStorage.getItem("choosing"));
		}
		const { movie, date, time } = choosing;
		const { ticketArr, foodArr, onNextPage } = this.state;
		let totalAllTicket = this.countTotal(ticketArr);
		let totalAllFood = this.countTotal(foodArr);
		let totalBoth = totalAllFood + totalAllTicket;
		let title = onNextPage ? "Chọn ghế" : "Chọn vé/ thức ăn";
		let amountTicket = ticketArr
			.map((item) => item.total)
			.reduce((a, b) => a + b, 0);

		return (
			<div className='container-fluid my-4'>
				<div className='row no-gutters'>
					<div className={`${classes.chooseMovie} col-md-8 p-2`}>
						<div className={`text-uppercase ${classes.header}`}>{title}</div>
						{!onNextPage && (
							<div className={classes.body}>
								{
									<Table
										type='Loại vé'
										arrData={tickets}
										countAllTotal={(obj, index) =>
											this.countAllTotalTicket(obj, index)
										}
										totalAll={totalAllTicket}
									/>
								}
								{
									<Table
										type='Combo'
										arrData={foodCombo}
										countAllTotal={(obj, index) =>
											this.countAllTotalFood(obj, index)
										}
										totalAll={totalAllFood}
									/>
								}
							</div>
						)}
						{onNextPage && (
							<div className={classes.body}>
								<div className={`bg-white ${classes.wrap}`}>
									<div className={classes.wrapScreen}>
										<div className={classes.screen}>Screen show</div>
									</div>
									<SeatPickers
										roomDetail={room}
										amountTicket={amountTicket}
										showNameSeat={(arr) => this.showNameSeatArr(arr)}
										className='w-100'
									/>
									<div className='py-4 w-25 m-auto'>
										<div className='d-flex align-items-center'>
											<span
												className={`${classes.cell} ${classes.reversed}`}></span>
											<span className='mr-4'>Ghế đã được đặt</span>
										</div>
										<div className='mt-3 d-flex align-items-center'>
											<span
												className={`${classes.cell} ${classes.canChoose}`}></span>
											<span className='mr-4'>Ghế có thể chọn</span>
										</div>
										<div className='mt-3 d-flex align-items-center'>
											<span
												className={`${classes.cell} ${classes.choosing}`}></span>
											<span className='mr-4'>Ghế đang chọn</span>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className={`col-md-4`}>
						<div className={`${classes.movie} ml-3`}>
							<img className={classes.imageMovie} src={movie.image}></img>
							<div className='text-uppercase text-center font-weight-bold pt-1'>
								{movie.name}
							</div>
							<div className='p-2'>
								<strong>Rạp: </strong>RẠP 3
							</div>{" "}
							<hr className='m-0' />
							<div className='p-2'>
								<strong>Suất chiếu: </strong>
								{time} | {date.datemovie}
							</div>
							<hr className='m-0' />
							<div className='p-2'>
								<strong>Ghế: </strong>
								{this.state.arrSeatChoosing.map((item) => (
									<span>{`${item} `}</span>
								))}
							</div>
							<span>
								<hr className='m-0' />
								<div className='p-2'>
									<strong>Tổng giá vé: </strong>
									<span>{totalAllTicket.toLocaleString()}</span>
								</div>
							</span>
							<span>
								<hr className='m-0' />
								<div className='p-2'>
									<strong>Tổng giá combo: </strong>
									<span>{totalAllFood.toLocaleString()}</span>
								</div>
							</span>
							<hr className='m-0' />
							<h5 className={`${classes.total} p-2`}>
								Tổng: {totalBoth.toLocaleString()} VNĐ
							</h5>
							{!onNextPage && (
								<button
									onClick={() => this.handleOnNextPage(totalAllTicket)}
									className={classes.button}>
									Tiếp tục <i className='pl-2 fas fa-arrow-right'></i>
								</button>
							)}
							{onNextPage && (
								<span className='d-flex justify-content-center'>
									<button
										onClick={() => this.handleOnPreviouPage()}
										className={`${classes.button} ${classes.buttonNomargin}`}>
										Quay Lại <i className='pl-2 fas fa-arrow-left'></i>
									</button>
									<button
										onClick={() =>
											this.handleSubmit(choosing, room.id, amountTicket)
										}
										className={`${classes.button} ${classes.buttonNomargin} ml-2`}>
										Đặt vé <i className='pl-2 fas fa-arrow-right'></i>
									</button>
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		choosing: state.reducerMovie.choosing,
		tickets: state.reducerTickets.tickets,
		foodCombo: state.reducerFoods.foodCombo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDataTicket: () => dispatch(actFetchDataTicketRequest()),
		fetchDataFood: () => dispatch(actFetchDataFoodRequest()),
		createBooking: (data) => dispatch(actCreateBookingRequest(data)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(BuyTicketDetailPage);
