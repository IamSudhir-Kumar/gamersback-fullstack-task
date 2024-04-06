import React from 'react';
import './Notfound.scss'; // Import the SCSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>Oops!</h1>
        <p>We couldn't find the page you're looking for.</p>
      </div>
    </div>
  );
};

export default NotFound;
