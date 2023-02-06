import React from "react";
import Card from 'react-bootstrap/Card';

const Cards = ({prod}) => {
  return (
    <>
        <div className="col-md-4 col-12 col-lg-4">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={prod.imgsrc} />
                <Card.Body> 
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text> 
                        {prod.description}
                    </Card.Text>    
                </Card.Body>
            </Card>
        </div>
    </>
  );
};

export default Cards;
