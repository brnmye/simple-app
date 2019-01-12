import React from "react";
import { Link } from "react-router-dom";

const PersonView = props => {
  const { persons, onDelete } = props;
  return (
    <div>
      <h3>All PPL</h3>
      <div>
        {persons.map(person => (
          <p key={person.id}>
            <Link to={`Person/` + person.id}>{person.name}</Link>
            <br /> Age: {person.age} <br />
            <button onClick={() => onDelete(person)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PersonView;
