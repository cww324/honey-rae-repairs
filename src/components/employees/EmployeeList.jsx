import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { Employee } from "./Employee";
import "./Employees.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => (
        <Employee key={employeeObj.id} employee={employeeObj} />
      ))}
    </div>
  );
};
