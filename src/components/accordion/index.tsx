"use client";

import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";
import ArrowUp from "/public/img/arrow-up.png"
import ArrowDown from "/public/img/arrow-down.png"

interface AccordionItemProps {
  title: string;
  content: string;
}

const formatContent = (text: string) => {
  return text.split("\n").map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ));
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowUp] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setArrowUp(!arrowDown);
  };

  return (
    <div className="accordion-item">
      <div onClick={toggleOpen} className="accordion-title ">
        {title}
        {arrowDown ? (
          <Image src={ArrowUp} alt="" />
        ) : (
          <Image src={ArrowDown} alt="" />
        )}
      </div>
      {isOpen && (
        <div className="accordion-content paragraph-text">
          {" "}
          {formatContent(content)}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="accordion-container default-container">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;