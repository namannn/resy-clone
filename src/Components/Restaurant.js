import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Restaurant = (props) => {
  const { id } = useParams();
  const [isMobile, setMobile] = useState(window.innerWidth < "768");

  const updateScreenSize = () => {
    setMobile(window.outerWidth < "768");
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const restaurant_list = [
    {
      id: "000",
      imgUrl:
        "https://image.resy.com/3/003/1/60029/70d5aea3b27940831f08ad35493d57268658db8a/jpg/1:1/800",
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
        "https://image.resy.com/3/003/1/60029/70d5aea3b27940831f08ad35493d57268658db8a/jpg/1:1/800",
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
        "https://image.resy.com/3/003/1/60029/70d5aea3b27940831f08ad35493d57268658db8a/jpg/1:1/800",
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
        "https://image.resy.com/3/003/1/60029/70d5aea3b27940831f08ad35493d57268658db8a/jpg/1:1/800",
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
        "https://image.resy.com/3/003/1/60029/70d5aea3b27940831f08ad35493d57268658db8a/jpg/1:1/800",
      name: "Carne Mare",
      rating: 4.7,
      ratingCount: 24,
      cuisineType: "Italian",
      priceIndicator: 3,
      location: "Seaport",
    },

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
  ];

  const [restaurantDetails, setRestaurantDetails] = useState({});

  const setRestaurantDetails_fun = () => {
    console.log(
      "restaurant DETAUILS:",
      restaurant_list.filter((res) => {
        return res.id === id;
      })[0]
    );
    setRestaurantDetails(
      restaurant_list.filter((res) => {
        return res.id === id;
      })[0]
    );
  };

  useEffect(() => {
    console.log("restaurant component, id: ", id);
    setRestaurantDetails_fun();
    // const product = products.find((p) => p._id === Number(id));
  }, []);

  // useEffect(() => {
  //   console.log("restaurant details : ", restaurantDetails);
  // });

  const days = "Mo,Tu,We,Th,Fr,Sa,Su".split(",");

  return (
    <div className="restaurant-page">
      {isMobile && (
        <Image
          src={restaurantDetails.imgUrl}
          alt=""
          className="restaurant-image-mobile"
        />
      )}
      <Container className="restaurant">
        <Row>
          <Col md={7} className="left-pane">
            <Row className="restaurant-details">
              <h1 className="restaurant-name">{restaurantDetails.name}</h1>
              <p>
                {restaurantDetails.rating} * {restaurantDetails.cuisineType} *
                $$$
              </p>
              <Col>
                <p>{restaurantDetails.location}</p>
                <p>Global access dining indicator</p>
              </Col>

              <Col xs={12} md={6} className="buttons">
                <Button>Share</Button>
                <Button>Save</Button>
              </Col>
            </Row>
            <hr />
            <Row className="why-we-like">
              <h4>Why we like it</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
                sit? Dolorum magnam odio suscipit repellat corrupti ullam
                mollitia quibusdam iusto quasi error quos quidem, sint, incidunt
                nemo, repudiandae sapiente vero at laboriosam ipsa facere!
              </p>
            </Row>

            <Row className="reservation-details">
              <Col sm={6}>
                <DropdownButton
                  variant="outline-secondary"
                  title="Number of Guests"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col sm={6}>
                <Form.Control type="date" />
              </Col>
            </Row>

            {!isMobile && (
              <Row className="quick-date-picker">
                {Array.from(Array(10).keys()).map((_, index) => (
                  <Col md={1}>
                    <p className="day">{days[index % 7]}</p>
                    <p className="date">{index}</p>
                  </Col>
                ))}
              </Row>
            )}

            <Row className="time-picker">
              {Array.from(Array(15).keys()).map((_, index) => (
                <Button className="col col-3 col-sm-3 col-md-2 col-lg-2 time-tile">
                  {index + " pm"}
                </Button>
              ))}
            </Row>

            <Row className="about">
              <h4>About 'restaurantName'</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nisi quibusdam nostrum, dicta accusamus in assumenda.
                Perspiciatis, commodi illo. Voluptate, quibusdam similique
                officia necessitatibus error dolore. Veniam neque cumque
                assumenda soluta a ratione sint et quisquam excepturi cupiditate
                quasi praesentium ut, ad accusantium deserunt tempore!
              </p>
              <a href="">Read more</a>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={4} className="right-pane">
            {!isMobile && (
              <Image
                rounded
                src={restaurantDetails.imgUrl}
                alt=""
                className="restaurant-image"
              />
            )}
            <Row className="safety-measurements">
              <h4>Safety measurements</h4>
              <p>
                This restaurant has committed to taking certain safety measures
                to provide a safe, comfortable dining experience.
              </p>
              <Row className="safety-measurements-icon-container">
                <Col md={3} className="safety-measurements-icon">
                  <i class="ResyIcon ResyIcon--Cleaning &amp; Prevention">
                    <svg height="50px" width="50px" viewBox="0 0 40 40">
                      <g fill="none" transform="translate(3 3)">
                        <path
                          d="m30.5 8.1h-3.8l-1-4h-1.8v-2.2h4.1v-1.8h-8c-2.6483108.02604421-5.2401028.76902456-7.5 2.15l1 1.5c1.9656868-1.17890995 4.2081288-1.81714342 6.5-1.85h2.1v2.2h-1.8l-1 4h-2.18v1.8h13.38c.3313708 0 .6.2686292.6.6v22c0 .3313708-.2686292.6-.6.6h-14c-.3313708 0-.6-.2686292-.6-.6v-1.5h-1.8v1.5c.0054792 1.3232072 1.0767928 2.3945208 2.4 2.4h14c1.3232072-.0054792 2.3945208-1.0767928 2.4-2.4v-22c-.0054792-1.3232072-1.0767928-2.39452081-2.4-2.4zm-8.8-2.2h2.6l.55 2.2h-3.7zm-8.7 24h-13v-1.8h13c2.74 0 8.66-4.31 9.75-7.09.3-.78.05-1 0-1.09-.57-.53-1.19-.16-3 1.39s-4.33 3.59-7.75 3.59h-3v-1.8h3c.22 0 .42 0 .63-.05.4620841-.0367068.8904212-.2562746 1.19-.61.2988993-.4588556.4361468-1.0043263.39-1.55-1.5360965.0143014-3.0689689-.1433463-4.57-.47-.53657192-.1339008-1.08700154-.2043827-1.64-.21-1.30345679.0140066-2.53522889.5988242-3.37 1.6-1.16766598 1.3345314-2.85676312 2.0969965-4.63 2.09v-1.8c1.30471098-.0085508 2.53866371-.5944037 3.37-1.6 1.16766598-1.3345314 2.85676312-2.0969965 4.63-2.09.69418144.0008501 1.38576631.0847803 2.06.25 1.6414802.3566863 3.3214533.5045239 5 .44h.7l.17.68c.1553838.6893441.1791336 1.4018387.07 2.1.9077144-.5843371 1.7701514-1.236179 2.58-1.95 1.76-1.48 3.58-3 5.4-1.34.8373094.7948635 1.0418143 2.0505236.5 3.07-1.4 3.46-8.02 8.24-11.48 8.24z"
                          fill="#000"
                        ></path>
                        <path
                          d="m16 13c0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3c0-1.27 1.76-4.11 2.58-5.38.0921017-.1425864.2502543-.2287068.42-.2287068s.3278983.0861204.42.2287068c.82 1.27 2.58 4.11 2.58 5.38zm-9-2.5c0-.26-.35-.49-.91-.64-.45984148-.13073836-.81926164-.49015852-.95-.95-.14-.56-.38-.91-.64-.91s-.49.35-.64.91c-.13982525.4724871-.52096796.83457268-1 .95-.56.15-.91.38-.91.64s.35.49.91.64c.47903204.1154273.86017475.4775129 1 .95.15.56.38.91.64.91s.49-.35.64-.91c.13073836-.4598415.49015852-.8192616.95-.95.56-.14.91-.38.91-.64zm17.25 3.5c0-.28-.39-.53-1-.7-.5108426-.1400566-.9099434-.5391574-1.05-1.05-.17-.61-.42-1-.7-1s-.53.39-.7 1c-.1400566.5108426-.5391574.9099434-1.05 1.05-.61.17-1 .42-1 .7s.39.53 1 .7c.5108426.1400566.9099434.5391574 1.05 1.05.17.61.42 1 .7 1s.53-.39.7-1c.1400566-.5108426.5391574-.9099434 1.05-1.05.61-.17 1-.42 1-.7z"
                          fill="#ff462d"
                        ></path>
                      </g>
                    </svg>
                  </i>
                  <p>Cleaning & Prevention</p>
                </Col>

                <Col md={3} className="safety-measurements-icon">
                  <i class="ResyIcon ResyIcon--Staffing &amp; Operations">
                    <svg height="50px" width="50px" viewBox="0 0 40 40">
                      <g fill="none" transform="translate(5 3)">
                        <path
                          d="m5.07 14.41c-.09465633-.0938833-.14789916-.2216812-.14789916-.355s.05324283-.2611167.14789916-.355l.69-.66c.0938833-.0946563.22168123-.1478992.355-.1478992s.2611167.0532429.355.1478992l1.24 1.29 3.12-3.13c.0938833-.0946563.2216812-.1478992.355-.1478992s.2611167.0532429.355.1478992l.67.67c.0946563.0938833.1478992.2216812.1478992.355s-.0532429.2611167-.1478992.355l-4.17 4.18c-.19902369.1983362-.52097631.1983362-.72 0zm6.49 2.81c-.0938833-.0946563-.2216812-.1478992-.355-.1478992s-.2611167.0532429-.355.1478992l-3.12 3.13-1.24-1.29c-.0938833-.0946563-.22168123-.1478992-.355-.1478992s-.2611167.0532429-.355.1478992l-.69.66c-.09465633.0938833-.14789916.2216812-.14789916.355s.05324283.2611167.14789916.355l2.27 2.36c.19902369.1983362.52097631.1983362.72 0l4.17-4.18c.0946563-.0938833.1478992-.2216812.1478992-.355s-.0532429-.2611167-.1478992-.355zm0 6c-.0938833-.0946563-.2216812-.1478992-.355-.1478992s-.2611167.0532429-.355.1478992l-3.12 3.13-1.24-1.29c-.0938833-.0946563-.22168123-.1478992-.355-.1478992s-.2611167.0532429-.355.1478992l-.69.66c-.09465633.0938833-.14789916.2216812-.14789916.355s.05324283.2611167.14789916.355l2.27 2.36c.19902369.1983362.52097631.1983362.72 0l4.17-4.18c.0946563-.0938833.1478992-.2216812.1478992-.355s-.0532429-.2611167-.1478992-.355z"
                          fill="#ff462d"
                        ></path>
                        <path
                          d="m15 14.1h9v1.8h-9zm0 7.8h8v-1.8h-8zm0 6h7v-1.8h-7zm14.9-20.4v25c-.0054792 1.3232072-1.0767928 2.3945208-2.4 2.4h-25c-1.3232072-.0054792-2.39452081-1.0767928-2.4-2.4v-25c.00547919-1.3232072 1.0767928-2.39452081 2.4-2.4h5.76l.86-2h2.5c.1879368-1.72503851 1.6447542-3.03176095 3.38-3.03176095s3.1920632 1.30672244 3.38 3.03176095h2.5l.86 2h5.76c1.3232072.00547919 2.3945208 1.0767928 2.4 2.4zm-20.53-.4h11.26l-.94-2.2h-3.34l.22-1.08c.0098863-.10643759.0098863-.21356241 0-.32 0-.8836556-.7163444-1.6-1.6-1.6s-1.6.7163444-1.6 1.6c-.0098863.10643759-.0098863.21356241 0 .32l.22 1.08h-3.28zm18.73.4c0-.33137085-.2686292-.6-.6-.6h-5l.86 2h-16.73l.86-2h-5c-.33137085 0-.6.26862915-.6.6v25c0 .3313708.26862915.6.6.6h25c.3313708 0 .6-.2686292.6-.6z"
                          fill="#000"
                        ></path>
                      </g>
                    </svg>
                  </i>
                  <p>Staffing & Operations</p>
                </Col>
              </Row>
            </Row>

            <hr style={{ marginBottom: "2rem" }} />

            <Row className="location-container">
              <iframe
                className="map"
                title="VenueLocationSummaryMap"
                width="100%"
                height="150"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC6uWRmJgoYd5wx-198bfnO41WblQ5HHig&amp;q=Le%20Gratin%2C5%20Beekman%20St%2CNew%20York%2CNY%2C10038"
                allowfullscreen=""
                // style="border: 0px;"
              ></iframe>
              <Container className="address">
                <h4>Restaurant Name</h4>
                <p>Address line 1</p>
                <p>Address line 2</p>
                <Row className="social-media-icons-container">
                  <Col sm={1} className="social-media-icon">
                    <a
                      className="Link"
                      href="https://facebook.com/https://www.facebook.com/LeGratinNYC/"
                      target="_blank"
                      rel="noreferrer"
                      tabindex="0"
                    >
                      <i class="ResyIcon ResyIcon--facebook">
                        <svg height="1em" width="20" viewBox="0 0 30 30">
                          <path d="m28.3442978.00004494h-26.68857306c-.91452037 0-1.6557135.74119036-1.6557135 1.6557073v26.68847296c0 .9144046.74119313 1.6558197 1.6557135 1.6558197h14.36828856v-11.6176024h-3.9096421v-4.5276232h3.9096421v-3.3389536c0-3.87478215 2.3665575-5.98471303 5.8232107-5.98471303 1.6558259 0 3.0788629.12319452 3.4935217.17827236v4.04945765l-2.3973561.00112405c-1.8798475 0-2.2439246.89327262-2.2439246 2.20412527v2.8906873h4.4834653l-.5837148 4.5276232h-3.8997505v11.6176024h7.6448328c.9144079 0 1.6557134-.7414151 1.6557134-1.6558197v-26.68847296c0-.91451694-.7413055-1.6557073-1.6557134-1.6557073"></path>
                        </svg>
                      </i>
                    </a>
                  </Col>

                  <Col sm={1} className="social-media-icon">
                    <a
                      class="Link"
                      href="https://instagram.com/legratinnyc"
                      target="_blank"
                      rel="noreferrer"
                      tabindex="0"
                    >
                      <i class="ResyIcon ResyIcon--instagram">
                        <svg height="1em" width="20" viewBox="0 0 20 20">
                          <path d="m14.1262885.06314376c1.0647077.04814004 1.7918099.21756799 2.4276336.46452016.6577056.25570491 1.2153798.59768678 1.7711785 1.15348546.5557987.55579869.8977806 1.11347296 1.1534855 1.7711785.2469522.63644889.4157549 1.36292591.4645201 2.42763363.0452821.99039879.0582198 1.35493554.059837 3.57641966v1.09348763c-.0016172 2.2214842-.0145549 2.5860209-.059837 3.5764197-.04814 1.0647077-.2175679 1.7918099-.4645201 2.4276336-.2557049.6577056-.5976868 1.2153798-1.1534855 1.7711785s-1.1134729.8977806-1.7711785 1.1534855c-.6364489.2469522-1.3629259.4157549-2.4276336.4645201-.9903988.0452821-1.3549355.0582198-3.5764197.059837h-1.09348763c-2.22148412-.0016172-2.58602087-.0145549-3.57641966-.059837-1.06470772-.04814-1.79180994-.2175679-2.42763363-.4645201-.65770554-.2557049-1.21537981-.5976868-1.7711785-1.1534855-.55579868-.5557987-.89778055-1.1134729-1.15348546-1.7711785-.24695217-.6364489-.41575492-1.3629259-.46452016-2.4276336-.04005716-.876122-.05480348-1.2624792-.05879269-2.8777984v-2.49073025c.00398921-1.61531915.01873553-2.00167634.05879269-2.87779834.04814004-1.06470772.21756799-1.79180994.46452016-2.42763363.25570491-.65770554.59768678-1.21537981 1.15348546-1.7711785.55579869-.55579868 1.11347296-.89778055 1.7711785-1.15348546.63644889-.24695217 1.36292591-.41575492 2.42763363-.46452016.876122-.04005716 1.26247919-.05480348 2.87779834-.05879269h2.49073025c1.6153192.00398921 2.0016764.01873553 2.8777984.05879269zm-4.1262885 4.80310624c-2.835 0-5.13375 2.298125-5.13375 5.13375 0 2.835 2.298125 5.13375 5.13375 5.13375 2.835 0 5.13375-2.298125 5.13375-5.13375 0-2.835-2.298125-5.13375-5.13375-5.13375zm0 1.800625c1.840625 0 3.3325 1.491875 3.3325 3.3325s-1.491875 3.3325-3.3325 3.3325-3.3325-1.491875-3.3325-3.3325 1.491875-3.3325 3.3325-3.3325zm5.336875-3.2025c-.6625 0-1.199375.536875-1.199375 1.199375s.536875 1.199375 1.199375 1.199375 1.199375-.536875 1.199375-1.199375-.536875-1.199375-1.199375-1.199375z"></path>
                        </svg>
                      </i>
                    </a>
                  </Col>
                </Row>
              </Container>
              <Row className="contact-info">
                <a
                  class="Link VenueLocationSummary__row"
                  href="https://www.google.com/maps/search/Le%20Gratin%2C5%20Beekman%20St%2CNew%20York%2CNY%2C10038"
                  target="_blank"
                  tabindex="0"
                >
                  <i class="ResyIcon ResyIcon--pin">
                    <svg height="20" width="20" viewBox="0 0 20 20">
                      <path
                        d="m10 1.5c3.5898509 0 6.5 2.91014913 6.5 6.5 0 3.1783736-1.8115848 5.4745544-4.9479735 8.6580075l-.8458482.8488788c-.611314.6003241-.75280912.6319201-1.31466848.094788l-.63253781-.6293629-.60151476-.6104719c-2.92840208-3.0013562-4.65745725-5.2721018-4.65745725-8.3618395 0-3.58985087 2.91014913-6.5 6.5-6.5zm0 4c-1.38071187 0-2.5 1.11928813-2.5 2.5s1.11928813 2.5 2.5 2.5c1.3807119 0 2.5-1.11928813 2.5-2.5s-1.1192881-2.5-2.5-2.5z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </i>
                  <span class="">Get Directions</span>
                </a>
              </Row>

              <Row className="contact-info">
                <a
                  class="Link VenueLocationSummary__row"
                  href="tel:+12125979020"
                  target="_blank"
                  tabindex="0"
                >
                  <i class="ResyIcon ResyIcon--phone">
                    <svg height="16" width="1em" viewBox="0 0 16 16">
                      <path d="m2.52264201.0145748c-.1106446-.0221888-.24341821-.0221888-.33193401.0221887-1.1949623.4659638-1.947346 2.1744975-2.1243775 3.35050119-.5532233 3.8164649 2.45631151 7.12258851 5.22242811 9.29708591 2.45631151 1.9304212 7.16977419 5.1034124 9.95801969 2.041365.3540629-.3772088.7745127-.9319275.7523837-1.4866462-.0663868-.9319275-.9294151-1.59759-1.5932831-2.1079312-.5089655-.3772088-1.5711542-1.42008002-2.2350222-1.39789122-.5974812.0221887-.9736731.64347372-1.3498649 1.02068242l-.663868.6656625c-.1106447.1109438-1.52689628-.8209837-1.68179888-.9319274-.5753522-.3772088-1.1285755-.79879502-1.61541211-1.26475881-.4868365-.4659637-.9294151-.9763049-1.305607-1.5088349-.1106447-.1553213-1.0179309-1.508835-.9294152-1.6197787 0 0 .7745127-.8431725.995802-1.1760037.4647076-.71004.8187705-1.2647587.2876761-2.10793119-.1991604-.3106425-.4425786-.5547187-.7081258-.8209837-.4647076-.443775-.9294152-.9097388-1.4605096-1.2869475-.2876761-.2218875-.7745126-.621285-1.2170913-.6878512z"></path>
                    </svg>
                  </i>
                  <span> +1 212-597-9020</span>
                </a>
              </Row>

              <Row className="contact-info">
                <a
                  class="Link VenueLocationSummary__row"
                  href="https://www.legratinnyc.com/"
                  target="_blank"
                  tabindex="0"
                >
                  <i class="ResyIcon ResyIcon--info">
                    <svg height="16" width="1em" viewBox="0 0 16 16">
                      <path
                        d="m7.9 5c.60751322 0 1.1-.49248678 1.1-1.1s-.49248678-1.1-1.1-1.1-1.1.49248678-1.1 1.1.49248678 1.1 1.1 1.1zm.9 1-.001 6.399.801.001v.4h-3.2v-.4l.8-.001v-5.999h-.8v-.4zm7.2 2c0-4.418278-3.581722-8-8-8s-8 3.581722-8 8 3.581722 8 8 8 8-3.581722 8-8z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </i>
                  <span class="VenueLocationSummary__row--text">
                    {" "}
                    https://www.legratinnyc.com/
                  </span>
                </a>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
