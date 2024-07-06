import React from "react";
import "./style.scss";

export function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-logo">
            <img src="./img/logo.png" alt="" />
          </div>

          <div className="header-menu">
            <button> Login </button>
            <button> Voltar para tela de login </button>
          </div>
        </div>
      </header>
    </>
  );
}
