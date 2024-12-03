import React from 'react';
import './PyramidLoader.css'; // Assuming the CSS is in the same folder

const PyramidLoader = () => {
  return (
    <div className="pyramid-loader">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
      <div className="loading-text">Loading...</div> {/* Loading text below the pyramid */}
    </div>
  );
};

export default PyramidLoader;
