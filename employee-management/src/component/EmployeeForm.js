import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EmployeeForm.css';
import EmployeesJsonApi from './EmployeesJsonApi';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Redirect } from 'react-router-dom';

let employees;
EmployeesJsonApi.getAllEmployees((data) => {
  employees = data;
});
const EmployeeForm = () => {
  const params = useParams();
  const selectedId = params.id;

  let initialValues;

  let existEmp = employees.filter((emp) => emp.id === parseInt(selectedId, 10));
  if (selectedId === undefined) {
    initialValues = {
      name: '',
      location: '',
      email: '',
      mobile: ''
    };
  } else {
    initialValues = existEmp[0];
  }

  const handleSubmit = (values, { resetForm }) => {
    const newEmployee = {
      id: employees[employees.length - 1].id + 1,
      ...values
    };
    EmployeesJsonApi.saveNewEmployees(newEmployee);
    resetForm();
    return <Redirect to="/employees" />;
  };

  const handleEdit = (values, { resetForm }) => {
    const empid = existEmp[0].id;
    console.log(empid);
    const updatedEmployee = {
      id: empid,
      ...values
    };
    EmployeesJsonApi.updateEmployee(empid, updatedEmployee);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Employee name is required'),
    location: Yup.string().required('select a location'),
    email: Yup.string().email('Invalid Email').required('Employee email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required')
  });

  return (
    <div class="form-container">
      <h1>Add new employee details</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={selectedId ? handleEdit : handleSubmit}
      >
        <Form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Employee Name:</label>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Field type="text" id="name" name="name" className="form-input" />
                    <ErrorMessage name="name" component="div" className="error" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="location">location:</label>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Field
                      as="select"
                      id="location"
                      name="location"
                      className="form-input"
                      required
                    >
                      <option value="">Select a location</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </Field>
                    <ErrorMessage name="location" component="div" className="error" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email:</label>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Field type="text" id="email" name="email" className="form-input" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="mobileNum">Mobile number:</label>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Field
                      type="tel"
                      id="mobileNum"
                      name="mobile"
                      className="form-input"
                      required={true}
                    />
                    <ErrorMessage name="mobile" component="div" className="error" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
