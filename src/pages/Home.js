import React, { Component } from "react";
import one from "../assets/images/111.jpg";
import two from "../assets/images/222.jpg";
import three from "../assets/images/333.jpg";
import Carousel from "../components/Carousel";
import HomeItem from "../components/HomeItem";
import { getAll as getAllProducts } from "../api/Products";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: []
    };
  }

  componentDidMount() {
    getAllProducts()
      .then(result => {
        this.setState({ detail: result });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Carousel one={one} two={two} three={three} />
        <h1 className="text-center cart up-3" style={{ color: "#e83e8c" }}>
          <i className="fa fa-info"></i> Information
        </h1>
        <div className="row row-cols-1 row-cols-md-3">
          {this.state.detail.map(product => (
            <HomeItem product={product} key={product.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
