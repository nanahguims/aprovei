"use client";

import { Footer } from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import "../../src/styles/globals.scss";
import "../../src/app/style.scss";
import { LinguagensConteudo } from "@/components/accordion/linguagens";

const Linguagens = () =>  {
  return (
    <>
      <Header />
      <main>
      <LinguagensConteudo />
      </main>
      <Footer />
    </>
  );
}
export default Linguagens;