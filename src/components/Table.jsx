import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Table = (props) => {
  const { getContacts, contacts, handleDelete } = props;
  const navigate = useNavigate();

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="thead_th">N </th>
            <th className="thead_th">FirstName</th>
            <th className="thead_th">LastName</th>
            <th className="thead_th">Email</th>
            <th className="thead_th">Phone</th>
            <th className="thead_th">Action</th>
          </tr>
        </thead>
        {contacts.map((item, i) => (
          <tbody key={item.id}>
            <tr>
              <td className="thead_td">{i + 1}</td>
              <td className="thead_td">{item.firstname}</td>
              <td className="thead_td">{item.lastname}</td>
              <td className="thead_td">{item.email}</td>
              <td className="thead_td">{item.phone}</td>
              <td className="thead_td">
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${item.id}`)}>
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
