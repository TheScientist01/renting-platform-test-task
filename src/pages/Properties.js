// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CountDown from "../components/functions/CountDown";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Properties() {
  // Filter tabs data
  const filterTabs = [
    { id: 1, name: "All", active: false },
    { id: 2, name: "Cottage", active: true },
    { id: 3, name: "Chalet", active: false },
    { id: 4, name: "Manor", active: false },
    { id: 5, name: "Penthouse", active: false },
    { id: 6, name: "Farmhouse", active: false },
    { id: 7, name: "Duplex", active: false },
  ];

  // Properties data
  const propertiesData = [
    {
      id: 1,
      image: require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp"),
      title: "Cottage «Forrest 1»",
      agency: "@Red Oak Realty",
      time: { h: 9, m: 45, s: 8 },
      price: "29.71 ETH",
      liked: false
    },
    {
      id: 2,
      image: require("../images/properties/pexels-stan-krotov-12737424 1.webp"),
      title: "Freshness",
      agency: "@ERA Ukraine Real Estate",
      time: { h: 29, m: 15, s: 10 },
      price: "14.81 ETH",
      liked: true
    },
    {
      id: 3,
      image: require("../images/properties/pexels-rachel-claire-8112843 1.webp"),
      title: "Wish house",
      agency: "@UA real estate agency",
      time: { h: 23, m: 6, s: 1 },
      price: "16.62 ETH",
      liked: false
    },
    {
      id: 4,
      image: require("../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp"),
      title: "Spruce",
      agency: "@Dream House",
      time: { h: 10, m: 30, s: 58 },
      price: "17.01 ETH",
      liked: false
    },
    {
      id: 5,
      image: require("../images/properties/house_big-1.webp"),
      title: "Residence Rybna",
      agency: "@UA real estate agency",
      time: { h: 18, m: 21, s: 8 },
      price: "29.71 ETH",
      liked: false
    },
    {
      id: 6,
      image: require("../images/properties/house_big.webp"),
      title: "Blue Sky",
      agency: "@ERA Ukraine Real Estate",
      time: { h: 23, m: 16, s: 11 },
      price: "17.31 ETH",
      liked: false
    },
    {
      id: 7,
      image: require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp"),
      title: "Cottage «Forrest 1»",
      agency: "@Red Oak Realty",
      time: { h: 9, m: 45, s: 8 },
      price: "29.71 ETH",
      liked: false
    },
    {
      id: 8,
      image: require("../images/properties/pexels-stan-krotov-12737424 1.webp"),
      title: "Freshness",
      agency: "@ERA Ukraine Real Estate",
      time: { h: 29, m: 15, s: 10 },
      price: "14.81 ETH",
      liked: true
    },
    {
      id: 9,
      image: require("../images/properties/pexels-rachel-claire-8112843 1.webp"),
      title: "Wish house",
      agency: "@UA real estate agency",
      time: { h: 23, m: 6, s: 1 },
      price: "16.62 ETH",
      liked: false
    },
    {
      id: 10,
      image: require("../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp"),
      title: "Spruce",
      agency: "@Dream House",
      time: { h: 10, m: 30, s: 58 },
      price: "17.01 ETH",
      liked: false
    },
    {
      id: 11,
      image: require("../images/properties/house_big-1.webp"),
      title: "Residence Rybna",
      agency: "@UA real estate agency",
      time: { h: 18, m: 21, s: 8 },
      price: "29.71 ETH",
      liked: false
    },
    {
      id: 12,
      image: require("../images/properties/house_big.webp"),
      title: "Blue Sky",
      agency: "@ERA Ukraine Real Estate",
      time: { h: 23, m: 16, s: 11 },
      price: "17.31 ETH",
      liked: false
    }
  ];

  // Active on select a tab
  function active(e) {
    let act = document.querySelectorAll(".active");
    act[0].classList.remove("active");
    e.target.classList.add("active");
  }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center text-md-start"
          title="Discover more properties"
        />
        {/* Start tabs */}
        <div className="tabs d-flex justify-content-center align-items-center flex-wrap" style={{ gap: '12px' }}>
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              className={`ms-0 bg-black-100 border-0 ${tab.active ? 'active' : ''}`}
              onClick={active}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {propertiesData.map((property) => (
              <SwiperSlide key={property.id}>
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={property.image}
                      />
                      <i 
                        className={`${property.liked ? 'fa-solid fa-heart like text-danger' : 'fa-regular fa-heart like'}`} 
                        onClick={like}
                      ></i>
                    </div>
                    <h5 className="mt-2 text-text-primary fw-normal">
                      {property.title}
                    </h5>
                    <p className="gray-90">{property.agency}</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={property.time.h} m={property.time.m} s={property.time.s} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-text-primary">{property.price}</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;
