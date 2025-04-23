export const Employee = ({ employee }) => {
  if (!employee) return null;

  return (
    <div className="employee">
      <div>
        <div className="employee-info">Name</div>
        <div>{employee.user.fullName}</div>
      </div>
      <div>
        <div className="employee-info">Email</div>
        <div>{employee.user.email}</div>
      </div>
    </div>
  );
};
