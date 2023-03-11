import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Hobi = () => {
  const serviceData = [
    {
      id: 1,
      icon: "images/icons/game.svg",
      title: "Gaming",
      des: "Suka main game yang santai, ga suka game toxic",
    },
    {
      id: 2,
      icon: "images/icons/coding.svg",
      title: "Coding",
      des: "Suka koding tapi kadang males buat koding",
    },
    {
      id: 3,
      icon: "images/icons/nonton.svg",
      title: "Nonton Film",
      des: "Suka nonton film tapi bukan film aneh-aneh",
    },
    {
      id: 4,
      icon: "images/icons/design.svg",
      title: "Design",
      des: "Suka ngedesain apa pun itu, tapi kadang ga males",
    },
    {
      id: 1,
      icon: "images/icons/game.svg",
      title: "Gaming",
      des: "Suka main game yang santai, ga suka game toxic",
    },
    {
      id: 2,
      icon: "images/icons/coding.svg",
      title: "Coding",
      des: "Suka koding tapi kadang males buat koding",
    },
    {
      id: 3,
      icon: "images/icons/nonton.svg",
      title: "Nonton Film",
      des: "Suka nonton film tapi bukan film aneh-aneh",
    },
    {
      id: 4,
      icon: "images/icons/design.svg",
      title: "Design",
      des: "Suka ngedesain apa pun itu, tapi kadang ga males",
    }
  ];

  return (
    <section className="service-section" id="hobi">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <h2>Hobi</h2>
              <p>Kegiatan yang sering di lakukan</p>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
            {serviceData.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${service.id}`}
                  >
                    <img src={service.icon} alt="service" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>
                    {service.des}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Hobi;
