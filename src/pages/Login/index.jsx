import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import "./styles.css";
import { useState } from "react";
// import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    event.preventDefault();
    const usuario = {
      email,
      password,
    };
    console.log(usuario);
        setEmail("");
        setPassword("");
    // axios
    //   .get("url", usuario)
    //   .then(() => {
    //     console.log(usuario);
    //     setEmail("");
    //     setPassword("");
    //   })
    //   .catch(() => {
    //     alert("Algo deu errado");
    //   });
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
