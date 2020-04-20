import React, { Component } from 'react';
import styles from './SeatPickerStyle';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';
import { chunk } from 'lodash';

class SeatPickers extends Component {
	
	render() {
			let { classes } = this.props;
			let room = {
					id: 'room2',
					name: 'Rap 2',
					numberSeat: 80,
					seatReserved: [34, 35, 67, 68, 90]
			}
			let ArrSeats = [];
			for(let i = 0; i < room.numberSeat; i++) {
				if(room.seatReserved.includes(i + 1)) {
					ArrSeats.push({id: i + 1, number: (i+1)%10, isReversed: true})
				} else {
					ArrSeats.push({id: i + 1, number: (i+1)%10})
				}
			}
			let arrChunk = chunk(ArrSeats, 10);
			
			// var btnClass = classNames('btn', this.props.className, {
			// 	'btn-pressed': this.state.isPressed,
			// 	'btn-over': !this.state.isPressed && this.state.isHovered
			// });
			return (
				<div className={classes.wrapSeat}>
					<table className={classes.table}>
					{
						arrChunk.map((arrItem, index) => (
							<tr>
								<td className='pr-3'>{String.fromCharCode(index + 65)}</td>
							{
								arrItem.map((item) => {
								console.log('item:', item.number)
									return <td key={item.id} className={classes.seat}>{item.number}</td>
								})
							}
						</tr>
						))
					}
					</table>
				</div>
			);
	}
}
const mapStateToProps = state => {
    return {
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    };
  };
  
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default compose(withStyles(styles), withConnect)(SeatPickers);