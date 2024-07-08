"use client";

import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";
import ArrowUp from "/public/img/arrow-up.png";
import ArrowDown from "/public/img/arrow-down.png";

interface SubmenuItemProps {
  title: string;
  content: string;
}

interface AccordionItemProps {
  title: string;
  submenus?: SubmenuItemProps[];
}

const formatContent = (text: string) => {
  return text.split("\n").map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ));
};

const SubmenuItem: React.FC<SubmenuItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowUp] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setArrowUp(!arrowDown);
  };

  return (
    <div className="submenu-item">
      <div onClick={toggleOpen} className="submenu-title">
        {title}
        {arrowDown ? (
          <Image src={ArrowUp} alt="" />
        ) : (
          <Image src={ArrowDown} alt="" />
        )}
      </div>
      {isOpen && (
        <div className="submenu-content paragraph-text">
          <button style={{ width: "100%", textAlign: "left" }}>
            {formatContent(content)}
          </button>
        </div>
      )}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, submenus = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDown, setArrowUp] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setArrowUp(!arrowDown);
  };

  return (
    <div className="accordion-item">
      <div onClick={toggleOpen} className="accordion-title">
        {title}
        {arrowDown ? (
          <Image src={ArrowUp} alt="" />
        ) : (
          <Image src={ArrowDown} alt="" />
        )}
      </div>
      {isOpen && (
        <div className="accordion-content">
          {submenus.map((submenu, index) => (
            <SubmenuItem key={index} title={submenu.title} content={submenu.content} />
          ))}
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
        <AccordionItem key={index} title={item.title} submenus={item.submenus} />
      ))}
    </div>
  );
};

export default Accordion;
