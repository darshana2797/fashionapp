import { Component } from "react";
import Login from "../../components/Login";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: {}
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#36B863", height: "40vh", flex: 1 }}
        >
          <Login />
        </div>
      </div>
    );
  }
}
