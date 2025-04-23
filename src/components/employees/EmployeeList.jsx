import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { Employee } from "./Employee";
import "./Employees.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      console.log("Employee data:", employeeArray)
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => (
        <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
          <Employee employee={employeeObj} />
        </Link>
      ))}
    </div>
  );
};
