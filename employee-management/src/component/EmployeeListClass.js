import React from 'react';
import { Link } from 'react-router-dom';

class EmployeesListClass extends React.Component {
  initialEmployees = [
    {
      id: 1,
      name: 'Ram',
      location: 'Bangalore',
      email: 'ram@mail.com',
      mobile: '9867512345'
    },
    {
      id: 2,
      name: 'Raj',
      location: 'Chennai',
      email: 'raj@mail.com',
      mobile: '7867534521'
    },
    {
      id: 3,
      name: 'Vinay',
      location: 'Pune',
      email: 'vinay@mail.com',
      mobile: '9975287450'
    }
  ];

  //   const [employees, setEmployees] = useState(initialEmployees);
  //   const [filText, setFilText] = useState('');

  constructor(props) {
    super(props);
    this.state = {
      employees: this.initialEmployees,
      filText: ''
    };
  }

  deleteEmployee = (employeeId) => {
    const updatedEmployees = this.state.employees.filter((emp) => emp.id !== employeeId);
    this.setState({ employees: updatedEmployees });
  };

  //Search Box code
  handleChange = (evt) => {
    let findEmployees;
    if (evt.target.value.length !== 0) {
      console.log(this.state.filText);
      findEmployees = this.state.employees.filter((emp) =>
        emp.name.toLowerCase().includes(this.state.filText.toLowerCase())
      );
    } else {
      findEmployees = this.initialEmployees;
    }

    // console.log(findEmployees);
    this.setState({ employees: findEmployees, filText: evt.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <label>Filter by:</label>
        <br />
        <input
          type="text"
          name="filText"
          value={this.state.filText}
          onChange={(evt) => this.handleChange(evt)}
          placeholder="Search..."
        />
        <p>{this.state.filText}</p>
        <br />
        <p>Total number of employees: {this.state.employees.length}</p>
        <br />

        <table border={1}>
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>
                  <Link to={'/addEmployees/' + { employee }}>Edit{employee.id}</Link>
                </td>
                <td>
                  <Link onClick={() => this.deleteEmployee(employee.id)}>Delete{employee.id}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export { EmployeesListClass };
