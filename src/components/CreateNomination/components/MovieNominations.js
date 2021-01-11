import React, { Component } from "react";

import { Card, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const MovieNominationsItem = (props) => {
  return (
    <Card
      className="create-nomination__movie-result-card create-nomination__movie-nomination-card"
      cover={
        <img
          alt="movie poster"
          src={props.Poster}
          className="create-nomination__movie-poster create-nomination__movie-nomination-poster"
        ></img>
      }
      hoverable
      actions={[
        <DeleteOutlined
          key="delete"
          onClick={() => props.removeNomination(props.imdbID)}
        />,
      ]}
      bordered
    >
      <Meta
        title={props.Title}
        description={props.Year}
      />
    </Card>
  );
};

class MovieNominations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieNominations: [],
    };
  }

  render() {
    return (
      <Card
        className="create-nomination__card"
        style={{ flex: 1 }}
        title={`My Nominations`}
        actions={[<Button type="primary">Submit</Button>]}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.nominatedMovies.map((val) => {
            return (
              <MovieNominationsItem
                {...val}
                key={val.imdbID}
                removeNomination={this.props.removeNomination}
              ></MovieNominationsItem>
            );
          })}
        </div>
      </Card>
    );
  }
}

export default MovieNominations;
