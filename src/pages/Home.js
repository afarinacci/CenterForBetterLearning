import React from 'react';
import CoverPhoto from './../images/istockphoto-474967010-1024x1024.jpg';

function Home() {
  return (
    <div>
      <img
        src={CoverPhoto}
        class="img-fluid"
        alt="Children Reading"
        className="coverPhoto"
      />
      <main className="container-fluid">
        <h1 className="text-center pageTitle">Home</h1>
      </main>
    </div>
  );
}

export default Home;
