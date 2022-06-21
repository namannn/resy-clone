import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Container,
  ListGroup,
  Nav,
} from "react-bootstrap";

const RestaurantsCollections = () => {
  const [isMobile, setMobile] = useState(
    window.screen.orientation.type === "portrait-primary"
  );

  const updateScreenSize = () => {
    setMobile(window.screen.orientation.type === "portrait-primary");
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const [restaurantList, setRestaurantList] = useState(0);

  useEffect(() => {
    console.log("list selected: ", restaurantList);
  }, [restaurantList]);

  const list_name = "Climbing,Top Rated,New on Resy".split(",");

  return (
    <>
      <Container className="restaurants-collection">
        <hr className="mt-4 mb-5" />
        {isMobile ? (
          <Card className="mobile">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey={`#${list_name[0]}`}>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => setRestaurantList(0)}
                    href={`#${list_name[0]}`}
                  >
                    {list_name[0]}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => setRestaurantList(1)}
                    href="#top-rated"
                  >
                    {list_name[1]}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setRestaurantList(2)} href="#new">
                    {list_name[2]}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {restaurantList === 0 && (
                <ListGroup>
                  <ListGroup.Item>ListGroup item</ListGroup.Item>
                  <ListGroup.Item>ListGroup item</ListGroup.Item>
                  <ListGroup.Item>ListGroup item</ListGroup.Item>
                  <ListGroup.Item>ListGroup item</ListGroup.Item>
                </ListGroup>
              )}

              {restaurantList === 1 && (
                <ListGroup>
                  <ListGroup.Item>ListGroup item 1</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 1</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 1</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 1</ListGroup.Item>
                </ListGroup>
              )}

              {restaurantList === 2 && (
                <ListGroup>
                  <ListGroup.Item>ListGroup item 2</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 2</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 2</ListGroup.Item>
                  <ListGroup.Item>ListGroup item 2</ListGroup.Item>
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        ) : (
          <CardGroup className="landscape">
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>{list_name[0]}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>{list_name[1]}</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>{list_name[2]}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        )}
      </Container>
    </>
  );
};

export default RestaurantsCollections;
