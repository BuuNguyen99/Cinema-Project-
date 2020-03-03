import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css'

class Header extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="logo"></img>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input placeholder="Tìm tên phim, diễn viên..."></input>
                        </div>
                    </Col>
                    <Col>
                        <div>user</div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;