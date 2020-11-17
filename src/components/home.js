import React, { useState } from "react";
import { Card, Col, Row, Nav, Navbar, Form, Button } from "react-bootstrap";
import Logo from "../staticImages/logo_i (1).png";
import Banner from "../staticImages/banner_i.jpg";
import axios from "axios";
import { Redirect, BrowserRouter as Router } from "react-router-dom";

function useHome() {
  const [inputData, setInputData] = useState({
    address: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      withCredentials: true,
      data: inputData,
      url: "http://localhost:9000/regster",
    })
      .then((res) => {
        console.log(res.data);
        setSubmitted(true);
      })
      .then((set) => {
        console.log(submitted);
      });
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div>
        <Card
          className="container vertical-center"
          style={{ backround: "rgb(0,0,0)", marginTop: "10em" }}
        >
          <h2>Successful</h2>
          <p>
            Registration Successful. You will soon get an email confirming your
            registration..
          </p>
        </Card>
      </div>
    );
  } else {
    return (
      <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="sticky-top App" style={{ background: "white" }}>
          <i>
            <img style={{ height: "3em" }} src={Logo} alt="logo" />
            Promotes Your Site
          </i>
        </div>

        <Card.Title
          className="sticky-top d-none d-md-inline d-lg-inline d-xlg-inline"
          style={{ background: "#f2f3f4" }}
        >
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
              <i>
                <img style={{ height: "2em" }} src={Logo} alt="Logo" />
              </i>
            </Navbar.Brand>

            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
        </Card.Title>
        <hr />
        <Card.Body>
          <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Col
              md="6"
              sm="6"
              xsm="12"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <Card
                style={{
                  background: "rgb(255,255,255)",
                  color: "black",
                  fontSize: "1.1em",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Card.Img src={Banner} alt="main Banner" variant="top" />
                <Card.Body>
                  <div style={{ fontFamily: "sans-serif" }}>
                    <p style={{ color: "#1261A0" }}>
                      We know who reads your blog
                    </p>
                    <p>
                      Our machine learning-powered mailing engine isn't what
                      you're used to; we can reach your would-be fan audience.
                    </p>
                    <p style={{ color: "#c00000" }}>Because we know them.</p>
                    <p>
                      Since there are only a finite number of fans for a
                      specific topic (blog type), we will serve you on a first
                      come first served basis. Register your blog below.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col
              md="6"
              sm="6"
              xsm="12"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <div
                style={{ fontSize: "1.1em", paddingLeft: 0, paddingRight: 0 }}
                className="vertical-center container App"
              >
                <br />
                <h3
                  style={{ background: "beige", margin: "0%", padding: "0%" }}
                >
                  Register With Us and Get Your Boost
                  <br />
                </h3>
                <br />
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Blog address (e.g example.com):</Form.Label>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      type="address"
                      name="address"
                      value={inputData.address}
                      onChange={onChangeHandler}
                      placeholder="Enter web address"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contact email:</Form.Label>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      type="email"
                      name="email"
                      value={inputData.email}
                      onChange={onChangeHandler}
                      placeholder="your e-mail"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Button
                    onClick={onClickHandler}
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer stule={{ background: "#fff" }} className="App">
          <br />
          <p style={{ fontSize: "1.5em", color: "black" }}>
            <i>©</i> 2020, Goodmail.
          </p>
        </Card.Footer>
      </Card>
    );
  }
}

export default useHome;
