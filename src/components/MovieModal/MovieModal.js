import React, { Component } from "react";
import "./MovieModal.css";
import { Modal, Typography, Button } from "antd";

import { searchMovieByID } from "../../api";

const { Text, Title } = Typography;

class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbID: "",
      data: {},
      loaded: false,
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.imdbID !== this.state.imdbID) {
      this.setState({ imdbID: nextProps.imdbID });
      searchMovieByID(nextProps.imdbID).then((response) => {
        if (response.Response === "True") {
          console.log(response);
          this.setState({ data: response, loaded: true });
        }
      });
    }
  }

  render() {
    const {
      Year,
      Runtime,
      Rated,
      imdbRating,
      imdbVotes,
      Plot,
    } = this.state.data;

    return (
      <Modal
        title={this.state.data.Title}
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        onOk={this.props.handleNominate}
        bodyStyle={{ display: "flex" }}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={this.props.nominated}
            onClick={() => this.props.handleNominate(this.state.imdbID)}
          >
            Nominate
          </Button>,
        ]}
      >
        {this.state.loaded ? (
          <>
            <img
              alt="movie poster"
              src={this.state.data.Poster}
              className="create-nomination__movie-poster create-nomination__movie-nomination-poster"
            ></img>
            <div className="movie-modal__container">
              <Title level={4} className="movie-modal__container__title">
                {this.state.data.Title} ({Year})
              </Title>
              <Text type="secondary">
                {Runtime} ({Rated})
              </Text>
              <Text type="secondary">
                {imdbRating}/10 ({imdbVotes} voters)
              </Text>
              <Text>{Plot}</Text>
            </div>
          </>
        ) : null}
      </Modal>
    );
  }
}
export default MovieModal;
