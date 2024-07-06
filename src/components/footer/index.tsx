import React from "react";
import "./style.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links-01">
            <a className="paragraph-text" href="">
              Github
            </a>
            <a className="paragraph-text" href="">
              Instagram
            </a>
          </div>

          <div className="footer-credits">
            <p className="paragraph-text"> Layout desenvolvido por ...</p>
            <img src="" alt="" />
          </div>

          <div className="footer-links-02">
            <a className="paragraph-text" href="">
              Twitter
            </a>
            <a className="paragraph-text " href="">
              Youtube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
