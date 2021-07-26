import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Series = () => {
    const [series, setSeries] = useState([])
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setSeries(data.entries))
    }, [])
    const seriesData = series.filter(series => series.programType == "series" && series.releaseYear >= "2010");
    seriesData.sort(function(a,b){
        return (a.title < b.title ? -1 : (a.title > b.title ? 1 : 0));
      })
      console.log(seriesData)
    return (
        <div className="d-flex flex-wrap">
        { seriesData.map(series => (
                <div className="col-md-2 ps-3">
                    <Card style={{ height:'230px', borderRadius:'10px', }} className="my-2 shadow align-items-center">

                        <Card.Img variant="top" style={{ height:'150px' }} src={series.images["Poster Art"].url} />
                      
                        <Card.Body>
                        <h6>{series.title}</h6>

                        </Card.Body>

                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Series;