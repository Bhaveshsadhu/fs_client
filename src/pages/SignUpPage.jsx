import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FinanceQuotes } from "../Components/FinanceQuotes";
import { SignUpForm } from "../Components/SignUpForm";

export const SignUpPage = () => {
  return (
    <Container className="p-5 bg-dark ">
      <Row className="m-5 g-2">
        <Col
          className="d-flex justify-content-center align-items-center"
          md={6}
        >
          <FinanceQuotes></FinanceQuotes>
        </Col>
        <Col md={6}>
          <SignUpForm></SignUpForm>
        </Col>
      </Row>
    </Container>
  );
};
