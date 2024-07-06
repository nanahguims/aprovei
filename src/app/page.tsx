import React from "react";
import { Footer } from "@/components/footer";
import "./style.scss";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="home-container">
          <h3 className="h3-title">Cheque os conteúdos</h3>
          <div className="home-conteudo">
            <div className="home-conteudo-item">
              <a href="">
                <img src="./img/humanas.jpg" alt="" />
                <h4 className="h4-title">Ciências Humanas</h4>
              </a>
            </div>
            <div className="home-conteudo-item">
              <a href="">
                <img src="./img/exatas.jpg" alt="" />
                <h4 className="h4-title ">Ciências Exatas</h4>
              </a>
            </div>
            <div className="home-conteudo-item">
              <a href="">
                <img src="./img/biologicas.jpg" alt="" />
                <h4 className="h4-title"> Ciências Biológicas</h4>
              </a>
            </div>
            <div className="home-conteudo-item">
              <a href="">
                <img src="./img/linguagens.jpg" alt="" />
                <h4 className="h4-title">Linguagens</h4>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
