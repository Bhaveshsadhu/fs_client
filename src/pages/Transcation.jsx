import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FinanceQuotes } from "../Components/FinanceQuotes";
import { SignUpForm } from "../Components/SignUpForm";

export const Transcation = () => {
  return (
    <Row
      style={{
        overflow: "hidden",
      }}
    >
      <Col className="d-flex justify-content-center align-items-center" md={6}>
        <h1>ToDo Transcation</h1>
      </Col>
    </Row>
  );
};
