import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";




const ShowDetail = (props) => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let response = await fetch(
                  "http://www.omdbapi.com/?apikey=2cd49fbb&i= " + id
                );
                if (response.ok) {
                  console.log("response ok!")
                let details = await response.json();
                setMovieDetails(details);

                } else {
                  console.log('Server Error')
                }
              } catch (error) {
                console.log(error);
              }
            };

        fetchAPI();
      }, []);

    return (
        <div className="container d-flex ">
            <h1 className="text-warning mx-auto mt-5">
            {props.title}tfdsfsdf
            </h1>
        </div>
    )
}

export default ShowDetail

