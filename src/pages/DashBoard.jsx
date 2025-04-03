import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const DashBoard = () => {
  return (
    <Row
      style={{
        overflow: "hidden",
      }}
    >
      <Col className="d-flex justify-content-center align-items-center" md={12}>
        <h1>ToDo Dashboard</h1>
      </Col>
    </Row>
  );
};
