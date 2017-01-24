import React, { Component } from 'react';
import img from '';

export default class Spinner extends Component {

  render() {
    return (
      <div className="loader-container">
        <div className="loading-overlay"></div>
        <div className="loading-icon">
          <img src="../../styles/images/theme-1/spinner_squares_circle.gif" alt="Loading..." />
        </div>
      </div>
    );
  }
}
