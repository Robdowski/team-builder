import React from "react";

export default function TeamMembers(props) {
  return (
    <div className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>
            {member.name}
          </h2>
          <p>{member.job}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
}
