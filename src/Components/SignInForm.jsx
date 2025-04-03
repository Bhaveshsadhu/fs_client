import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import { toast } from "react-toastify";
import useForm from "../hooks/useForm";
import { userLogin } from "../../axioHelper/axioHelper";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
// import { addUser } from "../../axioHelper/axioHelper";
const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const navigate = useNavigate();
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { user, setUser } = useUser();
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

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const pendingResp = userLogin(form);
      toast.promise(pendingResp, {
        pending: "Please Wait..",
      });
      const { status, message, user, token } = await pendingResp;
      status === "success" ? toast[status](message) : toast[status](message);
      setUser(user);
      // localStorage.setItem(user._id, token);
      // console.log(localStorage.getItem(user._id));
    } catch (error) {
      toast[error.status](error.message);
    }
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
