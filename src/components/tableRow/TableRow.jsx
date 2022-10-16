import "./TableRow.css";

const TableRow = ({ user }) => {
  return (
    <div className="table-row">
      <span>
        <img src={user.avatar} alt="avatar" />
        <span>
          {user.first_name} {user.last_name}
        </span>
      </span>
      <span>{user.email}</span>
    </div>
  );
};

export default TableRow;
