import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from'../../../assets/1.png';
import second from'../../../assets/2.png';
import third from'../../../assets/3.png';

const EditorsInsights = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsights;