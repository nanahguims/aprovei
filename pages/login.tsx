"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import "./style.scss";
import "../src/styles/globals.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const foundUser = users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        router.push("/");
      } else {
        setError(
          "Usuário não encontrado. Por favor, verifique suas credenciais."
        );
      }
    } else {
      setError("Não há usuários cadastrados. Por favor, registre-se primeiro.");
    }
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="form-image">
          <button onClick={goToHome}>
            <img src="./img/login-register.png" alt="" />
          </button>
        </div>
        <div className="form-container">
          <h3 className="h3-title">Faça seu login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label>
                Usuário:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Senha:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="form-button" type="submit">
              Login
            </button>
          </form>
          <p>
            Você não possui conta?{" "}
            <button onClick={navigateToRegister}>Cadastrar</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
