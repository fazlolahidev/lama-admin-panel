import React from "react";

//* Style for Table *//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//* Style *//
import "./table.scss";

//* Images *//
import dataImageTable from "../../images/dataTable.jfif";

//* Data *//
const rows = [
  {
    id: 123,
    product: "Acer Nitro 5",
    img: dataImageTable,
    customer: "John Doe",
    date: "1 March",
    amount: 750,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 321,
    product: "Acer Nitro 5",
    img: dataImageTable,
    customer: "John Doe",
    date: "1 March",
    amount: 750,
    method: "Online Payment",
    status: "Approved",
  },
];

const TableTransactions = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell" align='center' >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="productCell">
                  <img src={row.img} alt="product image " />
                  <p>{row.product}</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <div className={`status ${row.status}`}>
                  <span className={` ${row.status}`}>{row.status}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTransactions;
