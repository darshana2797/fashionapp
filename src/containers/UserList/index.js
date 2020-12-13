import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "../../components/Navbar";
import "../../CSS/styles.css";
import history from "../../history";
import { setSelectedUser } from "../App/actions";
import { getUsers } from "./actions";
import { selectUserListValue } from "./selectors";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let tableColumns = (
      <tr>
        <th
          className="tableHeading rightRowTable "
          scope="col"
          width={"10px"}
        ></th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          Name
        </th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          Gender
        </th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          DOB
        </th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          Contact
        </th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          Address
        </th>
        <th className="tableHeading rightRowTable " scope="col" width={"10px"}>
          Postcode
        </th>
        <th
          className="tableHeading rightRowTable "
          scope="col"
          width={"10px"}
        ></th>
      </tr>
    );

    let renderUsers =
      this.props.userList &&
      this.props.userList.map((user, idx) => {
        return (
          <tr
            key={idx}
            onClick={() => {
              // this.redirect(apartment);
            }}
            className="rowList"
          >
            <td>{idx + 1}</td>
            <td className="boldBlackSmall">
              {user.name.first + " " + user.name.last}
            </td>
            <td>{user.gender}</td>
            <td>{moment(user.dob.date).format("DD MMM YYYY")}</td>
            <td>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </td>
            <td>{user.location.state + ", " + user.location.country}</td>
            <td>{user.location.postcode}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.props.setSelectedUser(user);
                  history.push("/user-details", { user: user });
                }}
              >
                View Details
              </button>
            </td>
          </tr>
        );
      });

    return (
      <div className="container-fluid">
        <Navbar />
        <div
          className="row justify-content-center d-flex flex-row"
          style={{ backgroundColor: "#36B863", height: "40vh", flex: 1 }}
        >
          <div className="table-responsive">
            <h1 className="py-5">Customers</h1>
            <table
              className="table userTable marginTopThirty z-depth-2 border"
              class="table"
            >
              <thead>{tableColumns}</thead>
              <tbody>
                {this.props.userList && this.props.userList.length > 0 ? (
                  renderUsers
                ) : (
                  <tr style={{ height: "40vh", textAlign: "center" }}>
                    <td colspan="8" style={{ color: "#4D505C" }}>
                      No Records Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    setSelectedUser: user => {
      dispatch(setSelectedUser(user));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  userList: selectUserListValue("userList")
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
