import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center up" style={{ padding: "210px" }}>
          <div
            className="spinner-border text-dark"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
}

export default Loading;
