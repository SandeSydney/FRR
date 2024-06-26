import React from "react";
import Carousel from "react-bootstrap/Carousel";
import diving from "../resources/eventsImageGallery/diving.jpg";
import swimmingKids from "../resources/eventsImageGallery/kidsSwimming.jpg";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.jpg";
import chomaHang from "../resources/foodImageGallery/chomaHang.jpg";

function EventsCarousel() {
  return (
    <Carousel className="events_carousel">
      <Carousel.Item>
        <img src={swimmingKids} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={diving} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={chomaFilm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={chomaHang} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default EventsCarousel;
