import React from "react";

function EmployeeCard({ employee }) {
  return (
    <div className="flex flex-col items-center w-56 border shadow-md p-3 hover:shadow-lg">
      <div className="flex justify-between w-full">
        <p>Staff ID: {employee.empId}</p>
        <p>Logo</p>
      </div>

      <img src={employee.image} alt="" className="w-20 h-20 rounded-full" />

      <div>
        <p>Name: {employee.name}</p>
        <p>Department: {employee.dept}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
