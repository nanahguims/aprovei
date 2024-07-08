import React from "react";
import Accordion from "@/components/accordion";

const accordionLinguagens = [
  {
    title: "PORTUGUÊS",
    submenus: [
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
    ],
  },
  {
    title: "INGLÊS",
    submenus: [
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
    ],
  },
  {
    title: "ESPANHOL",
    submenus: [
      { title: "Interpretação", content: "Interpretação de texto- verbal e não verbal" },
    ],
  },
];

export function LinguagensConteudo() {
  return (
    <>
      <Accordion items={accordionLinguagens} />
    </>
  );
}