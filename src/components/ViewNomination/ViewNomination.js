import React, { Component } from "react";

import { Typography } from "antd";

import { getNominationByID } from "../../firebase";
import { MovieNomination } from "./components";
import { MovieModal } from "../";
import "./ViewNomination.css";

const { Title } = Typography;

class ViewNomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      modalID: "",
      visible: false,
    };
    this.showMovieModal = this.showMovieModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    getNominationByID(this.props.match.params.id)
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.setState({ movies: doc.data().nominations });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          // Handle error
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  showMovieModal(imdbID) {
    this.setState({ modalID: imdbID, visible: true });
  }

  handleCancel() {
    this.setState({ visible: false, modalID: "" });
  }

  render() {
    const { movies, visible, modalID } = this.state;
    return (
      <>
        <div className="view-nomination__title">
          <span>The</span> <span style={{ color: "#008060" }}>Shoppies</span>
        </div>
        <div className="view-nomination__content">
          <Title level={5}>Nominated Movie List (in no specified order):</Title>
          {movies.map((val) => {
            return (
              <MovieNomination
                {...val}
                key={val.imdbID}
                showMovieModal={this.showMovieModal}
              ></MovieNomination>
            );
          })}
          <MovieModal
            visible={visible}
            imdbID={modalID}
            handleCancel={this.handleCancel}
            actionable={false}
          ></MovieModal>
        </div>
      </>
    );
  }
}

export default ViewNomination;
