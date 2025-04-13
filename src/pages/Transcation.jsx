import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TranscationForm } from "../Components/TranscationForm";
import { TranscationTable } from "../Components/TranscationTable";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlusCircle } from "react-icons/fa";

export const Transcation = () => {
  const { getUsersTranscations } = useUser();
  useEffect(() => {
    getUsersTranscations();
  }, []);

  return (
    <Row
      style={{
        overflow: "hidden",
      }}
    >
      <Col>
        <hr></hr>
        <TranscationTable></TranscationTable>
      </Col>
    </Row>
  );
};
