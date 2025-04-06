import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FinanceQuotes } from "../Components/FinanceQuotes";
import { SignUpForm } from "../Components/SignUpForm";
import { TranscationForm } from "../Components/TranscationForm";
import { TranscationTable } from "../Components/TranscationTable";

export const Transcation = () => {
  return (
    <Row
      style={{
        overflow: "hidden",
      }}
    >
      <Col>
        <TranscationForm></TranscationForm>
        <hr></hr>
        <TranscationTable></TranscationTable>
      </Col>
    </Row>
  );
};
