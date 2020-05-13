import React from "react";

const FormCard = props => {
  return (
    <div className="currentMembers" > <h2 className="current">Current Members</h2>
      {props.teams.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  )};
export default FormCard;