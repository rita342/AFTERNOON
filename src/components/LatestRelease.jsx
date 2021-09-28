import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import books  from "../data/history.json";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







  class LatestRelease extends Component { 

 
    render(){ 
  return (
    books.map(book => (
      <Row className="jusify-content-center">
        <Col md={6}>
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={book.img} />
<Card.Body>
<Card.Title>{book.title}</Card.Title>
<Card.Text>
{book.category}
</Card.Text>
<Button variant="primary">{book.price}</Button>
</Card.Body>
</Card>
</Col>
</Row>
 
)
    )
    )
}
} 

 
      
    
export default LatestRelease