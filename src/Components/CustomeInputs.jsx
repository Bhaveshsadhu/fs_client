import React from "react";
import Form from "react-bootstrap/Form";

export const CustomeInputs = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
