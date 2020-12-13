import moment from "moment";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "../../components/Navbar";
import history from "../../history";
import { selectGlobalValue } from "../App/selectors";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: {}
    };
  }

  componentDidMount() {
    if (!this.props.selectedUser) history.push("/users");
  }

  render() {
    console.log("@@@@@@@@@@@", this.props);
    let user = this.props.selectedUser && this.props.selectedUser;
    return (
      <div className="container-fluid">
        <Navbar />
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#36B863", height: "40vh", flex: 1 }}
        >
          {user && (
            // <div class="col">
            <Card className="profileCard">
              <Card.Body>
                {/* <div className="col-sm-"> */}
                <div className="card-block text-center text-white">
                  <div className="m-b-25">
                    {" "}
                    <img
                      className="profileImage"
                      src={user && user.picture.large}
                      alt="User-Profile-Image"
                    />{" "}
                  </div>
                  <h6 className="f-w-600">
                    {user &&
                      user.name.title +
                        " " +
                        user.name.first +
                        " " +
                        user.name.last}
                  </h6>
                </div>
                {/* </div> */}
                {/* <div className="col-sm-8"> */}
                <div className="card-block">
                  <h4 className="m-b-20 p-b-5 b-b-default f-w-600">
                    Information
                  </h4>
                  <div className="row detailsRow">
                    <div className="col-sm-6">
                      <p className="detailHeading m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">{user.email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="detailHeading m-b-10 f-w-600">Phone</p>
                      <h6 className="text-muted f-w-400">{user.phone}</h6>
                      <h6 className="text-muted f-w-400">{user.cell}</h6>
                    </div>
                  </div>
                  <div className="row detailsRow">
                    <div className="col-sm-6">
                      <p className="detailHeading m-b-10 f-w-600">
                        Date Of Birth
                      </p>
                      <h6 className="text-muted f-w-400">
                        {moment(user.dob.date).format("DD MMM YYYY")}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="detailHeading m-b-10 f-w-600">Age</p>
                      <h6 className="text-muted f-w-400">{user.dob.age}</h6>
                    </div>
                  </div>
                  <div className="row detailsRow">
                    <div className="col-sm-6">
                      <p className="detailHeading m-b-10 f-w-600">Address</p>
                      <h6 className="text-muted f-w-400">
                        {user.location.street.number +
                          ", " +
                          user.location.street.name +
                          ", " +
                          user.location.country +
                          ", " +
                          user.location.postcode}
                      </h6>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </Card.Body>
            </Card>
            // </div>
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  selectedUser: selectGlobalValue("selectedUser")
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
