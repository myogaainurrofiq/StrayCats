import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="container up">
        <div className="card mb-3" style={{ minWidth: "10%" }}>
          <p style={{ textAlign: "center" }}>
            <img
              src="/Souq.Cat/yaa.png"
              className="card-img-top"
              alt="..."
              style={{ width: "25%", height: "30%" }}
            />
          </p>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "20px" }}>
              M.Yoga Ainur Rofiq
              <h5 className="card-text" style={{ fontSize: "40px" }}>
                      
              <h5 className="card-text" style={{ fontSize: "16px" }}>
              "Resmi menamatkan tugas akhir PPB"
              <span style={{ color: "red", fontWeight: "bold" }}>
              </span>
              </h5>
              </h5>
            </h5>
            </div>
          </div>
        </div>
    );
  }
}

export default Profile;