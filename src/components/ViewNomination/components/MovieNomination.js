import { Card, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Title } = Typography;

const MovieNomination = (props) => {
  return (
    <Card
      className="view-nomination__card"
      cover={
        <img
          alt="movie poster"
          src={props.Poster}
          className="create-nomination__movie-poster"
        ></img>
      }
      bodyStyle={{ width: "100%" }}
    >
      <div className="view-nomination__card__content">
        <Title level={4}>
          {props.Title} ({props.Year})
        </Title>
        <InfoCircleOutlined
          className="create-nomination__movie-result-card__info-button__icon"
          onClick={() => props.showMovieModal(props.imdbID)}
        />
      </div>
    </Card>
  );
};

// Basic propType validation
MovieNomination.propTypes = {
  Title: PropTypes.string,
  Poster: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  showMovieModal: PropTypes.func,
};

export default MovieNomination;
