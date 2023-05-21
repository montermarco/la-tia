import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { colors } from "../../utils/styles";
import Card from "../card/Card";
import Indications from "../indications/Indications";

const AccordionBase = ({ className, dishesByType, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <h3 onClick={() => setIsOpen(!isOpen)}>{type}</h3>
      <div
        ref={contentRef}
        style={{ overflow: "hidden" }}
        className="accordion-container"
      >
        <Indications type={type} />
        {isOpen &&
          dishesByType.map((dish, index) => <Card key={index} dish={dish} />)}
      </div>
    </div>
  );
};

const Accordion = styled(AccordionBase)`
  width: 90%;
  margin: 0 auto;
  border-radius: 0.5rem;
  border-bottom: 1px solid ${colors.gray};

  h3 {
    text-align: center;
    color: ${colors.clearText};
    font-family: "Montserrat Alternates", sans-serif;
    padding-top: 1rem;
  }

  .accordion-container {
    // background-color: beige;
  }
`;

export default Accordion;
