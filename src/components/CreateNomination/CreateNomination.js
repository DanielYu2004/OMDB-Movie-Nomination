import React, { Component } from "react";
import "./CreateNomination.css";

import { searchMovieResults } from "../../api";
import { MovieSearch, MovieResults } from "./components";

import { Typography, Card } from "antd";

const { Title } = Typography;

class CreateNomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      movieResults: [],
    };
    this.searchMovieResults = this.searchMovieResults.bind(this);
  }

  searchMovieResults(searchTerm) {
    this.setState({ searchTerm });
    searchMovieResults(searchTerm)
      .then((response) => {
        if (response.Response === "True") {
          // "True" is indeed a string, just how the OMDb API is structured

          this.setState({ movieResults: response.Search });
          console.log(this.state.movieResults);
        } else {
          // Handle Error
        }
      })
      .catch((err) => {
        // Handle Error
        console.log(err);
      });
  }

  render() {
    const { movieResults, searchTerm } = this.state;

    return (
      <div className="create-nomination">
        <Title className="create-nomination__title">
          The Shoppies Nomination
        </Title>
        <div className="create-nomination__container">
          <MovieSearch
            searchMovieResults={this.searchMovieResults}
          ></MovieSearch>
          <MovieResults
            movieResults={movieResults}
            searchTerm={searchTerm}
          ></MovieResults>

          <Card
            className="create-nomination__card"
            style={{ flex: 1 }}
            title={`My Nominations`}
          ></Card>
        </div>
      </div>
    );
  }
}

export default CreateNomination;
