import React from 'react';

function Bio(props) {
  return (
    <div className="card">
      <img
        className="bioimg card-img-top"
        src={props.user.url}
        alt={props.user.name}
      />
      <div class="card-body">
        <h3 class="card-title">>{props.user.name}</h3>
        <h4 class="card-title">{props.user.role}</h4>
      </div>
      <div class="card-body">
        <p class="card-text">{props.user.bio}</p>
      </div>
    </div>
  );
}

export default Bio;
