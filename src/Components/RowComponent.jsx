import { Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import React from "react";

class RowComponent extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2cd49fbb&s=" + this.props.movie,
        {}
      );

      if (response.ok) {
        let jsonResponse = await response.json();
        let movies = jsonResponse.Search
        let moviesLimitedToSix = movies.splice(-6)
        this.setState({ movies: moviesLimitedToSix });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {/*<Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Form>*/}
        <h4 id="sagaName" className="ml-5 mt-4">{this.props.movie}</h4>
        <Row xs={1} md={4} lg={6} xl={8} className="m-3">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} className="mb-3">
              <SingleMovie id={movie.imdbID} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default RowComponent;
