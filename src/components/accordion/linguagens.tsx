"use client";

import React from "react";
import Accordion from "@/components/accordion";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const accordionLinguagens = [
  {
    title: "PORTUGUÊS",
    submenus: [
      { content: "Interpretação de texto- verbal e não verbal" },
      { content: "Gêneros textuais " },
      { content: "Variação Linguística" },
      { content: "Figuras de Linguagem" },
      { content: "Intertextualidade" },
      { content: "Redação " },
    ],
  },
  {
    title: "INGLÊS",
    submenus: [
      { content: "Tempos verbais " },
      { content: " Voz passiva" },
      { content: "Pronomes pessoais" },
      { content: "Linking words" },
    ],
  },
  {
    title: "ESPANHOL",
    submenus: [
      { content: "Interpretação e compreensão textual;" },
      { content: "História da hispanidade;" },
      { content: "Semântica e léxico;" },
      { content: "Funções do texto" },
      { content: "Tirinhas e charge." },
    ],
  },
];

export function LinguagensConteudo() {

  return (
    <div className="linguagens">
      <h3 className="h3-title">Linguagens</h3>
      <h4 className="h4-title">Principais Tópicos</h4>
      <div>
        <Accordion items={accordionLinguagens} />
      </div>
      <div>
        <h4 className="h4-title">Dicas</h4>
        <div className="video">
          <center>
            <ReactPlayer url={'https://www.youtube.com/watch?v=TuBKsV3lSQc'} />
          </center>
        </div>
      </div>
    </div>
  );
}

export default LinguagensConteudo;