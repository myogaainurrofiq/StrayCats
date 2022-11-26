import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class HomeItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="col mb-4">
          <div className="card">
            <img src={product.image} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.sound}</p>
              <Link
                to={"./detail/" + this.props.product.id}
                className="btn btn-secondary"
              >
                <i className="fa fa-info" ></i>{" "}
                <span className="details">Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeItem;
