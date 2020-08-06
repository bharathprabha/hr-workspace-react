import React from "react";
import "./Workspace.css";
import { EmployeeDetail } from "./workspacecomp/employeedetail/EmployeeDetail";
export const Workspace = () => {
  return (
    <div className="workspace">
      <EmployeeDetail />
    </div>
  );
};
