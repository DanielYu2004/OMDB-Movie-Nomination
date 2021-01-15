import React, { Component } from "react";

import { Card, Typography, Button, Empty, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
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

// Basic propType validation
MovieResultItem.propTypes = {
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  nominated: PropTypes.bool,
  nominateMovie: PropTypes.func,
  showMovieModal: PropTypes.func
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

  // Can also use getDerivedStateFromProps to avoid deprecated warning
  componentWillReceiveProps(nextProps) {
    if (nextProps.movieResults !== this.state.movieResults) {
      this.setState({ movieResults: nextProps.movieResults }); // To update state when necessary
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
    this.setState({ visible: false, imdbID: "" });
  }

  render() {
    const { searchTerm, loading, nominateMovie, nominatedIDs } = this.props;
    const { movieResults, visible, modalID } = this.state;
    return (
      <Card
        className="create-nomination__card create-nomination__search-results"
        style={{ flex: 1 }}
        title={`Results for "${searchTerm}"`}
      >
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin />
          </div>
        ) : movieResults.length === 0 ? (
          <Empty description={<span>No Movies Found</span>}></Empty>
        ) : (
          movieResults.map((val) => {
            return (
              <MovieResultItem
                {...val}
                key={val.imdbID}
                nominateMovie={nominateMovie}
                showMovieModal={this.showMovieModal}
              ></MovieResultItem>
            );
          })
        )}

        <MovieModal
          visible={visible}
          imdbID={modalID}
          handleNominate={this.handleNominate}
          handleCancel={this.handleCancel}
          nominated={nominatedIDs.includes(modalID)}
          actionable={true}
        ></MovieModal>
      </Card>
    );
  }
}

// Basic propType validation
MovieResults.propTypes = {
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  nominateMovie: PropTypes.func,
  loading: PropTypes.bool,
  nominatedIDs: PropTypes.array,
};

export default MovieResults;
