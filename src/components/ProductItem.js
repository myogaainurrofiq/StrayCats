import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="col mb-4">
          <div className="card">
            <img src={product.image} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>
                Price :{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  ${product.price}
                </span>{" "}
              </p>
              <Link
                to={"./products/" + this.props.product.id}
                className="btn btn-secondary"
              >
                <i className="fa fa-shopping-cart"></i>{" "}
                <span className="details">Buy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
