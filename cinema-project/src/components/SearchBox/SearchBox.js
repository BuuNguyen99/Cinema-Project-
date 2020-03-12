import React, { Component } from 'react';
import { connect } from "react-redux";
import getSearchMovie from '../../utils/ApiCall';
// import { actSearchMovieRequest } from '../../actions/action'
import {Redirect, Route} from 'react-router-dom'

class SearchBox extends Component {
    constructor() {
        super()
        this.state = {
            keyword: ''
        }
    }
    onHandleOnEnter = (e) => {
        const {keyword} = this.state;
        console.log('key:', keyword)
        if(e.keyCode === 13) {
            this.props.searchMovie(keyword);
        }
        
    }
    handleOnChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    render() {
        const {styleSearch} = this.props
        return (
            <div className={`${styleSearch} find-header`}>
                <input
                    className="form-control mx-auto"
                    placeholder="Tìm tên phim, diễn viên..."
                    value = {this.state.search}
                    onChange = {this.handleOnChange}
                    onKeyUp={(e) => this.onHandleOnEnter(e)}/>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         searchMovie: (keyword) => {
//             dispatch(actSearchMovieRequest(keyword))
//         }
//     }
// }

export default SearchBox;