import React, { Component } from "react";
import logo from './bitcoin-logo.png';
import "./BitcoinPrice.css";

class BitcoinPrice extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      price: {}
    };
  }
  
  componentDidMount() {    
    this.setState({ loading: true });
    fetch("https://blockchain.info/ticker")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {        
        console.log(data);
        this.setState({
          price: data.USD,
          loading: false,
        })
      })
      .catch((error) => this.setState({ error, loading: false }));      
  }

  render() {
    const { loading , price } = this.state;
    const output = loading ? "LOADING..." : "$"+price.last;
    return (
      <div className="btc">
        <img className="btc-logo" src={logo} alt="Bitcoin" />
        <span className="btc-price">{output}</span>
      </div>
    );
  }
}

export default BitcoinPrice;