import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostGrid from "./BlogPostGrid";

const Discover = () => {
  return (
    <Container className="discover">
      <Row>
        <Col xxl={10} lg={8} sm={12} className="top-story">
          <a
            className="top-story-img"
            href="https://blog.resy.com/2022/06/nicole-taylor-edna-lewis-gage-and-tollner-new-york/"
            aria-hidden="true"
          >
            <img
              src="https://blog.resy.com/wp-content/uploads/2022/06/nicole-taylor-topper-800x450.jpg"
              alt=""
            />
          </a>
          <div className="top-story-text">
            <h4>Resy Spotlight</h4>
            <a href="https://blog.resy.com/2022/06/nicole-taylor-edna-lewis-gage-and-tollner-new-york/">
              On Edna Lewis, and Finding Your Own Path as a Southern Black Woman
            </a>
          </div>
        </Col>
        <Col xxl={2} lg={4} sm={12} className="discover-nav">
          <b>Discover restaurants to love.</b>

          <p>
            Be the first to know with Resy’s insider guides, deep dives on old
            standbys, and vital intel on all the latest and greatest new
            openings.
          </p>
          {/* <Nav defaultActiveKey="/home" className="flex-column text-start">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav> */}

          <div className="blog-links-container">
            <a
              className="blog-link"
              href="https://blog.resy.com/women/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>The Women of Food</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com/travel/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>Resy Travel</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com/category/the-hit-list/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>The Hit List</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com/community/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>Community Series</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com/city-guides/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>City Guides</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com/category/new-on-resy/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>New on Resy</span>
            </a>
            <a
              className="blog-link"
              href="https://resy.com/global-dining-access"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>Global Dining Access</span>
            </a>
            <a
              className="blog-link"
              href="https://resy.com/amex-offers"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span>Offers From Amex</span>
            </a>
            <a
              className="blog-link"
              href="https://blog.resy.com"
              aria-label="Read more about undefined"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span className="">Read more ›</span>
            </a>
          </div>

          <hr />

          <a href="/about" className="blog-link">
            About Resy ›
          </a>

          <div className="social-media">
            <a
              className="social-media-icon"
              href="https://www.instagram.com/resy"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Resy Instagram"
              resy-track-link="Clicked Instagram Link"
              tabindex="0"
            >
              <i className="ResyIcon ResyIcon--Instagram">
                <svg height="1em" width="1em" viewBox="0 0 20 21">
                  <path
                    d="m14.1262885.06314376c1.0647077.04814004 1.7918099.21756799 2.4276336.46452016.6577056.25570491 1.2153798.59768678 1.7711785 1.15348546.5557987.55579869.8977806 1.11347296 1.1534855 1.7711785.2469522.63644889.4157549 1.36292591.4645201 2.42763363.0452821.99039879.0582198 1.35493554.059837 3.57641966v1.09348763c-.0016172 2.2214842-.0145549 2.5860209-.059837 3.5764197-.04814 1.0647077-.2175679 1.7918099-.4645201 2.4276336-.2557049.6577056-.5976868 1.2153798-1.1534855 1.7711785s-1.1134729.8977806-1.7711785 1.1534855c-.6364489.2469522-1.3629259.4157549-2.4276336.4645201-.9903988.0452821-1.3549355.0582198-3.5764197.059837h-1.09348763c-2.22148412-.0016172-2.58602087-.0145549-3.57641966-.059837-1.06470772-.04814-1.79180994-.2175679-2.42763363-.4645201-.65770554-.2557049-1.21537981-.5976868-1.7711785-1.1534855-.55579868-.5557987-.89778055-1.1134729-1.15348546-1.7711785-.24695217-.6364489-.41575492-1.3629259-.46452016-2.4276336-.04005716-.876122-.05480348-1.2624792-.05879269-2.8777984v-2.49073025c.00398921-1.61531915.01873553-2.00167634.05879269-2.87779834.04814004-1.06470772.21756799-1.79180994.46452016-2.42763363.25570491-.65770554.59768678-1.21537981 1.15348546-1.7711785.55579869-.55579868 1.11347296-.89778055 1.7711785-1.15348546.63644889-.24695217 1.36292591-.41575492 2.42763363-.46452016.876122-.04005716 1.26247919-.05480348 2.87779834-.05879269h2.49073025c1.6153192.00398921 2.0016764.01873553 2.8777984.05879269zm-4.1262885 4.80310624c-2.835 0-5.13375 2.298125-5.13375 5.13375 0 2.835 2.298125 5.13375 5.13375 5.13375 2.835 0 5.13375-2.298125 5.13375-5.13375 0-2.835-2.298125-5.13375-5.13375-5.13375zm0 1.800625c1.840625 0 3.3325 1.491875 3.3325 3.3325s-1.491875 3.3325-3.3325 3.3325-3.3325-1.491875-3.3325-3.3325 1.491875-3.3325 3.3325-3.3325zm5.336875-3.2025c-.6625 0-1.199375.536875-1.199375 1.199375s.536875 1.199375 1.199375 1.199375 1.199375-.536875 1.199375-1.199375-.536875-1.199375-1.199375-1.199375z"
                    transform="translate(0 1)"
                  ></path>
                </svg>
              </i>
            </a>
            <a
              className="social-media-icon"
              href="https://www.twitter.com/resy"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Resy Twitter"
              resy-track-link="Clicked Twitter Link"
              tabindex="0"
            >
              <i className="ResyIcon ResyIcon--twitter">
                <svg height="1em" width="1em" viewBox="0 0 33 28">
                  <path
                    d="m10.366125 27c12.4523437 0 19.2668437-10.3911606 19.2668437-19.3866641 0-.29262107 0-.58420446-.0134062-.87682552 1.3210313-.9567256 2.4698438-2.16560339 3.3804375-3.53428133-1.2148125.54477326-2.5224375.90380477-3.8960625 1.07605688 1.3994062-.83739431 2.4698437-2.179093 2.9844375-3.77398155-1.307625.78447348-2.759625 1.34169869-4.3044375 1.64780938-1.241625-1.32924673-2.9978438-2.15211376-4.9386563-2.15211376-3.73725 0-6.7742812 3.05591852-6.7742812 6.81641045 0 .53128363.066 1.0501153.1711875 1.55441968-5.6254687-.27913144-10.61671875-3.00299769-13.95796875-7.12252114-.58059375 1.00964643-.911625 2.17909301-.911625 3.42843966 0 2.36483475 1.20140625 4.45157572 3.01125 5.67394315-1.109625-.0394312-2.15221875-.3455419-3.06384375-.85088396v.0933897c0 3.29561876 2.33784375 6.05891626 5.42746875 6.68358956-.56821875.1598001-1.16221875.2386626-1.78303125.2386626-.43621875 0-.858-.0394313-1.26740625-.1193313.858 2.7103766 3.36703125 4.6767486 6.32568745 4.7307071-2.32443745 1.8335511-5.24287495 2.9230976-8.4119062 2.9230976-.54140625 0-1.0828125-.0269792-1.6108125-.0933897 2.9844375 1.9134512 6.54946875 3.0424289 10.366125 3.0424289"
                    transform="translate(0 1)"
                  ></path>
                </svg>
              </i>
            </a>
            <a
              className="social-media-icon"
              href="https://www.facebook.com/resy"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Resy Facebook"
              resy-track-link="Clicked Facebook Link"
              tabindex="0"
            >
              <i className="ResyIcon ResyIcon--Facebook">
                <svg height="1em" width="1em" viewBox="0 0 30 31">
                  <path
                    d="m28.3442978.00004494h-26.68857306c-.91452037 0-1.6557135.74119036-1.6557135 1.6557073v26.68847296c0 .9144046.74119313 1.6558197 1.6557135 1.6558197h14.36828856v-11.6176024h-3.9096421v-4.5276232h3.9096421v-3.3389536c0-3.87478215 2.3665575-5.98471303 5.8232107-5.98471303 1.6558259 0 3.0788629.12319452 3.4935217.17827236v4.04945765l-2.3973561.00112405c-1.8798475 0-2.2439246.89327262-2.2439246 2.20412527v2.8906873h4.4834653l-.5837148 4.5276232h-3.8997505v11.6176024h7.6448328c.9144079 0 1.6557134-.7414151 1.6557134-1.6558197v-26.68847296c0-.91451694-.7413055-1.6557073-1.6557134-1.6557073"
                    transform="translate(0 1)"
                  ></path>
                </svg>
              </i>
            </a>
          </div>
        </Col>
      </Row>

      <hr className="mt-4 mb-4" />
      <BlogPostGrid />
    </Container>
  );
};

export default Discover;
