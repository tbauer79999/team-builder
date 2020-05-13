import React, { useState } from "react";
import "./App.css";
import Form from "./form.js";
import "./App.css";
import FormCard from "./Memberlist";


function App() {
  const [teams, setTeams] = useState([{
    id: Date.now(),
    name: "Tom",
    email: "thomasbauer799@gmail.com",
    role: "Developer",
  }]);
  
  const handleSubmit = (newData) => {
    setTeams([...teams, newData]);
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}/>
      <FormCard teams={teams} />
    </div>
  );
}
export default App;