import React, { Component } from 'react';

import { Card, Typography, Button } from "antd";

const { Title, Text } = Typography;

const MovieResultItem = (props) => {
    return(
    <Card
        className="create-nomination__movie-result-card"
        bodyStyle={{height: "fit-content", display: "flex"}}
    >
        <img alt="movie poster" src={props.Poster} className="create-nomination__movie-poster"></img>
        <div className="create-nomination__movie-result-card__side">
            
            <Title level={4}>{props.Title}</Title>

            
            <Text type="secondary">{props.Year}</Text>

            

        </div>
        <Button type="primary">Nominate</Button>
        
        
    </Card>
    )
  }

class MovieResults extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card
                className="create-nomination__card create-nomination__search-results"
                style={{ flex: 1 }}
                title={`Results for "${this.props.searchTerm}"`}
            >
                {
                    this.props.movieResults.map((val) => {
                        return (
                            <MovieResultItem {...val} key={val.imdbID}></MovieResultItem>
                        )
                    })
                }

            </Card>
        );
    }
}
 
export default MovieResults;