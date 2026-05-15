import React from 'react';
import './homepage.css';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Rental Car Experience</h1>
      <p>We offer a wide range of rental cars to suit your needs.</p>
      <button>Explore Our Fleet</button>
    </div>
  );
};

export default Homepage;