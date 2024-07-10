"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import "./style.scss";
import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loginUser, setloginUser] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUsers = localStorage.getItem("loggedInUser");
    if (storedUsers) {
      setloginUser(true);
    }
  }, []);

  const goLinguagens = () => {
    if(loginUser == false) {
      setError(
        "Faça o login para acessar os conteúdos"
      );
      setTimeout(() => {
        setError("")
      }, 2000);
    } else {
      router.push("/materias/linguagens");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="home-container">
          <h3 className="h3-title">Cheque os conteúdos</h3>
          {error && 
          <>
          <div className="error">
            <p style={{ color: "#ffff", marginTop: 0 }}>{error}</p>
          </div>
          </>
          }
          <div className="home-conteudo">
          <div className="home-conteudo-item">
              <button onClick={goLinguagens}>
                <img src="./img/linguagens.jpg" alt="" />
                <h4 className="h4-title">Linguagens</h4>
              </button>
            </div>
            <div className="home-conteudo-item">
             <button onClick={goLinguagens}>
                <img src="./img/humanas.jpg" alt="" />
                <h4 className="h4-title">Ciências Humanas</h4>
             </button>
            </div>
            <div className="home-conteudo-item">
              <button onClick={goLinguagens}>
                <img src="./img/exatas.jpg" alt="" />
                <h4 className="h4-title ">Ciências Exatas</h4>
              </button>
            </div>
            <div className="home-conteudo-item">
              <button onClick={goLinguagens}>
                <img src="./img/biologicas.jpg" alt="" />
                <h4 className="h4-title"> Ciências Biológicas</h4>
              </button>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
