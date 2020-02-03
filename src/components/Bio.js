import React from 'react';

function Bio(props) {
  return (
    <div className="card">
      <img
        className="bioimg card-img-top"
        src={props.url}
        alt={props.name}
      />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <h5 className="card-title">{props.role}</h5>
        <p className="card-text">{props.bio}</p>
      </div>
    </div>
  );
}

export default Bio;
