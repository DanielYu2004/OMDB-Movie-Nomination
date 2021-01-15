import React from "react";

import { Card, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

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
      <Meta title={props.Title} description={props.Year} />
    </Card>
  );
};

// Basic propType validation
MovieNominationsItem.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  imdbID: PropTypes.string,
  removeNomination: PropTypes.func,
};

const MovieNominations = (props) => {
  return (
    <Card
      className="create-nomination__card"
      style={{ flex: 1 }}
      title={`My Nominations`}
      actions={[
        <Button
          type="primary"
          onClick={props.submitNominations}
          loading={props.loading}
        >
          Submit
        </Button>,
      ]}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.nominatedMovies.map((val) => {
          return (
            <MovieNominationsItem
              {...val}
              key={val.imdbID}
              removeNomination={props.removeNomination}
            ></MovieNominationsItem>
          );
        })}
      </div>
    </Card>
  );
};

// Basic propType validation
MovieNominations.propTypes = {
  nominatedMovies: PropTypes.array,
  removeNomination: PropTypes.func,
  submitNominations: PropTypes.func,
  loading: PropTypes.bool,
};

export default MovieNominations;
