import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BlogPostGrid = () => {
  const card = [
    {
      img: "/blog-images/helen-nguyen-800x450.jpg",
      title: "Chef Features",
      text: "For Saigon Social’s Helen Nguyen, Community Is Everything",
    },

    {
      img: "/blog-images/kokomo-lineup-800x450.jpg",
      title: "Resy Lineup",
      text: "The Resy Lineup: Drag Brunches, a Burger Pop-Up, and Juneteenth Celebrations",
    },

    {
      img: "/blog-images/owamni-800x537.jpg",
      title: "Guides",
      text: "The 2022 James Beard Awards: The Full List of Winners",
    },

    {
      img: "/blog-images/3-2-800x450.jpg",
      title: "Exclusive offers",
      text: "Reward Your Love of Restaurants With American Express",
    },
  ];

  return (
    <div className="BlogPostGrid">
      <Row className="flex-nowrap">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col xs={12} sm={5} md={4} lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src={card[idx].img}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>{card[idx].title}</Card.Title>
                <Card.Text>{card[idx].text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogPostGrid;
