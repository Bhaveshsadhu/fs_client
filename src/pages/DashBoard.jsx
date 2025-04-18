import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMapData } from "../../axioHelper/axioHelper";
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,BarChart, Bar,PieChart, Pie, Cell  } from 'recharts';
import { LineChartGraph } from "../Components/LineChartGraph";
import { BarChartGraph } from "../Components/BarChartGraph";
import { PieChartGraph } from "../Components/PieChartGraph";
import { FaBalanceScale } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import Badge from 'react-bootstrap/Badge';
export const DashBoard = () => {
  const [summaryData, setSummaryData] = useState([]);
  const incomeData = summaryData.filter((item) => item.type === "income");
const expenseData = summaryData.filter((item) => item.type === "expense");

const totalIncome = incomeData.reduce((sum, item) => sum + item.total, 0);
const totalExpense = expenseData.reduce((sum, item) => sum + item.total, 0);

useEffect(() => {
  const fetchSummary = async () => {
    // const { data } = await axios.get(`/api/transactions/summary/${userId}`);
    const token = localStorage.getItem("accessJWT")
    const {data} = await getMapData(token);
    console.log(data)
    setSummaryData(data);
  };
  fetchSummary();
}, []);
console.log(summaryData);
// console.log(incomeData)
  return (
    <Container>
      <Row className="fw-bold fs-1 mb-4 gap-2">
        <Col className="bg-warning"><FaBalanceScale />Balance
        <hr className="text-dark"></hr>
        <div className="text-end">{totalIncome + totalExpense}</div>
        </Col>
        <Col className="bg-success"><FaDollarSign />Income
        <hr className="text-dark"></hr>
        <div className="text-end">{totalIncome}</div>
        </Col>
        <Col className="bg-danger"><GiExpense />Expenses
        <hr className="text-dark"></hr>
        <div className="text-end">{totalExpense}</div>
        </Col>
      </Row>
      <Row className="gap-2 text-center rounded-lg">
        <Col className="bg-light text-center rounded-lg p-4"><div className="gap-2"><Badge bg="success">Income</Badge>  <Badge bg="danger">Expenses</Badge></div><br></br><PieChartGraph totalIncome={totalIncome} totalExpense={totalExpense}></PieChartGraph></Col>
        <Col className="bg-light text-center rounded-lg p-4"><div className="fw-bold text-success">Income</div><LineChartGraph summaryData={summaryData}></LineChartGraph></Col>
        <Col className="bg-light text-center rounded-lg p-4"><div className="fw-bold text-warning">Expenses</div><LineChartGraph summaryData={summaryData}></LineChartGraph></Col>
      </Row>
      {/* <Row>
        <Col xs={12} className="bg-dark"><BarChartGraph></BarChartGraph></Col>
      </Row> */}
    </Container>
   
  );
};
