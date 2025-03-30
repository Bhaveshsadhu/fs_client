import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import { toast } from "react-toastify";
import { addUser } from "../../axioHelper/axioHelper";
import useForm from "../hooks/useForm";
const initialState = {
  name: "",
  email: "",
  password: "",
  Confirmpassword: "",
};
export const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  // const [form, setFrom] = useState({});
  const fields = [
    {
      label: "Name",
      placeholder: "Name",
      required: true,
      type: "text",
      name: "name",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "Email",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "Password",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm Password",
      required: true,
      type: "password",
      name: "Confirmpassword",
      value: form.Confirmpassword,
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
    const { Confirmpassword, ...rest } = form;
    if (Confirmpassword != rest.password) {
      toast.error("Password dosen't Match..");
      return;
    }
    const { status, message } = await addUser(rest);
    toast[status](message);
    status === "success" && setForm(initialState);
  };
  return (
    <Form onSubmit={handleOnSubmit} className="border rounded ps-4 pe-4 p-2">
      <h4 style={{ color: "#FFB22C" }}>Sign Up Now!!!</h4>
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
