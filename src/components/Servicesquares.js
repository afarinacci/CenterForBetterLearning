import React from 'react';

function Bio(props) {
  return (
    <img className="bioimg" src={props.user.url} alt={props.user.name} />
    <h3>{props.user.name}</h3>
    <h4>{props.user.role}</h4>
    <p>{props.user.bio}</p>
  );
}

export default Bio;