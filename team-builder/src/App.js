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
      email: "email1@gmail.com"
    },
    {
      id: 2,
      name: "Kevin Allen",
      job: "Software Engineer",
      email: "email2@gmail.com"
    },
    {
      id: 3,
      name: "Travis Laudahl",
      job: "Software Engineer",
      email: "email1@hotmail.com"
    },
    {
      id: 4,
      name: "Christian Ford",
      job: "Software Engineer",
      email: "cfjordaloseo@gmailforlosers.com"
    },
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
