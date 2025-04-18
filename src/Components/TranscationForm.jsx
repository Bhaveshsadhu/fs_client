import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import Form from "react-bootstrap/Form";
import { CustomeInputs } from "./CustomeInputs";
import Button from "react-bootstrap/Button";
import { addTranscation, updateTranscation } from "../../axioHelper/axioHelper";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};
export const TranscationForm = ({data}) => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { getUsersTranscations,isUpdate,setIsUpdate,toggleModal } = useUser();
  const { isSubmitting, setIsSubmitting } = useUser();
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
      // value: form.tdate,
      value:form.tdate ? form.tdate.split("T")[0] : "",
      // value:({new Intl.DateTimeFormat("en-GB").format(
      //   new Date(form.tdate)
      // )})
    },
  ];
  const handleOnUpdate = async(e) =>{
    try {
      e.preventDefault();
      // Button disabled
      // Your update code here
      const token = localStorage.getItem("accessJWT");
     
      const res = updateTranscation(form, token);
      toast.promise(res, {
        pending: "Please Wait",
      });
      const { status, message } = await res;

      toast[status](message);
      status === "success" && setForm(initialState);

      
      getUsersTranscations();

    setIsSubmitting(false); 
    // set isupdate false after update - it will show submit button
    setIsUpdate(false);
    // set toggle modle false to to close after udpate
    toggleModal(false);
    console.log(form);
    } catch (error) {
      toast[error.status](error.message);
    }
    

  }
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
     // Button disabled
    setIsSubmitting(true); 
      const token = localStorage.getItem("accessJWT");
     
      const res = addTranscation(form, token);
      toast.promise(res, {
        pending: "Please Wait",
      });
      const { status, message } = await res;

      toast[status](message);
      status === "success" && setForm(initialState);

      
      getUsersTranscations();
      
    } catch (error) {
      toast[error.status](error.message);
    }
    finally{
      setIsSubmitting(false); // Re-enable form after response
    }
  };
  useEffect(()=>{
    isUpdate?setForm(data):setForm(initialState);
    // console.log(isUpdate,data);
  },[])
  return (
    <Form onSubmit={handleOnSubmit} className="border rounded ps-4 pe-4 p-2">
      
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Transcation Type</Form.Label>
        <Form.Select name="type" value={form.type || ""} onChange={handleOnChange} required>
          <option value="">--Select--</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </Form.Select>
      </Form.Group>
      {fields.map((input) => (
        <CustomeInputs key={input.name} {...input} onChange={handleOnChange} />
      ))}
      <div className="d-grid">
        {isUpdate 
        ?
        <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleOnUpdate}>
        {isSubmitting ? "Updating..." : "Update"}
        </Button>
        :
        <Button variant="primary" type="submit" disabled={isSubmitting} >
        {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        }
      
      </div>
    </Form>
  );
};
