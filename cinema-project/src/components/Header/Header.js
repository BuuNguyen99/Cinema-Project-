import React, { Component } from 'react';
import './Header.css';
import { Modal, Button } from 'react-bootstrap';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row d-flex align-items-center py-3">
                    <div className="col-4">
                        <img className="imageLogo" src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="logo"></img>
                    </div>
                    <div className="col-4">
                        <input className="form-control w-75 mx-auto" placeholder="Tìm tên phim, diễn viên..."></input>
                    </div>
                    <div className="col-4 text-right text-secondary">
                        <a className="pl-2 text-secondary text-decoration-none" href="#" onClick={this.handleShow}><i className="fas fa-user"></i> Đăng nhập</a>
                    </div>
                </div>
                <Modal className="modalForm" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Đăng nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm,
                        cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
                    </Modal.Body>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Đăng Nhập
                   </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Header;