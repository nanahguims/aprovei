import React from "react";
import "./style.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links-01">
            <a className="paragraph-text" href="">
              <img src="./icons/github.png" alt="" />
              Github
            </a>
            <a className="paragraph-text" href="">
              <img src="./icons/instagram.png" alt="" />
              Instagram
            </a>
          </div>

          <div className="footer-credits">
            <p className="paragraph-text">
              {" "}
              Layout desenvolvido por Beatriz Arevalo, Fernanda Guimarães,
              Gabriela Gotz e Manuella Tafernaberri
            </p>
            <img src="" alt="" />
          </div>

          <div className="footer-links-02">
            <a className="paragraph-text" href="">
              <img src="./icons/twitter.png" alt="" />
              Twitter
            </a>
            <a className="paragraph-text " href="">
              <img src="./icons/youtube.png" alt="" />
              Youtube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
