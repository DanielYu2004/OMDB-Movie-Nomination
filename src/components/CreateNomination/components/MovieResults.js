import React, { Component } from "react";

import { Card, Typography, Button, Empty, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import MovieModal from "../../MovieModal/MovieModal";

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
        className="create-nomination__movie-poster create-nomination__movie-result-poster"
      ></img>
      <div className="create-nomination__movie-result-card__side">
        <Title
          className="create-nomination__movie-result-card__title"
          level={4}
        >
          {props.Title}
        </Title>

        <Text type="secondary">{props.Year}</Text>
      </div>
      <div className="create-nomination__movie-result-card__side-action">
        <Button
          type="primary"
          disabled={props.nominated}
          onClick={() => props.nominateMovie(props.imdbID)}
        >
          Nominate
        </Button>
        <span className="create-nomination__movie-result-card__info-button">
          <InfoCircleOutlined
            className="create-nomination__movie-result-card__info-button__icon"
            onClick={() => props.showMovieModal(props.imdbID)}
          />
        </span>
      </div>
    </Card>
  );
};

class MovieResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: [],
      visible: false,
      modalID: "",
    };
    this.showMovieModal = this.showMovieModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieResults !== this.state.movieResults) {
      this.setState({ movieResults: nextProps.movieResults });
    }
  }

  showMovieModal(imdbID) {
    this.setState({ visible: true, modalID: imdbID });
  }

  handleNominate(imdbID) {
    this.props.nominateMovie(imdbID);
    this.setState({ visible: false });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Card
        className="create-nomination__card create-nomination__search-results"
        style={{ flex: 1 }}
        title={`Results for "${this.props.searchTerm}"`}
      >
        {this.props.loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
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
                showMovieModal={this.showMovieModal}
              ></MovieResultItem>
            );
          })
        )}

        <MovieModal
          visible={this.state.visible}
          imdbID={this.state.modalID}
          handleNominate={this.handleNominate}
          handleCancel={this.handleCancel}
          nominated={this.props.nominatedIDs.includes(this.state.modalID)}
        ></MovieModal>
      </Card>
    );
  }
}

export default MovieResults;
