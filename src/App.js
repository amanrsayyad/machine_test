import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState([]);
  const [ageFilter, setAgeFilter] = useState(0);
  const [belowAge, setBelowAge] = useState(0);
  const [salaryAbove, setSalaryAbove] = useState(0);
  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  const baseUrl = "/api/v1/employees";

  const fetchEmployeeData = () => {
    axios.get(`${baseUrl}`).then((response) => {
      setEmployee(response.data.data);
      console.log(response.data.data);
    });
  };

  const filteredEmployee = employee.filter(
    (employee) => employee.employee_age > ageFilter
  );

  const aboveAgeChange = (e) => {
    if (e.target.checked) {
      setAgeFilter(e.target.value);
    } else {
      setAgeFilter(0);
    }
    setToggleCheckbox((toggleCheckbox) => !toggleCheckbox);
  };

  const handleSalaryChange = (e) => {
    if (e.target.checked) {
      setSalaryAbove(e.target.value);
    } else {
      setSalaryAbove(0);
    }
    setToggleCheckbox((toggleCheckbox) => !toggleCheckbox);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          value={25}
          onChange={(e) => setBelowAge(e.target.value)}
        />
        Below 25
        <input type="checkbox" value={25} onChange={aboveAgeChange} /> 25-61
      </div>
      <div>
        <input type="checkbox" /> Below 1,50,000
        <input
          type="checkbox"
          value={150000}
          onChange={handleSalaryChange}
        />{" "}
        1,50,000 to 3,00,000
      </div>
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
          {filteredEmployee.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
                <td>
                  <img src={item.profile_image} alt="profile img" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
