import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

export default class PeopleAlsoViewed extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3 mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-left">People also viewed</Card.Title>
            {this.props.deta.slice(3, 5).map((user) => {
              return (
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      style={{ heigh: "100px", width: "100px" }}
                      src={user.image}
                      roundedCircle
                    />
                  </Col>
                  <Col>
                    <b>{user.name}</b>
                    <p>{user.bio}</p>
                    <hr />
                  </Col>
                  <Col xs={6} md={4}></Col>
                </Row>
              );
            })}
          </Card.Body>
          <hr />
          <Card.Text>Show more </Card.Text>
        </Card>
      </div>
    );
  }
}
