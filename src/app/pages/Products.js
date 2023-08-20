import React from "react";
import {useSubheader} from "../../_metronic/layout";

import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Nav,
  CardGroup,
  CardDeck,
  CardColumns
} from "react-bootstrap";
export const Products = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("صفحه محصولات");

  return (<div className="row">
  
<Card className="m-5" style={{ width: '18rem'}}>
  <Card.Img variant="top" src="https://sanvarifashion.com/images/product/2021/11/tummy-cover-ikat-low-rate-blous-collection-2021-11-13_13_39_29.jpeg" />
  <Card.Body>
    <Card.Title>تاپ تابستانه</Card.Title>
    <Card.Text>
    پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن 
    </Card.Text>
    <Button variant="success">افزودن به سبد</Button>
  </Card.Body>
</Card>
<>   </>
<Card className="m-5" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://sanvarifashion.com/images/product/2021/11/tummy-cover-ikat-low-rate-blous-collection-2021-11-13_13_39_29.jpeg" />
  <Card.Body>
    <Card.Title>تاپ تابستانه</Card.Title>
    <Card.Text>
    پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن پر کردن 
    </Card.Text>
    <Button variant="success">افزودن به سبد</Button>
  </Card.Body>
</Card>



  </div>);
};
