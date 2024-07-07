import { useState } from "react";
import { useRouter } from "next/router";
import "./style.scss";
import "../src/styles/globals.scss";

interface User {
  username: string;
  password: string;
}

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("Senha incorreta");
      return;
    }

    const newUser: User = { username, password };
    const storedUsers = localStorage.getItem("users");
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    router.push("/");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="form-image">
          <button onClick={goToHome}>
            <img src="./img/login-register.png" alt="" />
          </button>
        </div>
        <div className="form-container">
          <h3 className="h3-title">Cadastre-se</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
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
            <div>
              <label>
                Confirme sua senha:
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="form-button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
