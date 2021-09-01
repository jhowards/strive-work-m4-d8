import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";



function ShowDetail(){
    const [movieDetails, setMovieDetails] = useState([]);
    const [movieComments, setMovieComments] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                let response = await fetch(
                  "http://www.omdbapi.com/?apikey=2cd49fbb&i=" + id
                );
                if (response.ok) {
                  console.log("response ok!")
                let details = await response.json();
                setMovieDetails(details);
                console.log(details)
                setIsLoading(false);
                setIsError(false);
                } else {
                  console.log('Server Error')
                  setIsLoading(false);
                setIsError(true);
                }
              } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
              }
            };
            const fetchComments = async () => {
                try {
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA0MTg4NDUsImV4cCI6MTYzMTYyODQ0NX0.zIMrzOtDkjOPxVI-qkfVrjQbyig4tcBtT3pl-bAMbks");

                    
                    var requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };

                    let response = await fetch(
                      "https://striveschool-api.herokuapp.com/api/comments/" + id, requestOptions
                    );
                    if (response.ok) {
                      console.log("response ok!")
                    let comments = await response.json();
                    setMovieComments(comments);
                    console.log(comments)
                    } else {
                      console.log('Server Error')
                    }
                  } catch (error) {
                    console.log(error);

                  }
                };

        fetchMovie();
        fetchComments();
      },[]);


    return (
        
        <div className="container d-flex flex-column">
         {
                    isLoading && 
                    <Spinner animation="border" variant="dark" className="mx-auto" />
                }
                  {
                    isError &&
                    <Alert variant="danger">
                        An error occurred!
                    </Alert>
                }
         
            <img src={movieDetails.Poster} alt="" className="w-25 mx-auto mt-5"/>
            <h2 className="text-warning mx-auto mt-5">
            {movieDetails.Title}
            </h2>
            
            <h4 className="text-warning mx-auto mt-2">{movieDetails.Year}</h4>
            <h4 className="text-warning mx-auto mb-5">{movieDetails.Awards}</h4>
            <ol className="mx-auto commentList">
            {
                movieComments.map(c => (
                    <li className="text-warning" key={c.id}>{c.comment}</li>
                ))
            }
            </ol>

        </div>
    )
}

export default ShowDetail




