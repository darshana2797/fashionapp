import React, { Component } from "react";
import { Card, CardDeck, Col, Nav, Row, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "../../components/Navbar";
// import "../../CSS/styles.css";
import { setSelectedUser } from "../App/actions";
import { getProducts } from "./actions";
import { selectProductListValue } from "./selectors";

class ProductListing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    console.log("~~~~~~~~~~~~~~~~~~`", this.props);
    let categories = [];
    this.props.productList &&
      this.props.productList.forEach(element => {
        categories.push(element.category);
      });
    let uniqueCategories = [...new Set(categories)];
    let products =
      this.props.productList &&
      this.props.productList.length > 0 &&
      this.props.productList.map(product => {
        return (
          <Card className="productCard" style={{ minWidth: "300px" }}>
            <Card.Body className="productCardBody">
              <Card.Img
                className="productCardImage"
                variant="top"
                src={product.image}
              />
              <Card.Title className="productCardTitle">
                {product.title}
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      });

    return (
      <div>
        <Card className="filterCard">
          {" "}
          Filter By -
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {uniqueCategories &&
                    uniqueCategories.length > 0 &&
                    uniqueCategories.map(item => {
                      return (
                        <Nav.Item style={{ marginTop: "5px" }}>
                          <Nav.Link className="bg-success" eventKey="first">
                            {item}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </Card>
        <div className="container-fluid">
          <Navbar />
          <div
            className="row justify-content-center d-flex flex-row"
            style={{ backgroundColor: "#36B863", height: "40vh", flex: 1 }}
          >
            <div className="table-responsive">
              <h1 className="py-5">Products</h1>
              <CardDeck>{products}</CardDeck>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
    setSelectedUser: user => {
      dispatch(setSelectedUser(user));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  productList: selectProductListValue("productList")
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
