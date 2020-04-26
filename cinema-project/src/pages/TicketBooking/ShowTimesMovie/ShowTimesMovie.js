import React, { Component } from "react";
import "./ShowTimesMovie.css";
import { connect } from "react-redux";
import { actReceiveMovieChoosing } from "../../../actions/action";
import history from "../../../commons/history";

class ShowTimesMovie extends Component {
	handleOnChooseSession = (item, session, account, movie) => {
		if (account && account.length > 0) {
			this.props.receiveMovieChoosing(movie, item, session, account[0].id);
			const slug = movie.slug;
			history.push(`/buy-ticket-detail/${slug}`);
		} else {
			alert("Vui long dang nhap!");
		}
	};

	render() {
		let { date, account, itemMovieInfo } = this.props;
		let dataShowtime = date.frametime.map((frametime, index) => {
			let session = frametime.time;
			return (
				<div
					className='col-3 col-md-2 col-lg-2 session'
					onClick={() =>
						this.handleOnChooseSession(date, session, account, itemMovieInfo)
					}>
					{session}
				</div>
			);
		});
		return (
			<div className='row mt-5'>
				<div className='col-md-10 col-lg-10'>
					<div className='detail-row'>
						<div className='detail-title-showtime'>
							<p className='title-showtime'>{this.props.date.datemovie}</p>
						</div>
						<div className='detail-showtime '>
							<div className='detail-showtime-item row d-flex justify-content-center'>
								{dataShowtime}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		receiveMovieChoosing: (movie, date, time, idUser) => {
			dispatch(actReceiveMovieChoosing(movie, date, time, idUser));
		},
	};
};

export default connect(null, mapDispatchToProps)(ShowTimesMovie);
