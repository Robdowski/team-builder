import React, { useState } from "react";

export default function Form(props) {
  const [member, setMember] = useState({ name: "", age: "", job: "" });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", age: "", job: "" });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={member.name}
        />
         <label htmlFor="job">Job:</label>
        <input
          id="job"
          type="text"
          name="job"
          onChange={handleChanges}
          value={member.job}
        />
         <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={member.email}
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}
