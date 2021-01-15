import React, { Component } from "react";
import "./MovieModal.css";
import { Modal, Typography, Button, Spin } from "antd";
import PropTypes from "prop-types";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.imdbID !== this.state.imdbID) {
      // To detect when a new imdbID has been passed
      this.setState({ imdbID: nextProps.imdbID, loaded: false });
      searchMovieByID(nextProps.imdbID)
        .then((response) => {
          if (response.Response === "True") {
            console.log(response);
            this.setState({ data: response, loaded: true });
          } else {
            console.log(response);
            // Handle error
          }
        })
        .catch((err) => {
          console.log("error: ", err);
          // Handle error
        });
    }
  }

  render() {
    const { imdbID, loaded, data } = this.state;
    const { Year, Runtime, Rated, imdbRating, imdbVotes, Plot, Poster } = data;

    return (
      <Modal
        title={this.state.data.Title}
        visible={this.props.visible}
        onCancel={() => {
          this.props.handleCancel();
          this.setState({ data: {} });
        }}
        onOk={
          this.props.actionable
            ? () => this.props.handleNominate()
            : () => {
                this.props.handleCancel();
                this.setState({ data: {} });
              }
        }
        bodyStyle={{ display: "flex" }}
        footer={
          this.props.actionable
            ? [
                <Button key="back" onClick={this.props.handleCancel}>
                  Back
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  disabled={this.props.nominated}
                  onClick={() => this.props.handleNominate(imdbID)}
                >
                  Nominate
                </Button>,
              ]
            : [
                <Button
                  key="submit"
                  type="secondary"
                  onClick={() => {
                    this.props.handleCancel();
                    this.setState({ data: {} });
                  }}
                >
                  Back
                </Button>,
              ]
        }
      >
        {loaded ? (
          <>
            <img
              alt="movie poster"
              src={Poster}
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
        ) : (
          <Spin />
        )}
      </Modal>
    );
  }
}

// Basic propType validation
MovieModal.propTypes = {
  visible: PropTypes.bool,
  imdbID: PropTypes.string,
  nominated: PropTypes.bool,
  handleNominate: PropTypes.func,
  handleCancel: PropTypes.func,
  actionable: PropTypes.bool,
};

export default MovieModal;
