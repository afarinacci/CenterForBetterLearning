import React from 'react';

function Bio(props) {
  return (
    <div className="card-body">
      <h3 className="card-title">{props.name}</h3>
      <h5 className="card-title">{props.role}</h5>
      {props.bio.map(item => (
        <p className="card-text">{item}</p>
      ))}
    </div>
  );
}

export default Bio;
