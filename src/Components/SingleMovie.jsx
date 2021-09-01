import React from "react";

import { Card, Spinner, Alert } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    Poster: [],
    isLoading: true,
    isError: false,
    errorMessage: "",
  };

  componentDidMount = async () => {

    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2cd49fbb&i= " + this.props.id
      );
      if (response.ok) {
        console.log("response ok!")
      let image = await response.json();
      this.setState({ Poster: image.Poster });
      this.setState({isLoading: false,})
      } else {
        console.log('Server Error')
        this.setState({
          isLoading: false,
          isError: true,
      })
      }
    } catch (error) {
      console.log(error);
      this.setState({isLoading: false, isError: true})
    }
  };

  render() {
    return (
      
      <div>
                 {
                    this.state.isLoading && 
                    <Spinner animation="border" variant="dark" className="mx-auto" />
                }
                  {
                    this.state.isError &&
                    <Alert variant="danger">
                        An error occurred!
                    </Alert>
                }
        <Card id="netflixCard">
          <Card.Img id="cardImg" variant="top" src={this.state.Poster} />
        </Card>
      </div>
    );
  }
}

export default SingleMovie;
