import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Blogs(item) {
  return (
    <Col xs={3}>
    <Card
    bg={"secondary"}
    key={item.id}
    text={"white"}
    style={{ width: "18rem",marginRight:'10px',marginLeft:'20px' }}
    className="mb-2"
  >
    {console.log("the item is ",item)}
    <Card.Header>Blog</Card.Header>
    <Card.Body>
      <Card.Title> {item.item.title} </Card.Title>
      <Card.Text>{item.item.postText}</Card.Text>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default Blogs