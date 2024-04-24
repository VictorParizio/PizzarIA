import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import "./styles.css";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuario = {
      email,
      password,
    };
    setEmail("");
    setPassword("");

    axios
      .post("http://localhost:3000/pizzaria/login", usuario)
      .then((resposta) => {
        sessionStorage.setItem("token", resposta.data.access_token);
        setEmail("");
        setPassword("");
        navigate("/menu");
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert("Algo deu errado");
        }
      });
  };

  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Entrar</h2>
        <p className="subtitle">Que bom te ver novamente, entre e aproveite!</p>

        <form onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Email"}
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/signup">Criar uma conta</Link>
      </section>
    </>
  );
};
