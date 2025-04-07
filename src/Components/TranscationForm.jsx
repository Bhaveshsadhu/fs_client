import React from "react";
import useForm from "../hooks/useForm";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import Button from "react-bootstrap/Button";
import { addTranscation } from "../../axioHelper/axioHelper";
import { toast } from "react-toastify";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};
export const TranscationForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const fields = [
    {
      label: "Title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },
    {
      label: "amount",
      placeholder: "Amount",
      required: true,
      type: "number",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transcation Date",
      required: true,
      type: "date",
      name: "tdate",
      value: form.tdate,
    },
  ];
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(form);
      const token = localStorage.getItem("accessJWT");
      const res = addTranscation(form, token);
      toast.promise(res, {
        pending: "Please Wait",
      });
      const { status, message } = await res;

      status === "success" ? toast[status](message) : toast[status](message);
    } catch (error) {
      toast[error.status](error.message);
    }
  };
  return (
    <Form onSubmit={handleOnSubmit} className="border rounded ps-4 pe-4 p-2">
      <h4 style={{ color: "#FFB22C" }}>Add Your Transcation Details</h4>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Transcation Type</Form.Label>
        <Form.Select name="type" onChange={handleOnChange} required>
          <option value="">--Select--</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </Form.Select>
      </Form.Group>
      {fields.map((input) => (
        <CustomeInputs key={input.name} {...input} onChange={handleOnChange} />
      ))}
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
