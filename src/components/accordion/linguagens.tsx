import React from "react";
import Accordion from "@/components/accordion";

const accordionLinguagens = [
  {
    title: "Linguagens",
    content:"teste ",
  },
];

export function LinguagensConteudo() {
  return (
    <>
      <Accordion items={accordionLinguagens} />
    </>
  );
}