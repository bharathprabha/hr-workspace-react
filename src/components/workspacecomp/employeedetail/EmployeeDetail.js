import React from "react";
import "./EmployeeDetail.css";
export const EmployeeDetail = () => {
  return (
    <div className="employeeDetail">
      <div className="employeDetail__table">
        <div className="employeDetail__table__heater">R.no</div>
        <div className="employeDetail__table__heater">full name</div>
        <div className="employeDetail__table__heater">Position</div>
        <div className="employeDetail__table__heater">Department</div>
        <div className="employeDetail__table__heater">Email</div>
      </div>
    </div>
  );
};
