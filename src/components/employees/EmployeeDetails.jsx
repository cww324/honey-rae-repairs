import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeById, getTicketsForEmployee } from "../../services/employeeService.js"
import { CustomerDetails } from "../customers/CustomerDetails.jsx"
import "./Employees.css"


export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const [tickets, setTickets] = useState([])
    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeById(employeeId).then((data) => {
          setEmployee(data); // now it's just the object directly
        });
        getTicketsForEmployee(employeeId).then(setTickets)
      }, [employeeId]);
      
      

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty : </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate : </span>
                {employee.rate}
            </div>
            <div>
                <span className="employee-info">Currently Working on {tickets.length} project{tickets.length !== 1 ? "s" : ""}</span>
            </div>

        </section>
    )
}

// email/speciality/rate/current job