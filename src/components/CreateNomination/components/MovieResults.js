import React, { Component } from "react";

import { Card, Typography, Button, Empty, Spin } from "antd";

const { Title, Text } = Typography;

const MovieResultItem = (props) => {
  return (
    <Card
      className="create-nomination__movie-result-card"
      bodyStyle={{ height: "fit-content", display: "flex" }}
    >
      <img
        alt="movie poster"
        src={props.Poster}
        className="create-nomination__movie-poster"
      ></img>
      <div className="create-nomination__movie-result-card__side">
        <Title level={4}>{props.Title}</Title>

        <Text type="secondary">{props.Year}</Text>
      </div>
      <Button
        type="primary"
        disabled={props.nominated}
        onClick={() => props.nominateMovie(props.imdbID)}
      >
        Nominate
      </Button>
    </Card>
  );
};

class MovieResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieResults !== this.state.movieResults) {
      this.setState({ movieResults: nextProps.movieResults });
    }
  }

  render() {
    return (
      <Card
        className="create-nomination__card create-nomination__search-results"
        style={{ flex: 1 }}
        title={`Results for "${this.props.searchTerm}"`}
      >
        {this.props.loading ? (
          <div style={{display: "flex", justifyContent: "center"}}>
            <Spin />
          </div>
        ) : this.state.movieResults.length === 0 ? (
          <Empty description={<span>No Movies Found</span>}></Empty>
        ) : (
          this.state.movieResults.map((val) => {
            return (
              <MovieResultItem
                {...val}
                key={val.imdbID}
                nominateMovie={this.props.nominateMovie}
              ></MovieResultItem>
            );
          })
        )}
      </Card>
    );
  }
}

export default MovieResults;
