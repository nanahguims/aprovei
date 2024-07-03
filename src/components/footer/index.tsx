import React from "react";
import "./style.scss";

export function Footer(){
    return (
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-links-01">
                    <a href="">Github</a>
                    <a href="">Instagram</a>
                </div>

                <div className="footer-credits">
                    <p>Layout desenvolvido por ...</p>
                    <img src="" alt="" />
                </div>

                <div className="footer-links-02">
                    <a href="">Twitter</a>
                    <a href="">Youtube</a>
                </div>
            </div>
        </footer>
        </>
    )
}