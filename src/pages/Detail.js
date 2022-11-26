import React, { Component } from "react";
import { getById as getSpecificProduct } from "../api/Products";
import Loading from "../components/Loading";
import { addToChart } from "../store/actions/action";
import { connect } from "react-redux";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      quantity: 0
    };
  }
  handleIncrement = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      quantity: Math.max(this.state.quantity - 1, 0)
    });
  };
  handleReset = () => {
    this.setState({ quantity: 0 });
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    getSpecificProduct(parseInt(id))
      .then(product => {
        // setTimeout(() => this.setState({ product, loading: false }), 2000);
        this.setState({ product: product, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addToCart = product => {
    this.props.addToCart(product, this.state.quantity);
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    const product = this.state.product;
    return (
      <div className="container up">
        <div className="card mb-3" style={{ minWidth: "10%" }}>
          <p style={{ textAlign: "center" }}>
            <img
              src={this.state.product.image}
              className="card-img-top"
              alt="..."
              style={{ width: "40%", height: "50%" }}
            />
          </p>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "30px" }}>
              {this.state.product.name}{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
              </span>
            </h5>
            <p classname="card-text" style={{ fontSize: "16px"}}>{product.description}</p>
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToChart(productsInfo, quantity))
  };
};

export default connect(null, mapDispatchToProps)(Detail);
