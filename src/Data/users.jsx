import { Link } from "react-router-dom";

export const userRows = [
  { id: 1, user: "Snow", email: "Jon@gmail.com", age: 35 },
  { id: 2, user: "Lannister", email: "Cersei@gmail.com", age: 42 },
  { id: 3, user: "Lannister", email: "Jaime@gmail.com", age: 45 },
  { id: 4, user: "Stark", email: "Arya@gmail.com", age: 16 },
  { id: 5, user: "Targaryen", email: "Daenerys@gmail.com", age: 32 },
  { id: 6, user: "Melisandre", email: "Dayana@gmail.com", age: 150 },
  { id: 7, user: "Clifford", email: "Ferrara@gmail.com", age: 44 },
  { id: 8, user: "Frances", email: "Rossini@gmail.com", age: 36 },
  { id: 9, user: "Roxie", email: "Harvey@gmail.com", age: 65 },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "Username", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <div className="actionCell">
          <Link to="/users/test">
            <button className="btn viewBtn">View</button>
          </Link>
          <button className="btn deleteBtn">Delete</button>
        </div>
      );
    },
  },
];