import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...tableData, formData];
    const sortedData = newData.sort((a, b) => a.name.localeCompare(b.name));
    setTableData(sortedData);
    setFormData({ name: "", phone: "", email: "" });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newData = [...tableData, formData];
  //   const sortedData = newData.sort((a, b) => a.name.localeCompare(b.name));
  //   setTableData(sortedData);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phoneNumber: "",
  //   });
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          type="text"
          id="name"
          onChange={handleChange}
        />
        <br />
        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          type="tel"
          id="phone"
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          type="email"
          id="email"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
