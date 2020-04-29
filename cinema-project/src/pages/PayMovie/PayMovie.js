import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import styles from "./PayMovieStyle";

class PayMovie extends Component {
	render() {
		let { classes } = this.props;
		return (
			<div className='container'>
				<Alert severity='success' color='info' className={`mt-3 ${classes.info}`}>
                    Thông tin phim
				</Alert>
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(PayMovie);
