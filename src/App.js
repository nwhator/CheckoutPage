import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => {
        console.log(json);
        this.setState({
          isLoading: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoading } = this.state;

    if (!isLoading) {
      return (
        <div class="container">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div class="container px-4 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
              <div class="col-5">
                <h4 class="heading">Shopping Bag</h4>
              </div>
              <div class="col-7">
                <div class="row text-right">
                  <div class="col-4">
                    <h6 class="mt-2">Category</h6>
                  </div>
                  <div class="col-4">
                    <h6 class="mt-2">Quantity</h6>
                  </div>
                  <div class="col-4">
                    <h6 class="mt-2">Price</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row d-flex justify-content-center border-top">
              <div class="col-5">
                <div class="row d-flex">
                  <div class="book">
                    {" "}
                    <img
                      src="https://i.imgur.com/2DsA49b.jpg"
                      class="book-img"
                      alt="Thinking, Fast and Slow"
                    />{" "}
                  </div>
                  <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
                  </div>
                </div>
              </div>
              <div class="my-auto col-7">
                <div class="row text-right">
                  <div class="col-4">
                    <p class="mob-text">Digital</p>
                  </div>
                  <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                      <p class="mb-0" id="cnt1">
                        1
                      </p>
                      <div class="d-flex flex-column plus-minus">
                        {" "}
                        <span class="vsm-text plus">+</span>{" "}
                        <span class="vsm-text minus">-</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <h6 class="mob-text">$9.99</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row d-flex justify-content-center border-top">
              <div class="col-5">
                <div class="row d-flex">
                  <div class="book">
                    {" "}
                    <img
                      src="https://i.imgur.com/Oj1iQUX.jpg"
                      class="book-img"
                      alt="Homo Deus: A Brief"
                    />{" "}
                  </div>
                  <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">
                      Homo Deus: A Brief
                      <br />
                      History of Tomorrow
                    </h6>
                    <p class="mob-text">Yuval Noah Harari</p>
                  </div>
                </div>
              </div>
              <div class="my-auto col-7">
                <div class="row text-right">
                  <div class="col-4">
                    <p class="mob-text">Paperback</p>
                  </div>
                  <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                      <p class="mb-0" id="cnt2">
                        1
                      </p>
                      <div class="d-flex flex-column plus-minus">
                        {" "}
                        <span class="vsm-text plus">+</span>{" "}
                        <span class="vsm-text minus">-</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <h6 class="mob-text">$13.50</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="card">
                  <div class="row">
                    <div class="col-lg-3 radio-group">
                      <div class="row d-flex px-3 radio">
                        {" "}
                        <img
                          class="pay"
                          src="https://i.imgur.com/WIAP9Ku.jpg"
                          alt="Credit"
                        />
                        <p class="my-auto">Credit Card</p>
                      </div>
                      <div class="row d-flex px-3 radio gray">
                        {" "}
                        <img
                          class="pay"
                          src="https://i.imgur.com/OdxcctP.jpg"
                          alt="Debit"
                        />
                        <p class="my-auto">Debit Card</p>
                      </div>
                      <div class="row d-flex px-3 radio gray mb-3">
                        {" "}
                        <img
                          class="pay"
                          src="https://i.imgur.com/cMk1MtK.jpg"
                          alt="PayPal"
                        />
                        <p class="my-auto">PayPal</p>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="row px-2">
                        <div class="form-group col-md-6">
                          {" "}
                          <label class="form-control-label">
                            Name on Card
                          </label>{" "}
                          <input
                            type="text"
                            id="cname"
                            name="cname"
                            placeholder="Johnny Doe"
                          />{" "}
                        </div>
                        <div class="form-group col-md-6">
                          {" "}
                          <label class="form-control-label">
                            Card Number
                          </label>{" "}
                          <input
                            type="text"
                            id="cnum"
                            name="cnum"
                            placeholder="1111 2222 3333 4444"
                          />{" "}
                        </div>
                      </div>
                      <div class="row px-2">
                        <div class="form-group col-md-6">
                          {" "}
                          <label class="form-control-label">
                            Expiration Date
                          </label>{" "}
                          <input
                            type="text"
                            id="exp"
                            name="exp"
                            placeholder="MM/YYYY"
                          />{" "}
                        </div>
                        <div class="form-group col-md-6">
                          {" "}
                          <label class="form-control-label">CVV</label>{" "}
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="***"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 mt-2">
                      <div class="row d-flex justify-content-between px-4">
                        <p class="mb-1 text-left">Subtotal</p>
                        <h6 class="mb-1 text-right">$23.49</h6>
                      </div>
                      <div class="row d-flex justify-content-between px-4">
                        <p class="mb-1 text-left">Shipping</p>
                        <h6 class="mb-1 text-right">$2.99</h6>
                      </div>
                      <div
                        class="row d-flex justify-content-between px-4"
                        id="tax"
                      >
                        <p class="mb-1 text-left">Total (tax included)</p>
                        <h6 class="mb-1 text-right">$26.48</h6>
                      </div>{" "}
                      <button class="btn-block btn-blue">
                        {" "}
                        <span>
                          {" "}
                          <span id="checkout">Checkout</span>{" "}
                          <span id="check-amt">$26.48</span>{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
  