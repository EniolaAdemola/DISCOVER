import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        The Best Online Learning Experience Ever!
                      </h6>
                      <p>
                        I have been taking courses online for years and I have
                        to say that the courses offered by this platform have
                        been the best online learning experience I've ever had.
                        The professors were knowledgeable, the materials were
                        comprehensive and the videos and assignments really
                        helped me to deepen my understanding of the subject
                        matters.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Eniola</h6>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Exceeded My Expectations</h6>
                      <p>
                        I wasn't sure what to expect from this platform, but I
                        have to say that it exceeded my expectations. The course
                        materials were well-organized and easy to follow, the
                        instructors were engaging and supportive, and I loved
                        the interactive elements that allowed me to connect with
                        other students.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ayomide</h6>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Transformative Learning Experience
                      </h6>
                      <p>
                        The courses I took on this platform were truly
                        transformative - I gained a deeper understanding of the
                        subject matter and developed skills that I was able to
                        apply in my career immediately. The instructors were
                        passionate and the support from the platform staff was
                        exceptional. I highly recommend this platform to anyone
                        looking to upskill or make a career change.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Bola</h6>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
