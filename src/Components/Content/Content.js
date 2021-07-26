import React from 'react';
import { Card } from 'react-bootstrap';
import icon_movie from '../../images/movie.jpg';
import icon_series from '../../images/tv-series.png';
import { useHistory } from "react-router-dom";
import './Content.css'
const Content = () => {
    let history = useHistory();

  function handleMovies(path) {
    history.push(`/${path}`);
  }

  function handleSeries(path) {
    history.push(`/${path}`);
  }
    return (
        <div className="d-flex flex-wrap mt-5 " style={{ height:'900px' }}>
           <div className="col-md-6 justify-content-center">
           <Card onClick={()=>handleMovies("movies")} className="mx-5">
                     
                     <Card.Img variant="top" className="imgg" style={{ BackgroundColor: 'red', height:'300px', }} src={icon_movie} />
                     <Card.Body>
                         <Card.Title className="text-center title">Popular Movies</Card.Title>
                         

                     </Card.Body>
                 
             </Card>
           </div>

           <div className="col-md-6">
           <Card onClick={()=>handleSeries("series")} className="mx-5">
                     
                     <Card.Img variant="top" className="imgg" style={{ BackgroundColor: 'red', height:'300px' }} src={icon_series} />
                     <Card.Body>
                         <Card.Title className="text-center title">Popular Series</Card.Title>
                        

                     </Card.Body>
                 
             </Card>
           </div>
        </div>
    );
};

export default Content;