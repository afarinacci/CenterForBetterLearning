import React from 'react';

function Bio(props) {
  return (
    <div className="card">
      <img
        className="bioimg card-img-top"
        src={props.user.url}
        alt={props.user.name}
      />
      <div className="card-body">
        <h3 className="card-title">>{props.user.name}</h3>
        <h4 className="card-title">{props.user.role}</h4>
      </div>
      <div className="card-body">
        <p className="card-text">{props.user.bio}</p>
      </div>
    </div>
  );
}

export default Bio;
