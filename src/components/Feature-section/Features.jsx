import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "With our accelerated learning programs, you can acquire new skills and knowledge efficiently and effectively, ensuring rapid progress in your educational journey.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "We provide round-the-clock support to our learners, ensuring that you have access to assistance, guidance, and resources whenever you need them, making your learning experience smooth and hassle-free.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Upon successful completion of our courses, you will receive industry-recognized certifications that validate your skills, enhance your credibility, and open doors to new career opportunities.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
