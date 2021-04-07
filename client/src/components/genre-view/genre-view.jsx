import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./genre-view.scss";

import { Link } from "react-router-dom";

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { genre, movie } = this.props;

    if (!genre) return null;

    return (
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Genre: {genre.Name}</Card.Title>
          <Card.Text>Description: {genre.Description}</Card.Text>
            <Button variant="primary" onClick={() => window.history.back()}>Back</Button>
        </Card.Body>
      </Card>
    );
  }
}