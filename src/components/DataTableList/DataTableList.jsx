import React from "react";

//* Style *//
import "./dataTableList.scss";

//* Data Grid *//
import { DataGrid } from "@mui/x-data-grid";

//* Router *//
import { Link } from "react-router-dom";

//* Data *//
import { userRows, userColumns } from "../../Data/users";


const DataTableList = () => {
  return (
    <div className="dataTableList">
      <div>
        <Link to="/users/new" className="addNewUser">
          Add new user
        </Link>
      </div>

      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        className="dataGrid"
        checkboxSelection
      />
    </div>
  );
};

export default DataTableList;
