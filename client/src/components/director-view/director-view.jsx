import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./director-view.scss";

import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { director, movie } = this.props;

    if (!director) return null;

    return (
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>Director: {director.Name}</Card.Title>
          <Card.Text>Description: {director.Bio}</Card.Text>
         
          {/* <Link to={`/movies/${movie._id}`}> */}
            <Button variant="primary" onClick={() => window.history.back()}>Back</Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
    );
  }
}