import React, { useState } from "react";


const Form = (props) => {
  const [data, setData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (event) =>
    setData({ ...data, [event.target.name]: event.target.value });
  const clearForm = () => {
    setData({ id: Date.now(), name: "", email: "", role: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(data);
        clearForm();
  };



  return (
    <div className="formapp">
      <form onSubmit={handleSubmit}>
        <div className="forminfo">
          <h1>New Member Form</h1>
          <div>
            <label htmlFor="name">
              <h3>Your Name: </h3>
            </label>


            <input
              className="textArea"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
            />
          </div>


          <div>
            <label htmlFor="email">
              <h3>Your E-mail: </h3>
            </label>
            <input
              className="textArea"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
          </div>


          <div>
            <label htmlFor="role">
              <h3>Your Role: </h3>
            </label>
            <input
              className="textArea"
              id="role"
              name="role"
              type="text"
              placeholder="Enter your role"
              value={data.role}
              onChange={handleChange}
            />
          </div>


          <p>
            <button type="submit" className="button">
              Add New Member
            </button>


          </p>
        </div>
      </form>
    </div>
  );
};


export default Form;