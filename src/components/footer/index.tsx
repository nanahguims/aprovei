import React from "react";
import "./style.scss";
import Image from "next/image";
import iconGithub from "/public/icons/github.png"
import iconInstagram from "/public/icons/instagram.png"
import iconTwitter from "/public/icons/twitter.png"
import iconYoutube from "/public/icons/youtube.png"

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links-01">
            <a className="paragraph-text" href="">
              <Image src={iconGithub} alt="" />
              Github
            </a>
            <a className="paragraph-text" href="">
              <Image src={iconInstagram} alt="" />
              Instagram
            </a>
          </div>

          <div className="footer-credits">
            <p className="paragraph-text">
              Layout desenvolvido por Beatriz Arevalo, Fernanda Guimarães,
              Gabriella Gotz e Manuella Tafernaberri
            </p>
          </div>

          <div className="footer-links-02">
            <a className="paragraph-text" href="">
              <Image src={iconTwitter} alt="" />
              Twitter
            </a>
            <a className="paragraph-text " href="">
              <Image src={iconYoutube} alt="" />
              Youtube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
