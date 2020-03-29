import React, { Component } from 'react';
import SeatPicker from "react-seat-picker";
import './SeatPickerStyle.css';

class SeatPickers extends Component {
	addSeatCallbackContinousCase = (
			{ row, number, id },
			addCb,
			params,
			removeCb
		) => {
			this.setState(
				{
					loading: true
				},
				async () => {
					if (removeCb) {
						await new Promise(resolve => setTimeout(resolve, 200));
						console.log(
							`Removed seat ${params.number}, row ${params.row}, id ${params.id}`
						);
						removeCb(params.row, params.number);
					}
					await new Promise(resolve => setTimeout(resolve, 200));
					console.log(`Added seat ${number}, row ${row}, id ${id}`);
					const newTooltip = `tooltip for id-${id} added by callback`;
					addCb(row, number, id, newTooltip);
					this.setState({ loading: false });
				}
			);
	};

	removeSeatCallback = ({ row, number, id }, removeCb) => {
			this.setState(
				{
					loading: true
				},
				async () => {
					await new Promise(resolve => setTimeout(resolve, 200));
					console.log(`Removed seat ${number}, row ${row}, id ${id}`);
					// A value of null will reset the tooltip to the original while '' will hide the tooltip
					const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
					removeCb(row, number, newTooltip);
					this.setState({ loading: false });
				}
			);
	};

	addSeatCallback = ({ row, number, id }, addCb) => {
			this.setState(
				{
					loading: true
				},
				async () => {
					await new Promise(resolve => setTimeout(resolve, 200));
					console.log(`Added seat ${number}, row ${row}, id ${id}`);
					const newTooltip = `tooltip for id-${id} added by callback`;
					addCb(row, number, id, newTooltip);
					this.setState({ loading: false });
				}
			);
	};

	render() {
		const rows = [
				[
					{ id: 1, number: 1 },
					{ id: 2, number: 2 },
					null,
					{ id: 3, number: 3, isReserved: true },
					{ id: 4, number: 4 },
					null,
					{ id: 5, number: 5 },
					{ id: 6, number: 6 },
					null,
					{ id: 7, number: 7 },
					{ id: 8, number: 8 },
				],
				[
					{ id: 9, number: 9 },
					{ id: 10, number: 10 },
					null,
					{ id: 11, number: 11, isReserved: true },
					{ id: 12, number: 12 },
					null,
					{ id: 13, number: 13 },
					{ id: 14, number: 14 },
					null,
					{ id: 15, number: 15 },
					{ id: 16, number: 16 },
				],
				[
					{ id: 17, number: 17 },
					{ id: 18, number: 18 },
					null,
					{ id: 19, number: 19, isReserved: true },
					{ id: 20, number: 20 },
					null,
					{ id: 21, number: 21 },
					{ id: 22, number: 22 },
					null,
					{ id: 23, number: 23 },
					{ id: 24, number: 24 },
				],
				[
					{ id: 25, number: 25 },
					{ id: 26, number: 26 },
					null,
					{ id: 27, number: 27, isReserved: true },
					{ id: 28, number: 28 },
					null,
					{ id: 29, number: 29 },
					{ id: 30, number: 30 },
					null,
					{ id: 31, number: 31 },
					{ id: 32, number: 32 },
				],
				[
					{ id: 33, number: 33 },
					{ id: 34, number: 34 },
					null,
					{ id: 35, number: 35, isReserved: true },
					{ id: 36, number: 36 },
					null,
					{ id: 37, number: 37 },
					{ id: 38, number: 38 },
					null,
					{ id: 39, number: 39 },
					{ id: 40, number: 40 },
				],
				[
					{ id: 41, number: 41 },
					{ id: 42, number: 42 },
					null,
					{ id: 43, number: 43, isReserved: true },
					{ id: 44, number: 44 },
					null,
					{ id: 45, number: 45 },
					{ id: 46, number: 46 },
					null,
					{ id: 47, number: 47 },
					{ id: 48, number: 48 },
				],
				[
					{ id: 49, number: 49 },
					{ id: 50, number: 50 },
					null,
					{ id: 51, number: 51, isReserved: true },
					{ id: 52, number: 52 },
					null,
					{ id: 53, number: 53 },
					{ id: 54, number: 54 },
					null,
					{ id: 55, number: 55 },
					{ id: 56, number: 56 },
				],
			];
		return (
				<div className='wrap-seatPicker'>
					<SeatPicker
							addSeatCallback={this.addSeatCallbackContinousCase}
								removeSeatCallback={this.removeSeatCallback}
								rows={rows}
								maxReservableSeats={3}
								alpha
								visible
								//selectedByDefault
								//loading={loading}
								tooltipProps={{ multiline: true }}
								continuous
					/>
			</div>
		);
	}
}

export default SeatPickers;