import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import { toast } from "react-toastify";
import { addUser } from "../../axioHelper/axioHelper";

export const SignUpForm = () => {
  const [form, setFrom] = useState({});
  const fields = [
    {
      label: "Name",
      placeholder: "Name",
      required: true,
      type: "text",
      name: "name",
    },
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
    {
      label: "Confirm Password",
      placeholder: "Confirm Password",
      required: true,
      type: "password",
      name: "Confirmpassword",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { Confirmpassword, ...rest } = form;
    if (Confirmpassword != rest.password) {
      toast.error("Password dosen't Match..");
      return;
    }
    const { status, message } = await addUser(rest);
    console.log(status, message);

    toast[status](message);
  };
  return (
    <div className="border rounded p-4">
      <Form onSubmit={handleOnSubmit}>
        <h4 className="mb-4" style={{ color: "#FFB22C" }}>
          Sign Up Now!!!
        </h4>
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
