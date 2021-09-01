import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";


function ShowDetail(){
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let response = await fetch(
                  "http://www.omdbapi.com/?apikey=2cd49fbb&i=" + id
                );
                if (response.ok) {
                  console.log("response ok!")
                let details = await response.json();
                setMovieDetails(details);
                    console.log(details)
                } else {
                  console.log('Server Error')
                }
              } catch (error) {
                console.log(error);
              }
            };

        fetchAPI();
      },[]);


    return (
        <div className="container d-flex flex-column">
            <img src={movieDetails.Poster} alt="" className="w-25 mx-auto mt-5"/>
            <h2 className="text-warning mx-auto mt-5">
            {movieDetails.Title}
            </h2>
            
            <h4 className="text-warning mx-auto mt-3">Year: {movieDetails.Year}</h4>
            <h4 className="text-warning mx-auto">Rating: {movieDetails.Rated}</h4>
            <h4 className="text-warning mx-auto">{movieDetails.Awards}</h4>

        </div>
    )
}

export default ShowDetail

// import React from "react";

// class ShowDetail extends React.Component {
//   state = {
//     movieDetails: [],
//   };
  

//   componentDidMount = async () => {
//     try {
//       let response = await fetch(
//         "http://www.omdbapi.com/?apikey=2cd49fbb&i=" + this.props.match.params.id
//       );
//       if (response.ok) {
//       let details = await response.json();
//       this.setState({ movieDetails: details });
//       } else {
//         console.log('Server Error')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//                 <div className="container d-flex ">
//                     <h1 className="text-warning mx-auto mt-5">
//                     tfdsfsdf
//                     </h1>
//                 </div>
//              )
//   }
// }

// export default ShowDetail;


