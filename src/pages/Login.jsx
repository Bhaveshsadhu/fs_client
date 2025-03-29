import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { SignInForm } from "../Components/SignInForm";

export const Login = () => {
  return (
    <Row className="p-5">
      <Col md={6}>
        <SignInForm></SignInForm>
      </Col>
      <Col md={6}>
        <div
          className="d-flex flex-column justify-content-center align-items-center "
          style={{
            height: "100%",
          }}
        >
          <div className="fs-1 text-danger">
            <BsGraphDownArrow />
            Decrease Your Expenses!!!
          </div>
          <div className="fs-1 text-success">
            <BsGraphUpArrow />
            Increase Your Income!!!
          </div>
        </div>
      </Col>
    </Row>
  );
};
