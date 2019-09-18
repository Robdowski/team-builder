import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import TeamMembers from "./components/TeamMembers"

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Robert Carter",
      job: "Software Engineer",
      age: 28
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      job: member.job,
      age: member.age
    };
    setMembers([...members, newMember])
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamMembers members={members} />
      <Form addNewMember={addNewMember} members={members} />
    </div>
  );
}

export default App;
