import React from "react";
import { Link } from "react-router-dom";

import "./Person.css";

const PersonView = props => {
  const { persons, onDelete } = props;
  return (
    <div>
      <h3>Choose Who You'd Like to Be!</h3>
      <div>
        {persons.map(person => (
          <div className="card" key={person.id}>
            <button className="x-btn" onClick={() => onDelete(person)}>
              X
            </button>
            <Link to={`Person/` + person.id}>
              <h5 className="card-body">{person.name}</h5>
            </Link>
            Age: {person.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonView;
