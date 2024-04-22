import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { useState } from "react";
// import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    event.preventDefault();
    const novoUsuario = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(novoUsuario);

    // axios
    //   .post("url", novoUsuario)
    //   .then(() => {
    //     console.log(novoUsuario);
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    //   })
    //   .catch(() => {
    //     alert("Algo deu errado");
    //   });
  };

  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Criar Conta</h2>
        <p className="subtitle">Crie já sua conta e faça seu pedido!</p>

        <form onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Nome"}
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <InputForm
            textLabel={"Confirmar Senha"}
            type="password"
            id="confirm-password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/login">Já tenho uma conta</Link>
      </section>
    </>
  );
};
