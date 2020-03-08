import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
class OpenVideo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <ButtonToolbar>
        <a
          bsStyle="primary"
          onClick={this.handleShow}
          className="pl-2 text-secondary text-decoration-none"
          href="#"
        >
          <i className="fa fa-play"></i>
        </a>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              ĐĂNG NHẬP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} >Đăng Nhập</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
export default OpenVideo;
