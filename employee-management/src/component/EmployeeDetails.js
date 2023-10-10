import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeesJsonApi from './EmployeesJsonApi';

let employees;
EmployeesJsonApi.getAllEmployees((data) => {
  employees = data;
});
const EmployeeDetails = () => {
  const params = useParams();
  const employeeId = parseInt(params.id, 10);
  const employee = employees.filter((emp) => emp.id === employeeId);
  return (
    <div>
      <h2>Employee Details</h2>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{employee[0].id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{employee[0].name}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{employee[0].location}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{employee[0].email}</td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td>{employee[0].mobile}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeDetails;
