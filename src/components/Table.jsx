import React from "react";

const Table = ({
  id,
  employee_name,
  employee_salary,
  employee_age,
  profile_image,
}) => {
  return (
    <div>
      {" "}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Employee Name</td>
            <td>Employee Salary</td>
            <td>Employee Age</td>
            <td>Profile Image</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{employee_name}</td>
            <td>{employee_salary}</td>
            <td>{employee_age}</td>
            <td>
              <img src={profile_image} alt="profile img" />
            </td>
          </tr>
        </tbody>
      </table>
      ;
    </div>
  );
};

export default Table;
