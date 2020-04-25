import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './BuyTicketDetailStyle';

class BuyTicketDetailPage extends Component {
  render() {
    const { choosing } = this.props;
    console.log('choosing:', choosing)
    return (
        <div className="container my-4">
          <div className='row'> 
            <div className='col-md-8'>
              
            </div>
            <div className='col-md-4'>
              abc
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosing: state.reducerMovie.choosing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withStyles(styles), withConnect)(BuyTicketDetailPage);
