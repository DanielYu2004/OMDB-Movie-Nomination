import React, { Component } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { Typography, Card, Input, Button } from "antd";

const { Text } = Typography;

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <Card className="create-nomination__card" style={{ width: "100%" }}>
        <Text strong>Movie Title</Text>
        <span style={{ display: "flex" }}>
          <Input
            placeholder="Search for a movie..."
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            prefix={<SearchOutlined />}
            onPressEnter={() => {
              this.props.searchMovieResults(this.state.text);
              this.setState({ text: "" });
            }}
          />
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              this.props.searchMovieResults(this.state.text);
              this.setState({ text: "" });
            }}
          >
            Search
          </Button>
        </span>
      </Card>
    );
  }
}

export default MovieSearch;
