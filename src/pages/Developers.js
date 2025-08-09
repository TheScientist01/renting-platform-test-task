import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Developers() {
  // First row developers data
  const firstRowDevelopers = [
    {
      id: 1,
      logo: require("../images/developers/logo-01.png"),
      name: "UA real house"
    },
    {
      id: 2,
      logo: require("../images/developers/logo-02.png"),
      name: "ERA Ukraine Real Estate"
    },
    {
      id: 3,
      logo: require("../images/developers/logo-03.png"),
      name: "Happy Neighbor"
    },
    {
      id: 4,
      logo: require("../images/developers/logo-04.png"),
      name: "American Home Agents"
    },
    {
      id: 5,
      logo: require("../images/developers/logo-05.png"),
      name: "Ukr Home Agents"
    },
    {
      id: 6,
      logo: require("../images/developers/logo-06.png"),
      name: "UA real estate agency"
    }
  ];

  // Second row developers data
  const secondRowDevelopers = [
    {
      id: 7,
      logo: require("../images/developers/logo-07.png"),
      name: "Red Oak Realty"
    },
    {
      id: 8,
      logo: require("../images/developers/logo-08.png"),
      name: "Dream House"
    },
    {
      id: 9,
      logo: require("../images/developers/logo-09.png"),
      name: "Leading Real Estate Companies"
    },
    {
      id: 10,
      logo: require("../images/developers/logo-10.png"),
      name: "Home Partners of World"
    },
    {
      id: 11,
      logo: require("../images/developers/logo-11.png"),
      name: "Red Oak Realty"
    },
    {
      id: 12,
      logo: require("../images/developers/logo-13.png"),
      name: "American Home Agents"
    },
    {
      id: 13,
      logo: require("../images/developers/logo-12.png"),
      name: "UA real estate agency"
    }
  ];

  return (
    <div className="developers">
      <div className="container-fluid">
        <AnimationTitles
          title="Our the best developers"
          className="title mx-auto text-center text-md-start"
        />
        <p className="gray-50 text-center mb-5">
          The value of real estate can be affected by its utility, project, and
          demand.{" "}
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            {firstRowDevelopers.map((developer) => (
              <SwiperSlide key={developer.id}>
                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <img
                    className="pe-3"
                    src={developer.logo}
                    alt="img"
                  />
                  <h6 className="text-text-primary m-0">{developer.name}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none"
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            {secondRowDevelopers.map((developer) => (
              <SwiperSlide key={developer.id}>
                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <img
                    className="pe-3"
                    src={developer.logo}
                    alt="img"
                  />
                  <h6 className="text-text-primary m-0">{developer.name}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Developers;
