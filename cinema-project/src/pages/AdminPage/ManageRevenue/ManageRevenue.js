import React, { Component } from "react";
import ChartMonth from "./ChartMonth";
import { connect } from "react-redux";
import { actFetchDataBookingMovieRequest } from "../../../actions/action";
import moment from "moment";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
class ManageRevenue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkMonth: "0",
			total: 0,
		};
	}
	componentDidMount() {
		this.props.onFetchBookingMovie();
	}

	onChangeSelect = (e) => {
		let Data = JSON.parse(localStorage.getItem("Data"));
		for (let z = 0; z < Data.length; z++) {
			if (e.target.value == Data[z].id) {
				this.setState({
					checkMonth: e.target.value,
					total: Data[z].total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
				});
			}
		}
	};
	render() {
		let { bookingMovie } = this.props;
		console.log("bookingMovie:", bookingMovie);

		if (Object.keys(bookingMovie).length !== 0) {
			localStorage.setItem("bookingMovie", JSON.stringify(bookingMovie));
		} else {
			bookingMovie = JSON.parse(localStorage.getItem("bookingMovie"));
		}
		let Data = [
			{
				id: 0,
				name: "Tháng 1",
				total: 0,
			},
			{
				id: 1,
				name: "Tháng 2",
				total: 0,
			},
			{
				id: 2,
				name: "Tháng 3",
				total: 0,
			},
			{
				id: 3,
				name: "Tháng 4",
				total: 0,
			},
			{
				id: 4,
				name: "Tháng 5",
				total: 0,
			},
			{
				id: 5,
				name: "Tháng 6",
				total: 0,
			},
			{
				id: 6,
				name: "Tháng 7",
				total: 0,
			},
			{
				id: 7,
				name: "Tháng 8",
				total: 0,
			},
			{
				id: 8,
				name: "Tháng 9",
				total: 0,
			},
			{
				id: 9,
				name: "Tháng 10",
				total: 0,
			},
			{
				id: 10,
				name: "Tháng 11",
				total: 0,
			},
			{
				id: 11,
				name: "Tháng 12",
				total: 0,
			},
			{
				id: 12,
				total: 0,
			},
		];
		if (bookingMovie) {
			for (let i = 0; i < bookingMovie.length - 1; i++) {
				var date = bookingMovie[i].date;
				var birth = moment(date).format("MM/DD/YYYY");
				var getMonth = new Date(birth);
				var month = getMonth.getMonth();
				Data[12].total +=
					bookingMovie[i].ticketPrice + bookingMovie[i].foodPrice;
				for (let j = 0; j < Data.length; j++) {
					if (month === Data[j].id) {
						Data[j].total +=
							bookingMovie[i].ticketPrice + bookingMovie[i].foodPrice;
					}
				}
			}
		}

		if (Object.keys(Data).length !== 0) {
			localStorage.setItem("Data", JSON.stringify(Data));
		} else {
			Data = JSON.parse(localStorage.getItem("Data"));
		}

		let size = {
			width: "150px",
		};
		let margin = {
			marginLeft: "26px",
		};
		return (
			<div className='container my-4'>
				<div className='row mb-3'>
					<div className='col-md-12'>
						<Card>
							<Card.Body>
								<Card.Title>Doanh Thu Của Từng Tháng:</Card.Title>
								<Card.Text>
									<div className='row mb-3'>
										<div className='col-md-5'>
											<div class='form-group' style={size}>
												<select
													class='form-control'
													id='exampleFormControlSelect1'
													style={margin}
													value={this.state.checkMonth}
													onChange={this.onChangeSelect}>
													<option value='0'>Tháng 1</option>
													<option value='1'>Tháng 2</option>
													<option value='2'>Tháng 3</option>
													<option value='3'>Tháng 4</option>
													<option value='4'>Tháng 5</option>
													<option value='5'>Tháng 6</option>
													<option value='6'>Tháng 7</option>
													<option value='7'>Tháng 8</option>
													<option value='8'>Tháng 9</option>
													<option value='9'>Tháng 10</option>
													<option value='10'>Tháng 11</option>
													<option value='11'>Tháng 12</option>
													<option value='12'>Tổng 12 Tháng</option>
												</select>
											</div>
										</div>
										<div className='col-md-7'>
											<p className='total'>
												Tổng Số Tiền : {this.state.total}đ
											</p>
										</div>
									</div>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
				<ChartMonth Data={Data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		bookingMovie: state.reducerMovie.bookingMovie,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onFetchBookingMovie: () => {
			dispatch(actFetchDataBookingMovieRequest());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRevenue);
