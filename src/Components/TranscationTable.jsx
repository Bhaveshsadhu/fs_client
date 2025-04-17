import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import Pagination from 'react-bootstrap/Pagination';

import { useUser } from "../context/UserContext";
import { CustomeModal } from "./CustomeModal";
import { TranscationForm } from "./TranscationForm";
import { deleteTranscations } from "../../axioHelper/axioHelper";

export const TranscationTable = () => {
  const [searchTranscation, setSearchTranscation] = useState([]);
  const { transcations, toggleModal } = useUser();
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [saving, setSaving] = useState(0);
  const [idsToDelete, SetIdsToDelete] = useState([]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchTranscation.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(searchTranscation.length / itemsPerPage);

  useEffect(() => {
    setSearchTranscation(transcations);
  }, [transcations]);

  useEffect(() => {
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
    const filteredArry = transcations.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchTranscation(filteredArry);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;

    if (value === "all") {
      checked
        ? SetIdsToDelete(searchTranscation.map((item) => item._id))
        : SetIdsToDelete([]);
      return;
    }

    if (checked) {
      SetIdsToDelete([...idsToDelete, value]);
    } else {
      const temArr = idsToDelete.filter((id) => id !== value);
      SetIdsToDelete(temArr);
    }
  };

  const handlOnDelete = async (e) => {
    if (
      confirm(`Are you sure want to Delete ${idsToDelete.length} Transctions`)
    ) {
      try {
        e.preventDefault();
        const authorization = localStorage.getItem("accessJWT");
        const result = deleteTranscations(authorization, idsToDelete);

        toast.promise(result, {
          pending: "Please Wait..",
        });

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
              placeholder="Search Transcation(s)"
              onChange={handleOnSearch}
            />
          </Form>
        </div>
        <div>
          <Button variant="primary" onClick={() => toggleModal(true)}>
            <FaPlusCircle /> Add Transcation(s)
          </Button>
          <CustomeModal>
            <TranscationForm />
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
                checked={
                  idsToDelete.length === searchTranscation.length &&
                  searchTranscation.length > 0
                }
              />
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
          {currentItems.map((item, i) => (
            <tr key={item._id}>
              <td>{indexOfFirstItem + i + 1}</td>
              <td>
                <Form.Check
                  type="checkbox"
                  value={item._id}
                  onChange={handleOnSelect}
                  checked={idsToDelete.includes(item._id)}
                />
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
          </tr>
        </tbody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="d-flex justify-content-center my-3 gap-2 flex-wrap ">
          <Pagination.First 
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}/>
          <Pagination.Prev 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}/>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              variant={currentPage === index + 1 ? "dark" : "outline-dark"}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}/>
          <Pagination.Last onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}/>
        </Pagination>
      )}

      {/* Delete Button */}
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handlOnDelete}>
            Delete {idsToDelete.length} Transcation(s)
          </Button>
        </div>
      )}
    </>
  );
};
