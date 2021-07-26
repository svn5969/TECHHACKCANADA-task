import React from 'react';
import { Button, Card } from 'react-bootstrap';
import icon_movie from '../../images/movie.jpg';
import icon_series from '../../images/tv-series.png';
import bg from '../../images/bg.jpg';
import { useHistory } from "react-router-dom";
const Content = () => {
    let history = useHistory();

  function handleMovies(path) {
    history.push(`/${path}`);
  }

  function handleSeries(path) {
    history.push(`/${path}`);
  }
    return (
        <div className="d-flex flex-wrap mt-5 " style={{ height:'600px' }}>
           <div className="col-md-6 justify-content-center">
           <Card onClick={()=>handleMovies("movies")} className="ms-5 me-3">
                     
                     <Card.Img variant="top" className="imgg" style={{ BackgroundColor: 'red', height:'300px', }} src={icon_movie} />
                     <Card.Body>
                         <Card.Title>Movies</Card.Title>
                         <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                         </Card.Text>

                     </Card.Body>
                 
             </Card>
           </div>

           <div className="col-md-6">
           <Card onClick={()=>handleSeries("series")} className="ms-3 me-5">
                     
                     <Card.Img variant="top" className="imgg" style={{ BackgroundColor: 'red', height:'300px' }} src={icon_series} />
                     <Card.Body>
                         <Card.Title>Series</Card.Title>
                         <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                         </Card.Text>

                     </Card.Body>
                 
             </Card>
           </div>
        </div>
    );
};

export default Content;