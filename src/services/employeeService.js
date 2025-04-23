export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json()
  );
};

export const getEmployeeById = (id) => {
  return fetch(`http://localhost:8088/employees/${id}?_expand=user`)
    .then(res => res.json());
};


export const getTicketsForEmployee = (employeeId) => {
  return fetch(`http://localhost:8088/employeeTickets?employeeId=${employeeId}&_expand=serviceTicket`)
    .then(res => res.json());
};
