import { useState } from "react";

export const Ticket = ({ ticket, name }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});
  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};
