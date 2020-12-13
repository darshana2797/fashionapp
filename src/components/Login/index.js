import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {}
    };
  }

  onInputChange = event => {
    let credentials = {};
    credentials[event.target.id] = event.target.value;
    credentials[event.target.id + "Error"] = event.target.validationMessage;
    this.setState({ credentials });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (
      this.state.credentials.email == "admin@xyz.com" &&
      this.state.credentials.password == "Admin_007"
    ) {
      toast.success("Logged in as Admin");
    } else {
      toast.error("Login failed. Please try again.");
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <ToastContainer />
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: "#36B863",
            height: "40vh",
            flex: 1
          }}
        >
          <Card className="z-depth-1 px-lg-5 px-md-5">
            <Card.Body className="d-flex flex-column justify-content-center py-lg-5 py-md-5">
              <h2>LOGIN</h2>

              <div className="row mt-5 loginRow">
                <div className="col">
                  <form className="needs-validation">
                    <div className="form-group">
                      <label htmlFor="name">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your email"
                        onChange={event => this.onInputChange(event)}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {this.state.credentials.emailError}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Your password"
                        required
                        minLength="7"
                        maxLength="12"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please choose a valid password (between 7 and 10
                        characters).
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-success btn-block mt-5"
                      onClick={e => this.handleSubmitForm(e)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
