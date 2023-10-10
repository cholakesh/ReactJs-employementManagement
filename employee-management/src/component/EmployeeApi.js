import axios from 'axios';

export default class EmployeeApi {
  static getAllEmployees(cb) {
    axios
      .get('http://localhost:8082/getAllDetails')
      .then((response) => cb(response.data))
      .catch((error) => {
        throw error;
      });
  }

  //   static getEmployeeDetails(employeeId, cb) {
  //     // try {
  //     //   const response = axios.get('http://localhost:3001/employees/' + employeeId);
  //     //   console.log('http://localhost:3001/employees/' + employeeId);
  //     //   console.log(response);
  //     //   return response;
  //     // } catch (error) {
  //     //   throw error;
  //     // }
  //     axios
  //       .get('http://localhost:3001/employees/' + employeeId)
  //       .then((response) => cb(response.data))
  //       .catch((error) => {
  //         throw error;
  //       });
  //   }

  //   static saveNewEmployees(newEmployee) {
  //     axios
  //       .post('http://localhost:3001/employees', newEmployee)
  //       .then((response) => {
  //         console.log(response.data); // Handle the response data
  //       })
  //       .catch((error) => {
  //         console.error(error); // Handle the error
  //       });
  //   }

  //   static deleteEmployee(employeeId) {
  //     axios
  //       .delete('http://localhost:3001/employees/' + employeeId)
  //       .then((response) => {
  //         console.log(response.data); // Handle the response data
  //       })
  //       .catch((error) => {
  //         console.error(error); // Handle the error
  //       });
  //   }

  //   static updateEmployee(id, employee) {
  //     try {
  //       axios.put(`http://localhost:3001/employees/${id}`, employee);
  //       // fetchEmployees();
  //     } catch (error) {
  //       console.error('Error updating employee:', error);
  //     }
  //   }
}
