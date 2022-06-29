import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const RestaurantsCollections = () => {
  const [isMobile, setMobile] = useState(
    window.screen.orientation.type === "portrait-primary"
  );

  const updateScreenSize = () => {
    setMobile(window.screen.orientation.type === "portrait-primary");
    console.log("resized!! is this mobile? : ", isMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const [restaurantListNumber, setRestaurantList] = useState(0);

  useEffect(() => {
    console.log("list selected: ", restaurantListNumber);
  }, [restaurantListNumber]);

  const list_name = "Climbing,Top Rated,New".split(",");

  const restaurant_list = [
    [
      {
        id: "000",
        imgUrl:
          "https://image.resy.com/3/003/2/55555/be4a7fd0bf7b4454a40fa873af84c7b06fa0f9c2/jpg/640x360",
        name: "Carne Mare",
        rating: 4.7,
        ratingCount: 24,
        cuisineType: "Italian",
        priceIndicator: 3,
        location: "Seaport",
      },
      {
        id: "001",
        imgUrl:
          "https://image.resy.com/3/003/2/55555/be4a7fd0bf7b4454a40fa873af84c7b06fa0f9c2/jpg/640x360",
        name: "Carne Mare",
        rating: 4.7,
        ratingCount: 24,
        cuisineType: "Italian",
        priceIndicator: 3,
        location: "Seaport",
      },
      {
        id: "002",
        imgUrl:
          "https://image.resy.com/3/003/2/55555/be4a7fd0bf7b4454a40fa873af84c7b06fa0f9c2/jpg/640x360",
        name: "Carne Mare",
        rating: 4.7,
        ratingCount: 24,
        cuisineType: "Italian",
        priceIndicator: 3,
        location: "Seaport",
      },
      {
        id: "003",
        imgUrl:
          "https://image.resy.com/3/003/2/55555/be4a7fd0bf7b4454a40fa873af84c7b06fa0f9c2/jpg/640x360",
        name: "Carne Mare",
        rating: 4.7,
        ratingCount: 24,
        cuisineType: "Italian",
        priceIndicator: 3,
        location: "Seaport",
      },
      {
        id: "004",
        imgUrl:
          "https://image.resy.com/3/003/2/55555/be4a7fd0bf7b4454a40fa873af84c7b06fa0f9c2/jpg/640x360",
        name: "Carne Mare",
        rating: 4.7,
        ratingCount: 24,
        cuisineType: "Italian",
        priceIndicator: 3,
        location: "Seaport",
      },
    ],
    [
      {
        id: "100",
        imgUrl:
          "https://image.resy.com/3/003/2/54504/47c99d5dfbc34700f79f7d36b5af94be7d7bac3d/jpg/640x360",
        name: "Ito",
        rating: 4.9,
        ratingCount: 24,
        cuisineType: "Sushi",
        priceIndicator: 4,
        location: "New York",
      },
      {
        id: "101",
        imgUrl:
          "https://image.resy.com/3/003/2/54504/47c99d5dfbc34700f79f7d36b5af94be7d7bac3d/jpg/640x360",
        name: "Ito",
        rating: 4.9,
        ratingCount: 24,
        cuisineType: "Sushi",
        priceIndicator: 4,
        location: "New York",
      },
      {
        id: "102",
        imgUrl:
          "https://image.resy.com/3/003/2/54504/47c99d5dfbc34700f79f7d36b5af94be7d7bac3d/jpg/640x360",
        name: "Ito",
        rating: 4.9,
        ratingCount: 24,
        cuisineType: "Sushi",
        priceIndicator: 4,
        location: "New York",
      },
      {
        id: "103",
        imgUrl:
          "https://image.resy.com/3/003/2/54504/47c99d5dfbc34700f79f7d36b5af94be7d7bac3d/jpg/640x360",
        name: "Ito",
        rating: 4.9,
        ratingCount: 24,
        cuisineType: "Sushi",
        priceIndicator: 4,
        location: "New York",
      },
      {
        id: "104",
        imgUrl:
          "https://image.resy.com/3/003/2/54504/47c99d5dfbc34700f79f7d36b5af94be7d7bac3d/jpg/640x360",
        name: "Ito",
        rating: 4.9,
        ratingCount: 24,
        cuisineType: "Sushi",
        priceIndicator: 4,
        location: "New York",
      },
    ],
    [
      {
        id: "200",
        imgUrl:
          "https://image.resy.com/3/003/2/59549/ae71185d1c6eeb2feb67419769c3133a74782877/jpg/640x360",
        name: "The Bar at Manhatta",
        rating: 4.8,
        ratingCount: 24,
        cuisineType: "American",
        priceIndicator: 1,
        location: "Financial District",
      },
      {
        id: "201",
        imgUrl:
          "https://image.resy.com/3/003/2/59549/ae71185d1c6eeb2feb67419769c3133a74782877/jpg/640x360",
        name: "The Bar at Manhatta",
        rating: 4.8,
        ratingCount: 24,
        cuisineType: "American",
        priceIndicator: 1,
        location: "Financial District",
      },
      {
        id: "202",
        imgUrl:
          "https://image.resy.com/3/003/2/59549/ae71185d1c6eeb2feb67419769c3133a74782877/jpg/640x360",
        name: "The Bar at Manhatta",
        rating: 4.8,
        ratingCount: 24,
        cuisineType: "American",
        priceIndicator: 1,
        location: "Financial District",
      },
      {
        id: "203",
        imgUrl:
          "https://image.resy.com/3/003/2/59549/ae71185d1c6eeb2feb67419769c3133a74782877/jpg/640x360",
        name: "The Bar at Manhatta",
        rating: 4.8,
        ratingCount: 24,
        cuisineType: "American",
        priceIndicator: 1,
        location: "Financial District",
      },
      {
        id: "204",
        imgUrl:
          "https://image.resy.com/3/003/2/59549/ae71185d1c6eeb2feb67419769c3133a74782877/jpg/640x360",
        name: "The Bar at Manhatta",
        rating: 4.8,
        ratingCount: 24,
        cuisineType: "American",
        priceIndicator: 1,
        location: "Financial District",
      },
    ],
  ];

  return (
    <>
      <Container className="restaurants-collection">
        <hr className="mt-4 mb-5" />
        {isMobile ? (
          <Card className="mobile">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey={`#${list_name[0]}`}>
                <Nav.Item className="col-4">
                  <Nav.Link
                    onClick={() => setRestaurantList(0)}
                    href={`#${list_name[0]}`}
                  >
                    <svg
                      height="30"
                      viewBox="0 0 20 20"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m17.35938 7.76758c-.0864087-.16458531-.2569908-.2676479-.44288-.26758h-6.1665v-6.1665c.0000624-.21892371-.1423276-.41241966-.3513629-.47747232s-.43607981.01347369-.5602571.19377232l-6.6665 9.66651c-.1055599.1529278-.11755909.3517951-.03115268.5163057.08640641.1645105.25695077.2674999.44277268.2673843h6.1665v6.1665c-.00003423.2189087.14235603.4123789.351377.4774271.2090209.0650482.436051-.0134568.560243-.1937271l6.6665-9.66651c.1055582-.15284709.1175988-.35164.03126-.51611zm-6.60938 8.29342v-5.061c.000077-.1326318-.0525767-.2598535-.1463616-.3536384s-.2210066-.1464386-.3536384-.1463616h-5.71436l5.21436-7.561v5.061c-.00007699.13263183.0525767.25985353.14636159.35363841.09378488.09378489.22100661.14643858.35363841.14636159h5.71436zm-3.58643-3.20358-3 4.42334-.82714-.56152 3-4.42334zm.18067 2.42676.81152.585-2.57129 3.56539-.81152-.585z"></path>
                    </svg>
                    <h1>{list_name[0]}</h1>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-4">
                  <Nav.Link
                    onClick={() => setRestaurantList(1)}
                    href="#top-rated"
                  >
                    <svg
                      height="30"
                      viewBox="0 0 20 20"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m14.5 1.5h-9c-1.9586793.0003755-3.62909121 1.4187827-3.94695047 3.35149846-.31785925 1.93271577.81030738 3.81138418 2.66570047 4.43903154l.32031-.94727c-1.39156407-.47080899-2.23768295-1.87985387-1.99929552-3.32943419.23838742-1.44958031 1.49118429-2.51345279 2.96023552-2.51382581v4.5c.00711158 2.28482531 1.72882291 4.1999967 4 4.44946v2.34354l-3.85352 3.85348c-.14297083.1429978-.18573564.3580331-.10835674.5448527.07737891.1868195.25966637.3086673.46187674.3086673h8c.2022104 0 .3844978-.1218478.4618767-.3086673.0773789-.1868196.0346141-.4018549-.1083567-.5448527l-3.85352-3.85348v-2.34354c2.2711771-.2494633 3.9928884-2.16463469 4-4.44946v-4.5c1.4690512.00037302 2.7218481 1.0642455 2.9602355 2.51382581.2383874 1.44958032-.6077314 2.8586252-1.9992955 3.32943419l.32031.94727c1.8553931-.62764736 2.9835597-2.50631577 2.6657005-4.43903154-.3178593-1.93271576-1.9882712-3.35112296-3.9469505-3.35149846zm-1.707 16h-5.586l2.793-2.793zm.707-10.5c0 1.9329966-1.5670034 3.5-3.5 3.5s-3.5-1.5670034-3.5-3.5v-4.5h7z"></path>
                    </svg>
                    <h1>{list_name[1]}</h1>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-4">
                  <Nav.Link onClick={() => setRestaurantList(2)} href="#new">
                    <svg
                      height="30"
                      viewBox="0 0 20 20"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m14.17334 7.96875c.1962953-.07243946.3266657-.25951493.3266657-.46875s-.1303704-.39631054-.3266657-.46875l-2.72314-1.00781c-1.1462917-.42363115-2.05000885-1.32734833-2.47364-2.47364l-1.00781-2.72314c-.08675499-.18000759-.26892718-.29443506-.46875572-.29443506-.1998171 0-.38198929.11442747-.46874428.29443506l-1.00781 2.72314c-.42363115 1.14629167-1.32734833 2.05000885-2.47364 2.47364l-2.72314 1.00781c-.19629528.07243946-.32666572.25951493-.32666572.46875s.13037044.39631054.32666572.46875l2.72314 1.00781c1.14629167.42363115 2.05000885 1.3273483 2.47364 2.47364l1.00781 2.72314c.07243946.1962953.25951493.3266657.46874428.3266657.20924079 0 .39631626-.1303704.46875572-.3266657l1.00781-2.72314c.42363115-1.1462917 1.3273483-2.05000885 2.47364-2.47364zm-6.13428 3.13477-.53906 1.45605-.53906-1.45605c-.5243665-1.42036585-1.64409415-2.5400935-3.06446-3.06446l-1.45605-.53906 1.456-.53906c1.42038486-.52435428 2.54013254-1.6440837 3.06451-3.06446l.53906-1.45605.53906 1.45605c.5243665 1.42036585 1.64409415 2.5400935 3.06446 3.06446l1.45605.53906-1.45605.53906c-1.42036585.5243665-2.5400935 1.64409415-3.06446 3.06446zm11.13428 3.42773-1.67578-.62012c-.652822-.2412012-1.1674888-.755868-1.40869-1.40869l-.62012-1.67578c-.086755-.1800076-.2689272-.2944351-.4687557-.2944351-.1998171 0-.3819893.1144275-.4687443.2944351l-.62012 1.67578c-.2412012.652822-.755868 1.1674888-1.40869 1.40869l-1.67578.62012c-.1962953.0724395-.3266657.2595149-.3266657.46875s.1303704.3963105.3266657.46875l1.67578.62012c.652822.2412012 1.1674888.755868 1.40869 1.40869l.62012 1.67578c.0724395.1962953.2595149.3266657.4687443.3266657.2092408 0 .3963162-.1303704.4687557-.3266657l.62012-1.67578c.2412012-.652822.755868-1.1674888 1.40869-1.40869l1.67578-.62012c.1962953-.0724395.3266657-.2595149.3266657-.46875s-.1303704-.3963105-.3266657-.46875zm-2.02246.62012c-.9268986.3419327-1.6575773 1.0726114-1.99951 1.99951l-.15137.4082-.15137-.4082c-.3419327-.9268986-1.0726114-1.6575773-1.99951-1.99951l-.4082-.15137.4082-.15137c.9268986-.3419327 1.6575773-1.0726114 1.99951-1.99951l.15137-.4082.15137.4082c.3419327.9268986 1.0726114 1.6575773 1.99951 1.99951l.4082.15137z"></path>
                    </svg>
                    <h1>{list_name[2]}</h1>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {/* {restaurantListNumber === 0 && ( */}
              <ListGroup>
                {/* {restaurant_list[restaurantListNumber].map(....)} */}
                {restaurant_list[restaurantListNumber].map((_, key) => (
                  <Link to="/restaurant">
                    <ListGroupItem className="list-item-container">
                      <Row className="list-item">
                        <Col
                          xs={3}
                          sm={3}
                          className="restaurant-image-container"
                          // style={{
                          //   backgroundImage: `${restaurant_list[restaurantListNumber][key].imgUrl}`,
                          // }}
                        >
                          <img
                            src={
                              restaurant_list[restaurantListNumber][key].imgUrl
                            }
                            alt=""
                            className="restaurant-image"
                          />
                        </Col>
                        <Col xs={9} sm={9} className="restaurant-details">
                          <h1>
                            {restaurant_list[restaurantListNumber][key].name}
                          </h1>
                          <p>
                            {restaurant_list[restaurantListNumber][key].rating}
                          </p>
                          <p>
                            {
                              restaurant_list[restaurantListNumber][key]
                                .location
                            }
                          </p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </Link>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        ) : (
          <CardGroup className="landscape">
            <Card>
              <Card.Body>
                <Card.Title>
                  <svg
                    height="30"
                    viewBox="0 0 20 20"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m17.35938 7.76758c-.0864087-.16458531-.2569908-.2676479-.44288-.26758h-6.1665v-6.1665c.0000624-.21892371-.1423276-.41241966-.3513629-.47747232s-.43607981.01347369-.5602571.19377232l-6.6665 9.66651c-.1055599.1529278-.11755909.3517951-.03115268.5163057.08640641.1645105.25695077.2674999.44277268.2673843h6.1665v6.1665c-.00003423.2189087.14235603.4123789.351377.4774271.2090209.0650482.436051-.0134568.560243-.1937271l6.6665-9.66651c.1055582-.15284709.1175988-.35164.03126-.51611zm-6.60938 8.29342v-5.061c.000077-.1326318-.0525767-.2598535-.1463616-.3536384s-.2210066-.1464386-.3536384-.1463616h-5.71436l5.21436-7.561v5.061c-.00007699.13263183.0525767.25985353.14636159.35363841.09378488.09378489.22100661.14643858.35363841.14636159h5.71436zm-3.58643-3.20358-3 4.42334-.82714-.56152 3-4.42334zm.18067 2.42676.81152.585-2.57129 3.56539-.81152-.585z"></path>
                  </svg>
                  <h1>{list_name[0]}</h1>
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    {restaurant_list[0].map((_, key) => (
                      <Link
                        to={`restaurant/` + restaurant_list[0][key].id}
                        onClick={() => {
                          console.log(
                            `clicked ${restaurant_list[0][key].id} in list`
                          );
                        }}
                      >
                        <ListGroupItem className="list-item-container">
                          <Row className="list-item">
                            <Col
                              xs={3}
                              sm={3}
                              className="restaurant-image-container"
                            >
                              <img
                                src={restaurant_list[0][key].imgUrl}
                                alt=""
                                className="restaurant-image"
                              />
                            </Col>
                            <Col xs={9} sm={9} className="restaurant-details">
                              <h1>{restaurant_list[0][key].name}</h1>
                              <p>{restaurant_list[0][key].rating}</p>
                              <p>{restaurant_list[0][key].location}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Link>
                    ))}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <svg
                    height="30"
                    viewBox="0 0 20 20"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14.5 1.5h-9c-1.9586793.0003755-3.62909121 1.4187827-3.94695047 3.35149846-.31785925 1.93271577.81030738 3.81138418 2.66570047 4.43903154l.32031-.94727c-1.39156407-.47080899-2.23768295-1.87985387-1.99929552-3.32943419.23838742-1.44958031 1.49118429-2.51345279 2.96023552-2.51382581v4.5c.00711158 2.28482531 1.72882291 4.1999967 4 4.44946v2.34354l-3.85352 3.85348c-.14297083.1429978-.18573564.3580331-.10835674.5448527.07737891.1868195.25966637.3086673.46187674.3086673h8c.2022104 0 .3844978-.1218478.4618767-.3086673.0773789-.1868196.0346141-.4018549-.1083567-.5448527l-3.85352-3.85348v-2.34354c2.2711771-.2494633 3.9928884-2.16463469 4-4.44946v-4.5c1.4690512.00037302 2.7218481 1.0642455 2.9602355 2.51382581.2383874 1.44958032-.6077314 2.8586252-1.9992955 3.32943419l.32031.94727c1.8553931-.62764736 2.9835597-2.50631577 2.6657005-4.43903154-.3178593-1.93271576-1.9882712-3.35112296-3.9469505-3.35149846zm-1.707 16h-5.586l2.793-2.793zm.707-10.5c0 1.9329966-1.5670034 3.5-3.5 3.5s-3.5-1.5670034-3.5-3.5v-4.5h7z"></path>
                  </svg>
                  <h1>{list_name[1]}</h1>
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    {restaurant_list[1].map((_, key) => (
                      <Link to={`restaurant/` + restaurant_list[1][key].id}>
                        <ListGroupItem className="list-item-container">
                          <Row className="list-item">
                            <Col
                              xs={3}
                              sm={3}
                              className="restaurant-image-container"
                            >
                              <img
                                src={restaurant_list[1][key].imgUrl}
                                alt=""
                                className="restaurant-image"
                              />
                            </Col>
                            <Col xs={9} sm={9} className="restaurant-details">
                              <h1>{restaurant_list[1][key].name}</h1>
                              <p>{restaurant_list[1][key].rating}</p>
                              <p>{restaurant_list[1][key].location}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Link>
                    ))}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <svg
                    height="30"
                    viewBox="0 0 20 20"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14.17334 7.96875c.1962953-.07243946.3266657-.25951493.3266657-.46875s-.1303704-.39631054-.3266657-.46875l-2.72314-1.00781c-1.1462917-.42363115-2.05000885-1.32734833-2.47364-2.47364l-1.00781-2.72314c-.08675499-.18000759-.26892718-.29443506-.46875572-.29443506-.1998171 0-.38198929.11442747-.46874428.29443506l-1.00781 2.72314c-.42363115 1.14629167-1.32734833 2.05000885-2.47364 2.47364l-2.72314 1.00781c-.19629528.07243946-.32666572.25951493-.32666572.46875s.13037044.39631054.32666572.46875l2.72314 1.00781c1.14629167.42363115 2.05000885 1.3273483 2.47364 2.47364l1.00781 2.72314c.07243946.1962953.25951493.3266657.46874428.3266657.20924079 0 .39631626-.1303704.46875572-.3266657l1.00781-2.72314c.42363115-1.1462917 1.3273483-2.05000885 2.47364-2.47364zm-6.13428 3.13477-.53906 1.45605-.53906-1.45605c-.5243665-1.42036585-1.64409415-2.5400935-3.06446-3.06446l-1.45605-.53906 1.456-.53906c1.42038486-.52435428 2.54013254-1.6440837 3.06451-3.06446l.53906-1.45605.53906 1.45605c.5243665 1.42036585 1.64409415 2.5400935 3.06446 3.06446l1.45605.53906-1.45605.53906c-1.42036585.5243665-2.5400935 1.64409415-3.06446 3.06446zm11.13428 3.42773-1.67578-.62012c-.652822-.2412012-1.1674888-.755868-1.40869-1.40869l-.62012-1.67578c-.086755-.1800076-.2689272-.2944351-.4687557-.2944351-.1998171 0-.3819893.1144275-.4687443.2944351l-.62012 1.67578c-.2412012.652822-.755868 1.1674888-1.40869 1.40869l-1.67578.62012c-.1962953.0724395-.3266657.2595149-.3266657.46875s.1303704.3963105.3266657.46875l1.67578.62012c.652822.2412012 1.1674888.755868 1.40869 1.40869l.62012 1.67578c.0724395.1962953.2595149.3266657.4687443.3266657.2092408 0 .3963162-.1303704.4687557-.3266657l.62012-1.67578c.2412012-.652822.755868-1.1674888 1.40869-1.40869l1.67578-.62012c.1962953-.0724395.3266657-.2595149.3266657-.46875s-.1303704-.3963105-.3266657-.46875zm-2.02246.62012c-.9268986.3419327-1.6575773 1.0726114-1.99951 1.99951l-.15137.4082-.15137-.4082c-.3419327-.9268986-1.0726114-1.6575773-1.99951-1.99951l-.4082-.15137.4082-.15137c.9268986-.3419327 1.6575773-1.0726114 1.99951-1.99951l.15137-.4082.15137.4082c.3419327.9268986 1.0726114 1.6575773 1.99951 1.99951l.4082.15137z"></path>
                  </svg>
                  <h1>{list_name[2]}</h1>
                </Card.Title>
                <Card.Text>
                  <ListGroup>
                    {restaurant_list[2].map((_, key) => (
                      <Link to={`restaurant/` + restaurant_list[2][key].id}>
                        <ListGroupItem className="list-item-container">
                          <Row className="list-item">
                            <Col
                              xs={3}
                              sm={3}
                              className="restaurant-image-container"
                            >
                              <img
                                src={restaurant_list[2][key].imgUrl}
                                alt=""
                                className="restaurant-image"
                              />
                            </Col>
                            <Col xs={9} sm={9} className="restaurant-details">
                              <h1>{restaurant_list[2][key].name}</h1>
                              <p>{restaurant_list[2][key].rating}</p>
                              <p>{restaurant_list[2][key].location}</p>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </Link>
                    ))}
                  </ListGroup>
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
