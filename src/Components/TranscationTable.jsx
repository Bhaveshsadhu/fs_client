import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlusCircle } from "react-icons/fa";
import { CustomeModal } from "./CustomeModal";
import { TranscationForm } from "./TranscationForm";
import { toast } from "react-toastify";
import { deleteTranscations } from "../../axioHelper/axioHelper";
// import  from "../context/UserContext";

export const TranscationTable = () => {
  const [searchTranscation, setSearchTranscation] = useState([]);
  const { transcations, toggleModal } = useUser();
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [saving, setSaving] = useState(0);
  const [idsToDelete, SetIdsToDelete] = useState([]);

  // const [modalShow, setModalShow] = React.useState(false);
  // console.log(transcations);

  useEffect(() => {
    setSearchTranscation(transcations);
  }, [transcations]);

  useEffect(() => {
    // setSearchTranscation(transcations);
    const totalIncome = transcations
      .filter((item) => item.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpenses = transcations
      .filter((item) => item.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    setIncome(totalIncome);
    setExpenses(totalExpenses);
    setSaving(totalIncome - totalExpenses);
  }, [transcations]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredArry = transcations.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });
    // console.log(filteredArry);
    setSearchTranscation(filteredArry);
  };
  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    // console.log(value, checked);
    // if all selected
    if (value === "all") {
      checked
        ? SetIdsToDelete(searchTranscation.map((item) => item._id))
        : SetIdsToDelete([]);
      return;
    }
    // if individuals selected
    if (checked) {
      SetIdsToDelete([...idsToDelete, value]);
    } else {
      // if individual uncheckd
      const temArr = idsToDelete.filter((id) => id !== value);
      SetIdsToDelete(temArr);
    }
    return;
  };
  // console.log(idsToDelete);
  const handlOnDelete = async (e) => {
    if (
      confirm(`Are you sure want to Delete ${idsToDelete.length} Transctions`)
    ) {
      try {
        e.preventDefault();
        const authorization = localStorage.getItem("accessJWT");
        // console.log(authorization, idsToDelete);
        const result = deleteTranscations(authorization, idsToDelete);
        toast.promise(result, {
          pending: "Please Wait..",
        });
        // console.log(result);
        const { status, message } = await result;
        toast[status](message);
      } catch (error) {
        toast[error.status](error.message);
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="fw-bold">
          {searchTranscation.length} - Total Transcation(s)
        </div>
        <div className="flex-grow-1 mx-5">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleOnSearch}
            />
          </Form>
        </div>
        <div>
          {/* <Button type="submit">
            <FaPlusCircle /> Add Transcation(s)
          </Button> */}
          <Button variant="primary" onClick={() => toggleModal(true)}>
            <FaPlusCircle /> Add Transcation(s)
          </Button>
          <CustomeModal>
            <TranscationForm></TranscationForm>
          </CustomeModal>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <Form.Check
                type="checkbox"
                value="all"
                onChange={handleOnSelect}
                checked={idsToDelete.length === searchTranscation.length}
              ></Form.Check>
              Select All
            </th>
            <th>Type</th>
            <th>Date</th>
            <th>Title</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          {searchTranscation.length > 0 &&
            searchTranscation.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    value={item._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(item._id)}
                  ></Form.Check>
                </td>
                <td>{item.type}</td>
                <td>
                  {new Intl.DateTimeFormat("en-GB").format(
                    new Date(item.tdate)
                  )}
                </td>
                <td>{item.title}</td>
                <td className="text-success">
                  {item.type === "income" ? item.amount : ""}
                </td>
                <td className="text-danger">
                  {item.type === "expense" ? item.amount : ""}
                </td>
              </tr>
            ))}

          <tr className="fw-bold text-end">
            <td colSpan={4}>Total : </td>
            <td className="text-success">{income}</td>
            <td className="text-danger">{expenses}</td>
          </tr>
          <tr className="fw-bold text-end">
            <td colSpan={5}>Your Saving : </td>

            <td className={saving >= 0 ? "text-success" : "text-danger"}>
              {saving}
            </td>
            {/* <td className="text-danger">{expenses}</td> */}
          </tr>
        </tbody>
      </Table>

      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handlOnDelete}>
            Delete {idsToDelete.length} Transcations
          </Button>
        </div>
      )}
    </>
  );
};
