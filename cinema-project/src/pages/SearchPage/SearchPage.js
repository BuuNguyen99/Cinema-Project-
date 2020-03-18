import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class SearchPage extends Component {
  render() {
    const {listSearch} = this.props; 
    
    let notify = ''
    if(listSearch) {
    notify = listSearch.length > 0 ? `${listSearch.length} kết quả được tìm thấy!` : 
                                                 'Không tìm thấy kết quả nào!';
    }
    return (
        <div style={{minHeight: "70vh"}} className="container my-4">
          <p>{notify}</p>
          <div className="row">
              {listSearch && this.showSearchList(listSearch)}
           </div>
        </div>
    );
  }

  showSearchList = (listSearch) => {
    if(listSearch.length > 0) {
        const list = listSearch.map((item, index) => {
            return (
                <div key={index} className="col-md-4 p-2">
                    <div className="card">
                    <img
                        className="card-img-top"
                        src={item.image}
                        alt="Card image"
                        style={{width:"100%"}}
                    />
                    <div className="card-body">
                       <Link>
                        <h6 className="card-title">{item.name}</h6>
                          <p className="card-text text-left">
                          Diễn viên: {item.author}
                          </p>
                       </Link>
                    </div>
                    </div>
                </div>           
         
            )
        })
        return list;
    }
}
}

const mapStateToProps = (state) => {
  return {
    listSearch: state.reducerMovie.movie
  }
}

export default connect(mapStateToProps)(SearchPage);
