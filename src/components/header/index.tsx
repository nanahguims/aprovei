"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.scss";

const Header = () => {
  const router = useRouter();
  const [lastUser, setLastUser] = useState<string>("");

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      if (users.length > 0) {
        const latestUser = users[users.length - 1];
        setLastUser(latestUser.username);
      }
    }
  }, []);

  const navigateToRegister = () => {
    router.push("/login");
  };
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-logo">
            <img src="./img/logo.png" alt="" />
          </div>

          <div className="header-menu">
            {!lastUser ? <p>Usuário não logado</p> : <p>Olá, {lastUser}</p>}
            <button onClick={navigateToRegister}>
              {" "}
              Voltar para tela de login{" "}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
