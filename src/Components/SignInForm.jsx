import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import { toast } from "react-toastify";
import useForm from "../hooks/useForm";
// import { addUser } from "../../axioHelper/axioHelper";
const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const fields = [
    {
      label: "Email",
      placeholder: "Email",
      required: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "Password",
      required: true,
      type: "password",
      name: "password",
    },
  ];
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setFrom({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="border rounded p-3">
      <Form onSubmit={handleOnSubmit}>
        <h4 className="mb-4" style={{ color: "#FFB22C" }}>
          Sign In Now!!!
        </h4>
        <hr></hr>
        {fields.map((input) => (
          <CustomeInputs
            key={input.name}
            {...input}
            onChange={handleOnChange}
          />
        ))}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
