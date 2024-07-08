import React from "react";
import Accordion from "@/components/accordion";

const accordionLinguagens = [
  {
    title: "PORTUGUÊS",
    submenus: [
      { content: "Interpretação de texto- verbal e não verbal" },
      { content: "Interpretação de texto- verbal e não verbal" },
      { content: "Interpretação de texto- verbal e não verbal" },
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