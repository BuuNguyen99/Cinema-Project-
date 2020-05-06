import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import ColumnBlock from "../../components/ColumnBlock/ColumnBlock";
import styles from "./BuyTicketStyle";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
	actFetchDataMovieRequest,
	actFetchShowtimesRequest,
	actReceiveMovieChoosing,
	actFetchDataAccountRequest,
} from "../../actions/action";
import { Box } from "@material-ui/core";
import history from "../../commons/history";

class BuyTicketPage extends Component {
	constructor() {
		super();
		this.state = {
			timeOfMovie: [],
			isShow: false,
			active: "",
		};
	}

	componentDidMount() {
		this.props.fetchAllDataMovie();
		this.props.fetchShowTimes();
		this.props.fetchDataAccount();
	}

	handleOnChooseMovie = (mv) => {
		//let listTime = []
		// showtimes.forEach(item => {
		//   let movie = item.movieIds.find(movie => movie.id === mv.id)
		//   if (movie !== undefined) listTime.push({...item, session: movie.session})
		// });
		// console.log('listTime:', listTime)
		console.log("mv:", mv);
		this.setState({
			timeOfMovie: mv.date,
			isShow: true,
			active: mv,
		});
	};

	showMovieToChoose = (arr, classes, showtimes) => {
		return arr.map((item, index) => {
			let active = this.state.active.id === item.id ? classes.active : "";
			return (
				<div
					key={index}
					className={`${classes.block}`}
					onClick={() => {
						this.handleOnChooseMovie(item);
					}}>
					<div className={`${classes.link} ${active} row no-gutters p-3`}>
						<span className='col-3'>
							<img className={classes.img} src={item.image} />
						</span>
						<p className={`${classes.title} col-9 pl-4`}>{item.name}</p>
					</div>
				</div>
			);
		});
	};

	handleOnChooseSession = (item, session, account) => {
		if (account && account.length > 0) {
			const movie = this.state.active;
			this.props.receiveMovieChoosing(movie, item, session, account[0].id);
			//const { history } = this.props
			const slug = movie.slug;
			history.push(`/buy-ticket-detail/${slug}`);
		} else {
			alert("Vui long dang nhap!");
		}
	};

	showTimeOfMovie = (arr, classes, account) => {
		return arr.map((item, index) => {
			const listSession = item.frametime.map((obj) => obj.time);
			return (
				<div key={index} className={`${classes.block} p-4`}>
					<div>{item.datemovie}</div>
					<div className='d-flex flex-wrap'>
						{listSession.map((session, index) => {
							return (
								<Box
									key={index}
									py={1}
									px={2}
									className={classes.session}
									onClick={() =>
										this.handleOnChooseSession(item, session, account)
									}>
									{session}
								</Box>
							);
						})}
					</div>
				</div>
			);
		});
	};

  isMovieShowing = (date) => {
    const now = new Date().setHours(0, 0, 0, 0);
    if (Date.parse(date) <= now) return true;
    else return false;
  };

	render() {
		const { classes, movies, showtimes, account } = this.props;
		const { timeOfMovie, isShow } = this.state;
		let movieShowing = movies.filter((item) =>
			this.isMovieShowing(item.premiereDate)
		);
		console.log("movieShowing:", movieShowing);
		// let movieShowing = [];
		// if(Object.keys(movies).length > 0) {
		//   movieShowing = movies.movieShowing
		// }

		return (
			<div className='container my-4'>
				<div className='row'>
					<ColumnBlock title='Chọn phim'>
						{this.showMovieToChoose(movieShowing, classes)}
					</ColumnBlock>

					<ColumnBlock title='Chọn suất'>
						{isShow && this.showTimeOfMovie(timeOfMovie, classes, account)}
					</ColumnBlock>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.reducerMovie.movie,
		//movieShowing: state.reducerMovie.movieShowing,
		showtimes: state.reducerShowtimes.showtime,
		account: state.reducerUsers.account,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllDataMovie: () => {
			dispatch(actFetchDataMovieRequest());
		},
		fetchShowTimes: () => {
			dispatch(actFetchShowtimesRequest());
		},
		receiveMovieChoosing: (movie, date, time, idUser) => {
			dispatch(actReceiveMovieChoosing(movie, date, time, idUser));
		},
		fetchDataAccount: () => {
			dispatch(actFetchDataAccountRequest());
		},
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(BuyTicketPage);
