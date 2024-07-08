"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.scss";
import Image from "next/image";
import Logo from "/public/img/logo.png";

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

  const goToHome = () => {
    router.push("/");
  };

  const sairDoLogin = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-logo">
            <button onClick={goToHome}>
              <Image src={Logo} alt="" />
            </button>
          </div>

          <div className="header-menu">
            {!loginUser ? (
              <>
                <p>Usuário não logado</p>
                <button onClick={navigateToRegister}> Voltar o login </button>
              </>
            ) : (
              <>
                <p>Olá, {loginUser}</p>
                <button onClick={sairDoLogin}>Sair</button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
