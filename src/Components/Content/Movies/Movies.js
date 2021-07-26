import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.entries))
    }, [])
    const moviesData = movies.filter(movie => movie.programType == "movie" && movie.releaseYear >= "2010");
    moviesData.sort(function(a,b){
        return (a.title < b.title ? -1 : (a.title > b.title ? 1 : 0));
      })
      console.log(moviesData)
    return (
        <div className="d-flex flex-wrap">
        { moviesData.map(movie => (
                <div className="col-md-2 ps-3">
                    <Card style={{ height:'230px', borderRadius:'10px', }} className="my-2 shadow align-items-center">

                        <Card.Img variant="top" style={{ height:'150px' }} src={movie.images["Poster Art"].url} />
                        
                        <Card.Body>
                        <h6>{movie.title}</h6>

                        </Card.Body>

                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Movies;