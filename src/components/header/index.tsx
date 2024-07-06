"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.scss";

const Header = () => {
  const router = useRouter();
  const [loginUser, setloginUser] = useState<string>("");

  useEffect(() => {
    const storedUsers = localStorage.getItem("loggedInUser");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      setloginUser(users.username);
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
            {!loginUser ? <p>Usuário não logado</p> : <p>Olá, {loginUser}</p>}
            <button onClick={navigateToRegister}> Voltar o login </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
