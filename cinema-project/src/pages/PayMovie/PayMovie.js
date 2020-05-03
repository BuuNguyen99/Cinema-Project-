import { Card } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import PropTypes from "prop-types";
import { actCreateBookingRequest } from "../../actions/action";
import styles from "./PayMovieStyle";
import visa from "../../img/visa.png";
import ATM from "../../img/ATM.png";
import momo from "../../img/momo.png";
import zalo from "../../img/zalopay.png";
import PopupComfirm from '../../components/Popup/Popup';

const PropsType = {
	fetchDataBookingById: PropTypes.func,
};

const PayMovie = ({ classes, createBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  let infoMovie = JSON.parse(localStorage.getItem("booking"));
	console.log("info:", infoMovie);
  
  const confirmInform = () => {
	createBooking(infoMovie);
      setIsOpen(!isOpen);
  };
  let total = infoMovie.foodPrice + infoMovie.ticketPrice

	return (
		<div className='container'>
			<Alert severity='success' color='info' className={`mt-3 ${classes.info}`}>
				Thông tin phim
			</Alert>
			{Object.keys(infoMovie).length > 0 && (
				<Card className={`p-3 my-3 ${classes.Card}`}>
					<div>
						<span className='font-weight-bold'>Phim: </span>
						<span>{infoMovie.nameMovie}</span>
					</div>
					<div>
						<span className='font-weight-bold'>Suất chiếu: </span>
						<span>{`${infoMovie.date} - ${infoMovie.time}`}</span>
					</div>
					<div>
						<span className='font-weight-bold'>Phòng chiếu: </span>
						<span>{`${infoMovie.room}`}</span>
					</div>
					<div>
						<span className='font-weight-bold'>Ghế: </span>
						<span>
							{infoMovie.seat.map((item, index) => (
								<span key={index}>{`${item} `}</span>
							))}
						</span>
					</div>
					<div>
						<span className='font-weight-bold'>Mã vé: </span>
						<span>{`${infoMovie.tickCode}`}</span>
					</div>
					<div>
						<span className='font-weight-bold'>Giá vé: </span>
						<span>{`${infoMovie.ticketPrice.toLocaleString()}`}</span>
					</div>
					
					{infoMovie.foodPrice > 0 && (
						<div>
							<span className='font-weight-bold'>Giá combo: </span>
							<span>{`${infoMovie.foodPrice.toLocaleString()}`}</span>
						</div>
					)}
					<div>
						<span className='font-weight-bold'>Tổng thanh toán: </span>
						<span>{`${(
							infoMovie.ticketPrice + infoMovie.foodPrice
						).toLocaleString()}`}</span>
					</div>
				</Card>
			)}
			<Alert severity='success' color='info' className={`mt-3 ${classes.info}`}>
				Thanh toán
			</Alert>
			<Card onClick={() => setIsOpen(!isOpen)}
				className={`p-3 my-3 d-flex align-items-center ${classes.cardItem}`}>
				<span className='col-1'>
					<img src={visa} style={{ height: "20px", width: "auto" }} />
				</span>
				<span className='ml-2'>Thẻ thanh toán quốc tế</span>
			</Card>
			<Card onClick={() => setIsOpen(!isOpen)}
				className={`p-3 my-3 d-flex align-items-center ${classes.cardItem}`}>
				<span className='col-1'>
					<img src={ATM} style={{ height: "20px", width: "auto" }} />
				</span>
				<span className='ml-2'>Thẻ ATM</span>
			</Card>
			<Card onClick={() => setIsOpen(!isOpen)}
				className={`p-3 my-3 d-flex align-items-center ${classes.cardItem}`}>
				<span className='col-1'>
					<img src={momo} style={{ height: "20px", width: "auto" }} />
				</span>
				<span className='ml-2'>Ví momo</span>
			</Card>
			<Card onClick={() => setIsOpen(!isOpen)}
				className={`p-3 my-3 d-flex align-items-center ${classes.cardItem}`}>
				<span className='col-1'>
					<img src={zalo} style={{ height: "20px", width: "auto" }} />
				</span>
				<span className='ml-2'>Zalopay</span>
      </Card>
      <PopupComfirm open={isOpen} onClose={() => setIsOpen(!isOpen)} onComfirm={confirmInform} total={total}/>
		</div>
	);
};

PayMovie.propTypes = PropsType;

const mapDispatchToProps = (dispatch) => {
	return {
		createBooking: (data) => dispatch(actCreateBookingRequest(data))
	};
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(PayMovie);
